import { useAnimationState } from '../context/AnimationStateContext';
import { ScrollIndicator } from './ScrollIndicator';

export function HeroTitle() {
  const { animationState } = useAnimationState();

  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      <div className="overflow-hidden">
        <h1
          className="font-montserrat font-extrabold text-[13vw] sm:text-[11vw] bg-gradient-to-br from-emerald-400 to-sky-500 bg-clip-text text-transparent drop-shadow-2xl"
          style={{
            opacity: !animationState ? 0 : 1,
            transform: !animationState
              ? `translate3d(0, 100%, 0)`
              : `translate3d(0, 0, 0)`,
            transition: `opacity 500ms ease-in-out 800ms, transform 500ms ease-in-out 800ms`,
          }}
        >
          YEGYouth.Tech
        </h1>
      </div>
      <div className="overflow-hidden">
        <h2
          className="font-wsans font-bold text-[3.2vw] text-gray-100 text-center drop-shadow-2xl"
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
