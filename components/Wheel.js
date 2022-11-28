import styled from "styled-components";
import { motion } from "framer-motion";
import react from "../public/img/react.svg";

export const WheelStyled = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  left: -250px;
  top: -100px;
  right: auto;
  bottom: auto;
  background: url(${react.src}) no-repeat center / contain;
  opacity: 0.3;
  filter: brightness(50%);
  display: block;
  @media (min-width: 715px) {
    display: none;
  }
  @media (min-width: 1050px) {
    display: block;
    opacity: 0.5;
    left: auto;
    top: auto;
    right: -200px;
    bottom: -100px;
  }
  @media (min-width: 1500px) {
    width: 850px;
    height: 850px;
    right: -300px;
    bottom: -200px;
  }
`;

export function Wheel({ rotation }) {
  return (
    <WheelStyled
      as={motion.div}
      animate={{
        rotate: rotation,
        origin: 0,
        transition: {
          ease: "linear",
        },
      }}
    />
  );
}
