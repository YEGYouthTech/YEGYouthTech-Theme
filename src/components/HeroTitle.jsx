import { useAnimationState } from '../context/AnimationStateContext';
import { ScrollIndicator } from './ScrollIndicator';

export function HeroTitle() {
  const { animationState } = useAnimationState();

  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center parallax-container">
      <div className="">
        <h1
          className="font-montserrat font-extrabold bg-gradient-to-br from-emerald-400 to-sky-500 bg-clip-text text-transparent drop-shadow-2xl tn:leading-[4rem] tn:text-[3.8rem] tn:mb-4 sm:text-[]"
          // className="title font-montserrat font-extrabold drop-shadow-2xl"
          style={{
            opacity: !animationState ? 0 : 1,
            transform: !animationState
              ? `translate3d(0, 100%, 0)`
              : `translate3d(0, 0, 0)`,
            transition: `opacity 500ms ease-in-out 800ms, transform 500ms ease-in-out 800ms`,
          }}
        >
          YEGYouth<span className="text-center block sm:inline-block">.Tech</span>
        </h1>
      </div>
      <div className="overflow-hidden">
        <h2
          className="font-wsans font-semibold text-gray-100 text-center drop-shadow-2xl tn:leading-[1.9rem] tn:text-[1.7rem]"
          style={{
            opacity: !animationState ? 0 : 1,
            transform: !animationState
              ? `translate3d(0, 100%, 0)`
              : `translate3d(0, 0, 0)`,
            transition: `opacity 500ms ease-in-out 1200ms, transform 500ms ease-in-out 1200ms`,
          }}
        >
          Edmonton Youth Technology Organization
        </h2>
      </div>

      <ScrollIndicator />
    </div>
  );
}
