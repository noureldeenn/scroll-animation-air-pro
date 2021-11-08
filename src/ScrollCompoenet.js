import { Animator, batch, Fade, FadeIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

function ScrollCompoenet() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h2 style={{ color: "white" }}>Let't me show you scroll animation 😀</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h2 style={{ color: "white" }}>Let't me show you scroll animation 😀</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(FadeIn(), StickyIn(), ZoomIn())}>
          <h2 style={{ color: "white" }}>Let't me show you scroll anime 😀</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default ScrollCompoenet;
