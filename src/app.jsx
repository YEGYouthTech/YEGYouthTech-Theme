import EdmontonLayer from './components/EdmontonLayer'
import ExampleReactComponent from './components/ExampleReactComponent'
import { HeroTitle } from './components/HeroTitle'
import { StarBG } from './components/StarBG'
import { AnimationStateContext } from './context/animationState'
import SmoothScroll from 'smoothscroll-for-websites'

export default function App() {
  const [animationState, setAnimationState] = React.useState(false)

  React.useEffect(() => {
    SmoothScroll({
      // Scrolling Core
      animationTime: 1000, // [ms]
      stepSize: 100, // [px]

      // Acceleration
      accelerationDelta: 20, // 50
      accelerationMax: 2, // 3

      // Keyboard Settings
      keyboardSupport: true, // option
      arrowScroll: 200, // [px]

      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm: true,
      pulseScale: 4,
      pulseNormalize: 1,

      // Other
      touchpadSupport: true, // ignore touchpad by default
      fixedBackground: true,
      excluded: '',
    })
  })

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationState(true)
    }, 1000)
  })

  return (
    <AnimationStateContext.Provider
      value={{ animationState, setAnimationState }}
    >
      <div className="relative w-screen h-screen overflow-hidden">
        <StarBG />
        <EdmontonLayer
          image="https://media.discordapp.net/attachments/746177266471534695/1011395732823089214/output2.png"
          parallaxModifier={40}
          animationDelay={0.4}
        />
        <EdmontonLayer
          image="https://media.discordapp.net/attachments/746177266471534695/1011395732424634439/output1.png"
          parallaxModifier={20}
          animationDelay={0.2}
        />
        <EdmontonLayer
          image="https://media.discordapp.net/attachments/746177266471534695/1011395732017791007/output0.png"
          parallaxModifier={0}
          animationDelay={0}
        />
        <HeroTitle />
      </div>
      <div class="max-w-sm mx-auto">
        {Array(40)
          .fill(null)
          .map(() => (
            <ExampleReactComponent />
          ))}
      </div>
    </AnimationStateContext.Provider>
  )
}
