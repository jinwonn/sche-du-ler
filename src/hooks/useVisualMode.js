import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  const transition = (initial) => {
    setMode(initial)
  };

  return {mode, transition};
}