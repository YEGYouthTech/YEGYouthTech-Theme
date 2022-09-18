import { useAnimationState } from '../context/animationState'
import { ScrollIndicator } from './ScrollIndicator'

export function HeroTitle() {
  const { animationState } = useAnimationState()
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      <div className="overflow-hidden">
        <h1
          className="font-montserrat font-extrabold text-[12vw] sm:text-[12vw] bg-gradient-to-br from-blue-400 to-fuchsia-500 via-purple-400 bg-clip-text text-transparent drop-shadow-lg"
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
          class="font-wsans font-bold text-[6vw] sm:text-[4.2vw] text-gray-100 text-center"
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
  )
}
