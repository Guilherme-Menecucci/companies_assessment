import clsx from 'clsx';
import React, { useState } from 'react';

const getPlaceholderImage = (name: string) => {
  const firstLetter = name.charAt(0).toUpperCase();
  return `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff&size=64`;
};

const withFallbackImage = <P extends { src: string; alt: string; className: string }>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return (props: P) => {
    const [imageSrc, setImageSrc] = useState(props.src || getPlaceholderImage(props.alt));

    return (
      <WrappedComponent
        {...props}
        src={imageSrc}
        onError={() => setImageSrc(getPlaceholderImage(props.alt))}
      />
    );
  };
};

const ImageWithFallback = withFallbackImage((props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img {...props} className={clsx('h-10 w-10 rounded-full object-cover', props.className)} />
));

export default ImageWithFallback;
