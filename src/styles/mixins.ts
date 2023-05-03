import {css} from '@emotion/native';
import {theme} from './theme';

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const flex = (flex: number = 1) => `
  flex: ${flex};
  justify-content: center;
  align-items: center;
`;

export const size = (w: number, h: number = w) => `
  width: ${w}px;
  height: ${h}px;
`;
export const circle = css`
  border-radius: 9999px;
`;
export const rem = (size: number) => {
  return `${theme.fontSizes.base * size}px`;
};
export const remNumber = (size: number) => {
  return theme.fontSizes.base * size;
};
