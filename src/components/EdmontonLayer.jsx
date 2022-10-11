import { useAnimationState } from '../context/AnimationStateContext';
import React from 'react';

export default function EdmontonLayer(props) {
  const { image, parallaxModifier, animationDelay, brightness } = props;
  const { animationState } = useAnimationState();
  const [scrollState, setScrollState] = React.useState(1);

  React.useEffect(() => {
    const listener = () => {
      setScrollState(
        document.documentElement.scrollTop || document.body.scrollTop
      );
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <img
      src={image}
      alt="Edmonton skyline"
      className="scene absolute w-full h-full object-cover object-left-bottom"
      style={{
        filter: `brightness(${brightness}%)`,
        transition: `bottom 0.5s ease-out ${animationDelay}s, opacity 0.5s ease-out ${animationDelay}s`,
        bottom: !animationState ? `calc(100px - 80vh)` : `0`,
        transform: `translate3d(0, ${(scrollState / window.innerHeight) * parallaxModifier * 10 + 1
          }px, 0)`,
        opacity: !animationState ? 0 : 1,
      }}
    />
  );
}
