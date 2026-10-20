"use client";

import { useEffect, useState } from "react";

type AsciiAnimation = {
  fps: number;
  frames: string[][];
};

export default function AsciiDancer({ className }: { className?: string }) {
  const [animation, setAnimation] = useState<AsciiAnimation | null>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    fetch("/ascii-frames.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  useEffect(() => {
    if (!animation) return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % animation.frames.length),
      1000 / animation.fps,
    );
    return () => clearInterval(id);
  }, [animation]);

  return <pre className={className}>{animation?.frames[frame].join("\n")}</pre>;
}
