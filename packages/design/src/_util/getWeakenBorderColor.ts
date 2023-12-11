import { TinyColor } from '@ctrl/tinycolor';

export function getWeakenBorderColor(color: string) {
  return new TinyColor(color).setAlpha(0.4).toHex8String();
}
