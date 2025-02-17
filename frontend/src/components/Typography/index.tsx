import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { TTypography } from '../../types/components/Typography';

import {
  typographyClasses,
  typographyEmphasisClasses,
  typographyEmphasisColorClasses,
} from '../../data/css/typography';

const Typography = forwardRef<HTMLElement, TTypography>((props, ref) => {
  const {
    children,
    variant,
    component,
    size,
    className,
    emphasis,
    emphasisColor = 'primary',
    ...rest
  } = props;

  const Component = component as React.ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        'block align-middle font-sans antialiased',
        typographyClasses[variant][size],
        emphasis && typographyEmphasisClasses[emphasis],
        emphasis && typographyEmphasisColorClasses[emphasisColor],
        !className?.includes('text-') && 'text-inherit',
        className,
      )}
      {...rest}
    >
      {emphasis ? <div className="relative text-inherit">{children}</div> : children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export default Typography;
