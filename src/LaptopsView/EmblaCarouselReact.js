import React from "react";
import { useEmblaCarousel } from "embla-carousel-react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #eeeeee;
  height: auto;
  padding: 30px;
`;

const EmblaContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  border-radius: 4px;
  margin: auto 5px;
  width: 80%;
  height: 300px;
`;

const EmblaCarouselComponent = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false
  });

  return (
    <Container>
      <EmblaContainer ref={emblaRef}>
        <Slide>WHAT</Slide>
        <Slide>IF</Slide>
        <Slide>YOU</Slide>
        <Slide>CAROUSEL</Slide>
      </EmblaContainer>
    </Container>
  );
};

export default EmblaCarouselComponent;
