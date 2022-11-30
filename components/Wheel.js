import styled from "styled-components";
import { motion } from "framer-motion";
import react from "../public/img/react.svg";

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  -webkit-transform: translate3d(0, 0, -6000px);
`;

const WheelStyled = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  left: -250px;
  top: -100px;
  right: auto;
  bottom: auto;
  background: url(${react.src}) no-repeat center / contain;
  opacity: ${(props) => (props.translateY < -165 ? 0.6 : 0.3)};
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

export function Wheel({ rotation, translateY }) {
  return (
    <Cont>
      <WheelStyled
        translateY={translateY}
        as={motion.div}
        animate={{
          rotate: rotation,
          origin: 0,
          transition: {
            ease: "linear",
          },
        }}
      />
    </Cont>
  );
}
