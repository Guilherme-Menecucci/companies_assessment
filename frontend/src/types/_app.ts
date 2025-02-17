import { IconType } from 'react-icons/lib';

export type TColors =
  | TThemeColors
  | 'blue'
  | 'orange'
  | 'red'
  | 'yellow'
  | 'green'
  | 'lime-green'
  | 'seafoam'
  | 'purple'
  | 'pink-flamingo'
  | 'black';

export type TStatus = 'error' | 'warning' | 'info' | 'success';
export type TThemeColors = 'primary' | 'secondary' | TStatus;
export type TTextVariants = 'display' | 'heading' | 'title' | 'body' | 'label';
export type TThemeVariants = 'contained' | 'outlined' | 'text' | 'variant';
export type TSizes = 'large' | 'medium' | 'small';

export type TIcons = { [x in TStatus]: IconType };
