import type { AnimationConfig, AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
import React, { useState, useEffect, useRef, useImperativeHandle, useContext } from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';

export interface LottieProps extends Omit<AnimationConfig, 'container'> {
  // 动画文件路径，一般为 json 格式
  path?: string;
  // 动画数据，一般为 json 内容，和 path 二选一
  animationData?: any;
  // 展示模式
  mode?: 'default' | 'icon';
  // 是否循环播放
  loop?: boolean;
  // 动画播放速度，默认为 1
  // 小于 1: 减缓播放速度
  // 大于 1: 加快播放速度
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface LottieRef {
  animation: AnimationItem;
}

const Lottie = React.forwardRef<LottieRef, LottieProps>(
  ({ mode = 'default', loop = true, speed = 1, className, style, ...restProps }, ref) => {
    const { iconPrefixCls } = useContext(ConfigProvider.ConfigContext);

    const [animation, setAnimation] = useState<AnimationItem>();
    const containerRef = useRef<HTMLDivElement>();

    useEffect(() => {
      if (!animation) {
        // ref: https://github.com/airbnb/lottie-web/blob/master/index.d.ts#L129
        const newAnimation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          ...restProps,
        });
        setAnimation(newAnimation);
      }
    }, []);

    useUpdateEffect(() => {
      if (animation) {
        animation.setLoop(loop);
        animation.setSpeed(speed);
      }
    }, [loop, speed]);

    useImperativeHandle(ref, () => ({
      animation,
    }));

    return (
      <div
        ref={containerRef}
        className={classNames(className, {
          // add icon className for icon mode to get default icon style
          [iconPrefixCls]: mode === 'icon',
        })}
        style={{
          display: 'inline-block',
          ...style,
        }}
      />
    );
  }
);

export default Lottie;
