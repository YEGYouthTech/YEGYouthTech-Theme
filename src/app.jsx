import React from 'react';
import EdmontonLayer from './components/EdmontonLayer';
import { HeroTitle } from './components/HeroTitle';
import { StarBG } from './components/StarBG';
import { AnimationStateContext } from './context/AnimationStateContext';
import Navbar from "./components/Navbar";
import SmoothScroll from 'smoothscroll-for-websites';

export default function App() {
  const [animationState, setAnimationState] = React.useState(false);

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
    });
  });

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 1000);
  });

  return (
    <AnimationStateContext.Provider
      value={{ animationState, setAnimationState }}
    >
      <Navbar />
      
      <div className="relative w-screen h-screen overflow-hidden">
        <StarBG />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732823089214/output2.png"
          image="https://i.imgur.com/NE6Sqs2.png"
          parallaxModifier={40}
          animationDelay={0.4}
          brightness={70}
        />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732424634439/output1.png"
          image="https://i.imgur.com/NiNYv7m.png"
          parallaxModifier={20}
          animationDelay={0.2}
          brightness={60}
        />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732017791007/output0.png"
          image="https://i.imgur.com/cxTWGEZ.png"
          parallaxModifier={0}
          animationDelay={0}
          brightness={80}
        />
        <HeroTitle />
      </div>

      <div className="max-w-sm mx-auto">

      </div>
    </AnimationStateContext.Provider>
  );
}
