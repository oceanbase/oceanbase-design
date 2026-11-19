import React, { useContext, useEffect, useMemo, useState } from 'react';
import { App, Modal as AntModal, notification as antNotification } from 'antd';
import { createMessageCompat } from '../message/createMessageCompat';
import { useMessageCompat } from '../message/useMessageCompat';
import type { ObMessageInstance } from '../message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import formatToken from 'antd/lib/theme/util/alias';
import ConfigProvider from '../config-provider';
import useModalStyle from '../modal/style';
import { createObNotification } from '../notification/createObNotification';
import { NotificationDurationContext } from '../notification/durationContext';
import { ensureNotificationConfig } from '../notification/ensureNotificationConfig';
import useNotificationStyle from '../notification/style';
import { useObNotification } from '../notification/useObNotification';
import type { ObNotificationInstance } from '../notification/interface';
import { genObToken } from '../theme/obToken';
import theme from '../theme';
import defaultTheme from '../theme/default';
import type { GlobalToken } from '../theme/interface';

const { defaultAlgorithm, defaultSeed, useToken } = theme;

// set default token
const mapToken = {
  ...defaultAlgorithm(defaultSeed),
  ...defaultTheme.token,
  // need to override some Alias Token values
  override: {
    boxShadow: defaultTheme.token?.boxShadow,
    boxShadowSecondary: defaultTheme.token?.boxShadowSecondary,
    boxShadowTertiary: defaultTheme.token?.boxShadowTertiary,
  },
};
// `token` / `obToken` are assigned during render on purpose, unlike the static functions below.
// Consumers read them while rendering (`obToken.colorPrimary`), so they must always describe the
// tree that is rendering right now. Rolling them back to another root on unmount would make
// rendered markup and the static token disagree. Static functions are only called from event
// handlers and effects, where a destroyed root is simply broken.
let token = formatToken(mapToken);
let obToken = genObToken(token as GlobalToken);

type NotificationInstance = ObNotificationInstance & {
  useNotification: typeof useObNotification;
};
type MessageInstance = ObMessageInstance & {
  useMessage: typeof useMessageCompat;
};
type ModalInstance = Omit<ModalStaticFunctions, 'warn'> & {
  useModal: typeof AntModal.useModal;
};

interface StaticFunctionBundle {
  notification: NotificationInstance;
  message: MessageInstance;
  modal: ModalInstance;
}

ensureNotificationConfig();

const defaultNotification: NotificationInstance = {
  ...createObNotification(antNotification),
  useNotification: useObNotification,
};

// Fallback bundle, used before any ConfigProvider registers and after all of them unmount.
// It delegates to antd's static methods, which do not depend on a mounted React root.
const defaultBundle: StaticFunctionBundle = {
  notification: defaultNotification,
  message: {
    ...createMessageCompat(defaultNotification),
    useMessage: useMessageCompat,
  },
  modal: AntModal,
};

let notification: NotificationInstance = defaultBundle.notification;
let message: MessageInstance = defaultBundle.message;
let modal: ModalInstance = defaultBundle.modal;

/**
 * Bundles of the outermost ConfigProvider of every mounted React root, keyed by mount order.
 *
 * An application may render into several roots, for example a detached root created with
 * `ReactDOM.render` / `ReactDOM.createRoot` for an alert. Each of them is the outermost
 * ConfigProvider of its own tree, so each of them injects static functions. Registering and
 * unregistering bundles keeps the module-level static methods pointing at a mounted root instead
 * of a destroyed `App` instance, whose holder is gone and silently drops every notice.
 *
 * The key is the mount order and `Map.set` keeps the position of an existing key, so ownership is
 * a pure function of mount order: a root whose bundle identity changes (for example an inline
 * `notification={{ duration }}` object) keeps its original position instead of moving to the end.
 */
const activeBundles = new Map<number, StaticFunctionBundle>();
let bundleOrderSeed = 0;

const applyBundle = (bundle: StaticFunctionBundle) => {
  notification = bundle.notification;
  message = bundle.message;
  modal = bundle.modal;
};

/** Bundle of the most recently mounted root that is still mounted, or the module-level default. */
const getCurrentBundle = (): StaticFunctionBundle => {
  // `Map` iterates in insertion order, so the last visited bundle is the one that mounted last.
  let current = defaultBundle;
  activeBundles.forEach(bundle => {
    current = bundle;
  });
  return current;
};

export default () => {
  // automatically inject useToken, avoid declaring it every time
  token = useToken().token;
  obToken = genObToken(token as GlobalToken);

  // consume notification duration configured by ConfigProvider
  const notificationDuration = useContext(NotificationDurationContext);

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal');
  const notificationPrefixCls = getPrefixCls('notification');

  // register Modal style, ensure static function can also apply style
  useModalStyle(prefixCls);
  useNotificationStyle(notificationPrefixCls);

  const staticFunction = App.useApp();
  // replace antd's static methods, support consuming ConfigProvider configuration
  const bundle = useMemo<StaticFunctionBundle>(() => {
    const nextNotification: NotificationInstance = {
      ...createObNotification(staticFunction.notification, { durations: [notificationDuration] }),
      useNotification: useObNotification,
    };
    return {
      notification: nextNotification,
      message: {
        ...createMessageCompat(nextNotification),
        useMessage: useMessageCompat,
      },
      modal: {
        ...staticFunction.modal,
        useModal: AntModal.useModal,
      },
    };
  }, [staticFunction, notificationDuration]);

  // A stable mount order for this root. The lazy initializer runs once per mount, so re-renders
  // and bundle identity changes keep the root at its original position in `activeBundles`.
  const [bundleOrder] = useState(() => bundleOrderSeed++);

  // Compatibility shim for statics called before effects run, such as the layout effect of a
  // sibling: with no root registered yet, apply during render so the call already consumes this
  // root's configuration.
  if (activeBundles.size === 0) {
    applyBundle(bundle);
  }

  useEffect(() => {
    activeBundles.set(bundleOrder, bundle);
    // resolve the owner instead of writing this bundle: a root that is not the current owner must
    // not take over just because its own bundle identity changed
    applyBundle(getCurrentBundle());
  }, [bundleOrder, bundle]);

  useEffect(() => {
    return () => {
      activeBundles.delete(bundleOrder);
      // Unmount order is not guaranteed to be the reverse of mount order, so roll back to the
      // root that mounted last among the ones that are still mounted.
      applyBundle(getCurrentBundle());
    };
  }, [bundleOrder]);

  return null;
};

export { token, obToken, message, notification, modal };
