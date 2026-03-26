"use client";

import Shuffle from "./Shuffle";

export default function ShuffleText() {
  return (
    <Shuffle
      text="SABA CODERS"
      shuffleDirection="right"
      duration={0.4}
      stagger={0.04}
      triggerOnce={true}
      triggerOnHover={true}
      className="text-base font-medium tracking-tight"
    />
  );
}
