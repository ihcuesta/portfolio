import styled from "styled-components";
import { motion } from "framer-motion";

const ChevronContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 500;
  bottom: 0;
  right: 35px;
  border-radius: 50px;
  cursor: pointer;
  background: rgba(250, 0, 129, 0.3);
`;

const Chevron = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 25px;
  height: 25px;
  border: 7px solid #fa0081;
  border-width: 7px 0 0 7px;
`;

export function ToTop({ handleToTop }) {
  return (
    <ChevronContainer
      as={motion.div}
      initial={{ rotate: 60 }}
      animate={{
        y: [0, 3, 0],
        y: [0, 10, 0],
        transition: {
          ease: "linear",
          duration: 1,
          repeat: Infinity,
        },
      }}
      onClick={handleToTop}
    >
      <Chevron />
    </ChevronContainer>
  );
}
