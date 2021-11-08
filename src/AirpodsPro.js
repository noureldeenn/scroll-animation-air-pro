import './AirPro.css';
import a001 from './assets/a001.PNG';
import a002 from './assets/a002.PNG';
import a003 from './assets/a003.PNG';
import a004 from './assets/a004.PNG';
import a005 from './assets/a005.PNG';
import a006 from './assets/a006.PNG';
import a007 from './assets/a007.PNG';
import a008 from './assets/a008.PNG';
import a009 from './assets/a009.PNG';
import a010 from './assets/a010.PNG';
import a011 from './assets/a011.PNG';
import a012 from './assets/a012.PNG';
import a013 from './assets/a013.PNG';
import a014 from './assets/a014.PNG';
import a015 from './assets/a015.PNG';
import a016 from './assets/a016.PNG';
import a017 from './assets/a017.PNG';
import a018 from './assets/a018.PNG';
import a019 from './assets/a019.PNG';
import a020 from './assets/a020.PNG';
import a021 from './assets/a021.PNG';
import a022 from './assets/a022.PNG';
import a023 from './assets/a023.PNG';
import a024 from './assets/a024.PNG';
import a025 from './assets/a025.PNG';
import a026 from './assets/a026.PNG';
import a027 from './assets/a027.PNG';
import a028 from './assets/a028.PNG';
import a029 from './assets/a029.PNG';



function AirpodsPro() {
  const canvas = document?.getElementById("hero-lightpas");
  const refHandler = (canvas) => {
    if (!canvas) return;

    let context = canvas.getContext( "2d" );
    const html = document.documentElement;
    const currentFrame = index => {
        if (index === 1) {
          return a001;
        } else if (index === 2) {
          return a002;
        } else if (index === 3) {
          return a003;
        } else if (index === 4) {
          return a004;
        } else if (index === 5) {
          return a005;
        } else if (index === 6) {
          return a006;
        } else if (index === 7) {
          return a007;
        } else if (index === 8) {
          return a008;
        } else if (index === 9) {
          return a009;
        } else if (index === 10) {
            return a010;
        } else if (index === 11) {
            return a011;
        } else if (index === 12) {
            return a012;
        } else if (index === 13) {
            return a013;
        } else if (index === 14) {
            return a014;
        } else if (index === 15) {
            return a015;
        } else if (index === 16) {
            return a016;
        } else if (index === 17) {
            return a017;
        } else if (index === 18) {
            return a018;
        } else if (index === 19) {
            return a019;
        } else if (index === 20) {
            return a020;
        } else if (index === 21) {
            return a021;
        } else if (index === 22) {
            return a022;
        } else if (index === 23) {
            return a023;
        } else if (index === 24) {
            return a024;
        } else if (index === 25) {
            return a025;
        } else if (index === 26) {
            return a026;
        } else if (index === 27) {
            return a027;
        } else if (index === 28) {
            return a028;
        } else {
          return a029;
        }
    };
  const frameCount = 28;
  canvas.width=1158;
  canvas.height=770;
  const img = new Image();
  img.src = currentFrame(1);
  console.log(img);
  img.onload=function(){
    context.drawImage(img, 0, 0);
  };
  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  };
  window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  });
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
  preloadImages();
  }
  return (
    <canvas id="hero-lightpas" ref={refHandler}></canvas>
  );
}

export default AirpodsPro;
