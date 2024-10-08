//@ts-nocheck
"use client";
import {
  AnimationMixer,
  AnimationAction,
  VectorKeyframeTrack,
  AnimationClip,
} from "three";
import { Html, useAnimations, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useEffect, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

const Character = ({
  scale,
  position,
  rotation,
  theme,
}: {
  theme: string;
  scale: Vector3;
  position: Vector3;
  rotation?: Vector3;
}) => {
  const characterRef = useRef<any>(null);
  const { scene, animations } = useGLTF(
    theme === "dark" ? "/space.glb" : "/terrarium.glb"
  );
  const [mixer, setMixer] = useState<AnimationMixer | null>(null);
  const [actions, setActions] = useState<{
    [key: string]: AnimationAction | null;
  }>({});

  useEffect(() => {
    if (characterRef.current && animations.length) {
      const newMixer = new AnimationMixer(characterRef.current);
      const newActions = {};

      animations.forEach((clip: AnimationClip) => {
        newActions[clip.name] = newMixer.clipAction(clip);
        newActions[clip.name]?.play();
      });

      setMixer(newMixer);
      setActions(newActions);

      return () => {
        newMixer.stopAllAction(); // Limpando as ações ao desmontar ou mudar o tema
      };
    }
  }, [animations, theme]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);

    if (characterRef.current) {
      characterRef.current.rotation.x = rotation[0];
      characterRef.current.rotation.y = rotation[1];
      characterRef.current.rotation.z = rotation[2];
    }
  });

  return (
    <mesh ref={characterRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

const Loading = () => {
  const { progress } = useProgress();

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-screen h-screen flex gap-4 flex-col items-center justify-center bg-background fixed top-0 left-0 z-[100]"
        >
          <p className="text-primary text-2xl">Loading... {progress}%</p>
          <div className="h-8 w-2/3">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{
                duration: 0.2,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function CharacterCanvas() {
  const { theme } = useTheme();
  const [rotationX, setRotationX] = useState(-0.0006);
  const [rotationY, setRotationY] = useState(-0.00075);
  const [scale, setScale] = useState<Vector3>([1, 1, 1]);
  const [position, setPosition] = useState<Vector3>([1.8, -1, 2]);

  useEffect(() => {
    const scrollRefContainer = document.querySelector("body") as HTMLElement;

    const handleScroll = () => {
      const scroll = scrollRefContainer?.scrollTop;
      if (!scroll) return;

      let newRotationX = 2 * scroll * -0.0006;
      let newRotationY = 2 * scroll * -0.00075;

      newRotationX = newRotationX < -0.72 ? -0.72 : newRotationX;
      newRotationY = newRotationY < -0.9 ? -0.9 : newRotationY;

      setRotationX(newRotationX);
      setRotationY(newRotationY);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.8, 0.8, 0.8]);
        setPosition([1, -1, 1.6]);
      } else if (window.innerWidth < 1024) {
        setScale([0.8, 0.8, 0.8]);
        setPosition([1.8, -1, 2]);
      } else if (window.innerWidth < 1440) {
        setScale([1, 1, 1]);
        setPosition([1.8, -1, 2]);
      } else {
        setScale([1.2, 1.2, 1.2]);
        setPosition([1.8, -1, 2]);
      }
    };

    handleResize();
    scrollRefContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      scrollRefContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Loading />
      <Canvas
        className="w-screen h-screen relative"
        camera={{
          near: 0.1,
          far: 50,
        }}
      >
        <Suspense>
          <pointLight position={[1.3, -1, 2.8]} intensity={0.5} />
          <hemisphereLight intensity={2} />
          {theme && (
            <Character
              theme={theme}
              scale={scale}
              position={position}
              rotation={[rotationX, rotationY, 0]}
            />
          )}
        </Suspense>
      </Canvas>
    </>
  );
}
