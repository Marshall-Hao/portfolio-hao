"use client";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import p5Types from "p5";
// import Sketch from "react-p5";
import Sketch from "react-p5";

import "p5/lib/addons/p5.sound";
import p5Types from "p5";

// import soundVertex from "../../../components/experiments/shader/sound_animation/vertex.glsl";
// import soudnFrag from "../../../components/experiments/shader/sound_animation/fragment.glsl";
const FullScreen = styled.span`
  position: fixed;
  right: 0;
  top: 0;
  padding: 2vw;
  cursor: pointer;
`;

const WordBox = styled.div`
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  font-size: 25vh;
  line-height: 0.8;
  mix-blend-mode: difference;
  pointer-events: none;

  > span {
    display: block;
  }
`;

const SoundButton = styled.button`
  display: block;
  position: fixed;
  right: 2%;
  bottom: 6%;
  padding: 1vw 5vw;
  border: 1px solid white;
  background: black;
  color: white;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
`;

const Page = () => {
  let myShaders,
    audio,
    amp,
    fft,
    beatDetect,
    bgColor = "#805AD5";
  let shapeRotation = {
    x: 0,
    y: 0,
  };
  let words = [
    "Energetic",
    "Pulsating",
    "Rhythmic",
    "Minimalistic",
    "Futuristic",
    "Driving",
    "Dark",
    "Experimental",
    "Hypnotic",
    "Industrial",
    "精力充沛",
    "脈動的",
    "有節奏的",
    "極簡主義",
    "未來感",
    "驅動力強",
    "黑暗的",
    "實驗性的",
    "催眠的",
    "工業風格的",
  ];
  const box = useRef();
  const des = useRef();
  const preload = (p5) => {
    myShaders = p5.loadShader(
      "/sound_animation/vertex.glsl",
      "/sound_animation/fragment.glsl"
    );
    audio = p5.loadSound("/sound.mp3");
  };

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(
      p5.windowWidth,
      p5.windowHeight,
      p5.WEBGL
    );

    cnv.parent(box.current);

    amp = new window.p5.Amplitude();
    fft = new window.p5.FFT();

    beatDetect = new window.p5.PeakDetect(20, 20000, 0.2);
    beatDetect.onPeak(() => {
      changeBackground(p5);
      changeTexts(p5);
    });

    p5.shader(myShaders);
  };

  const draw = (p5) => {
    p5.background(bgColor);
    fft.analyze();
    beatDetect.update(fft);

    let freq = fft.getCentroid();
    freq *= 0.001;

    const mapCentroid = p5.map(freq, 0, 8, -1, 1);
    const mapFreq = p5.map(
      fft.getEnergy("mid"),
      0,
      50,
      0,
      0.1
    );

    myShaders.setUniform("uAmplitude", mapCentroid);
    myShaders.setUniform("uFrequency", mapFreq);

    myShaders.setUniform("uTime", p5.frameCount * 0.001);

    shapeRotation.y = p5.map(
      p5.mouseY,
      0,
      p5.height,
      0,
      0.01
    );
    shapeRotation.x = p5.map(
      p5.mouseX,
      0,
      p5.width,
      0,
      0.01
    );

    p5.rotateY(p5.frameCount * shapeRotation.y);
    p5.rotateX(p5.frameCount * shapeRotation.x);
    p5.sphere(p5.width / 8, 50, 50);
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const mousePressed = (p5) => {
    if (
      p5.mouseX > 0 &&
      p5.mouseX > p5.width - 100 &&
      p5.mouseY > 0 &&
      p5.mouseY < 100
    ) {
      // * p5 build in fullscreen() method
      let fs = p5.fullscreen();
      p5.fullscreen(!fs);
    }
  };

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const changeBackground = (p5) => {
    bgColor = p5.color(
      p5.random(255),
      p5.random(255),
      p5.random(255)
    );
  };

  const changeTexts = (p5) => {
    des.current.children.forEach((el, i) => {
      setTimeout(() => {
        el.innerHTML = p5.random(words);
      }, p5.random(200) * i);
    });
  };

  return (
    <Box
      zIndex={3}
      position="fixed"
      width="100%"
      height="100vh"
      top={0}
      left={0}
      ref={box}
    >
      <FullScreen>FS</FullScreen>
      <WordBox ref={des}>
        <span>Rhythmic</span>
        <span>有節奏的</span>
        <span>Minimalistic</span>
        <span>驅動力強</span>
        <span>code.</span>
      </WordBox>
      <SoundButton onClick={toggleMusic}>
        Play / Pause
      </SoundButton>
      <Sketch
        setup={setup}
        draw={draw}
        preload={preload}
        windowResized={windowResized}
        mousePressed={mousePressed}
      />
    </Box>
  );
};

export default Page;
