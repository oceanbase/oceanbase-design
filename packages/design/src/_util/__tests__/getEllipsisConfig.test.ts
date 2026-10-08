import React from 'react';
import Tooltip from '../../tooltip';
import { getEllipsisConfig } from '../getEllipsisConfig';

describe('getEllipsisConfig', () => {
  it('returns undefined when ellipsis is not enabled', () => {
    expect(getEllipsisConfig(undefined, 'text')).toBeUndefined();
  });

  it('returns false when ellipsis is disabled', () => {
    expect(getEllipsisConfig(false, 'text')).toBe(false);
  });

  it('enables Tooltip by default when ellipsis is true', () => {
    expect(getEllipsisConfig(true, 'text')).toEqual({ tooltip: true });
  });

  it('enables Tooltip by default when ellipsis is a config object', () => {
    expect(getEllipsisConfig({ rows: 2 }, 'text')).toEqual({ rows: 2, tooltip: true });
  });

  it('keeps ellipsis config and enables Tooltip by default when tooltip is undefined', () => {
    expect(getEllipsisConfig({ rows: 2, tooltip: undefined }, 'text')).toEqual({
      rows: 2,
      tooltip: true,
    });
  });

  it('keeps custom Tooltip content', () => {
    expect(getEllipsisConfig({ tooltip: 'custom tooltip' }, 'text')).toEqual({
      tooltip: { title: 'custom tooltip' },
    });
  });

  it('keeps custom Tooltip props', () => {
    expect(getEllipsisConfig({ tooltip: { placement: 'topLeft' } }, 'text')).toEqual({
      tooltip: { placement: 'topLeft' },
    });
  });

  it('supports enabling Tooltip explicitly', () => {
    expect(getEllipsisConfig({ tooltip: true }, 'text')).toEqual({ tooltip: true });
  });

  it('supports disabling Tooltip explicitly', () => {
    expect(getEllipsisConfig({ tooltip: false }, 'text')).toEqual({
      tooltip: { title: false },
    });
  });

  it('disables default Tooltip when children is already wrapped by Tooltip', () => {
    const children = React.createElement(
      Tooltip,
      { title: 'wrapped tooltip' },
      React.createElement('span', null, 'text')
    );
    expect(getEllipsisConfig(true, children)).toEqual({ tooltip: false });
  });

  it('disables default Tooltip when one of array children is wrapped by Tooltip', () => {
    const children = [
      React.createElement('span', { key: 'icon' }, 'icon'),
      React.createElement(Tooltip, { key: 'tooltip', title: 'wrapped tooltip' }, 'text'),
    ];
    expect(getEllipsisConfig({ rows: 1 }, children)).toEqual({ rows: 1, tooltip: false });
  });

  it('disables default Tooltip when children is wrapped by Fragment and Tooltip', () => {
    const children = React.createElement(
      React.Fragment,
      null,
      React.createElement(Tooltip, { title: 'wrapped tooltip' }, 'text')
    );
    expect(getEllipsisConfig({ rows: 1 }, children)).toEqual({ rows: 1, tooltip: false });
  });

  it('enables default Tooltip when array children does not contain Tooltip', () => {
    const children = [
      React.createElement('span', { key: 'icon' }, 'icon'),
      React.createElement('span', { key: 'text' }, 'text'),
    ];
    expect(getEllipsisConfig({ rows: 1 }, children)).toEqual({ rows: 1, tooltip: true });
  });
});
