import styled from "styled-components";

export const Container = styled.main`
  bottom: 0;
  margin: 0 auto;
  position: fixed;
  z-index: 500;
  perspective: -5000;
  transform: translateX(${(props) => props.translateX})
    translateY(${(props) => props.translateY}px) rotateX(-45deg) rotateZ(20deg);
  overflow: visible;
  transform-style: preserve-3d;
  top: 250px;
  width: 110%;
  padding: 300px 20px 0;
  @media (min-width: 715px) {
    width: min(740px, 100vw);
    top: 0;
    transform: translateX(${(props) => props.translateX})
      translateY(${(props) => props.translateY}px) rotateX(-45deg)
      rotateZ(20deg);
  }
`;
