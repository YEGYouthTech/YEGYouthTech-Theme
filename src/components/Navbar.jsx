import React, { useState } from 'react'
import { useAnimationState } from '../context/AnimationStateContext'

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false)
  const { animationState } = useAnimationState()

  return (
    <nav
      className="fixed top-[2.5rem] right-[2.5rem] z-50 w-[14rem] bg-gradient-to-br from-emerald-400 to-sky-500 px-4 py-4 rounded-md"
      style={{
        opacity: !animationState ? 0 : 1,
        transform: !animationState
          ? `translate3d(100%, 0, 0)`
          : `translate3d(0, 0, 0)`,
        transition: `opacity 500ms ease-in-out 1800ms, transform 500ms ease-in-out 1800ms`,
      }}
    >
      {/* Logo */}

      <div className="flex flex-row items-center justify-between">
        <div>
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/113301687?s=200&v=4"
              alt="Logo"
              className="rounded-md w-11"
            />
          </a>
        </div>

        <div className="w-9 h-6 flex flex-col items-center justify-between cursor-pointer">
          {['full', '3/4', '2/4'].map((n, index) => {
            return (
              <span
                key={index}
                className={`w-${n} h-[3px] bg-neutral-900/75 rounded-md ml-auto`}
              ></span>
            )
          })}
        </div>
      </div>

      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">CoT</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Opportunities</a>
          </li>
          <li>
            <a href="#">Puzzle Week</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
