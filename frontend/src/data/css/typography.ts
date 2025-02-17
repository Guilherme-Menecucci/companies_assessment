import { TThemeColors } from '../../types/_app';
import { TTextEmphasis, TTextSize, TTextVariant } from '../../types/components/Typography';

const typographyClasses: Record<TTextVariant, Record<TTextSize, string>> = {
  display: {
    large: 'text-8xl font-normal tracking-[0] leading-[7.25rem]',
    medium: 'text-7xl font-normal tracking-[0] leading-[5.5rem]',
    small: 'text-6xl font-normal tracking-[0] leading-[4.5rem]',
  },
  heading: {
    large: 'text-5xl font-normal tracking-[0] leading-[3.25rem]',
    medium: 'text-4xl font-normal tracking-[0] leading-10',
    small: 'text-3xl font-normal tracking-[0] leading-9',
  },
  title: {
    large: 'text-2xl font-normal tracking-[0] leading-7',
    medium: 'text-xl font-medium tracking-[.15] leading-6',
    small: 'text-lg font-normal tracking-[0] leading-7',
  },
  body: {
    large: 'text-lg font-normal tracking-[.5] leading-7',
    medium: 'text-base font-normal tracking-[.5] leading-6',
    small: 'text-sm font-normal tracking-[.25] leading-5',
  },
  label: {
    large: 'text-sm font-medium tracking-widest leading-5',
    medium: 'text-xs font-medium tracking-[.5] leading-4',
    small: 'text-[11px] font-medium tracking-[.5] leading-4',
  },
};

const typographyEmphasisClasses: Record<TTextEmphasis, string> = {
  normal:
    'relative w-max before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-3',
  full: 'relative before:absolute before:-inset-1 before:block before:skew-y-3',
};

const typographyEmphasisColorClasses: Record<TThemeColors, string> = {
  primary: 'before:bg-primary',
  secondary: 'before:bg-secondary',
  success: 'before:bg-success',
  error: 'before:bg-error',
  warning: 'before:bg-warning',
  info: 'before:bg-info',
};

export { typographyClasses, typographyEmphasisClasses, typographyEmphasisColorClasses };
