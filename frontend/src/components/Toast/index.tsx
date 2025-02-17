import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { TToastProps } from '../../types/components/Toast';

import { statusIcons } from '../../data/css/statusIcons';

import Typography from '../../components/Typography';

const Toast = forwardRef<HTMLDivElement, TToastProps>(({ type, title, description }, ref) => {
  const Icon = statusIcons[type];

  return (
    <div
      ref={ref}
      className={clsx(
        'peer z-50 mt-4 mr-4 flex w-full items-start border-2 border-solid bg-white p-2 shadow-md transition-all',
        'sm:peer-[]:mb-2 sm:m-0 sm:mb-4 sm:ml-4 sm:min-w-[350px]',
        `toast-${type}`,
        `border-l-8 border-${type}`,
      )}
    >
      <Typography component="div" variant="heading" size="large">
        <Icon />
      </Typography>
      <div className="ml-4 inline-flex flex-col">
        {title ? (
          <Typography component="h2" variant="heading" size="medium" emphasisColor={type}>
            {title}
          </Typography>
        ) : null}
        <Typography component="p" variant="body" size="large">
          {description}
        </Typography>
      </div>
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
