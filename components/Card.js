import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardStyled = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background: gray;
  cursor: pointer;
  background: url(${(props) => props.image}) no-repeat
    ${(props) => props.position || "center"} / cover;
  @media (min-width: 500px) {
    height: 400px;
  }
  @media (min-width: 715px) {
    height: 500px;
  }
  @media (min-width: 1300px) {
    width: 360px;
    height: ${360 * 0.75}px;
  }
`;

export function Card({ image, position, href }) {
  const [isBig, setIsBig] = useState(false);
  const checkMedia = () =>
    window.innerWidth > 1300 ? setIsBig(true) : setIsBig(false);

  useEffect(() => {
    checkMedia();
  }, []);

  useEffect(() => {
    addEventListener("resize", () => {
      checkMedia();
    });
  }, []);

  const handleClick = () => window.open(href, "_ blank");

  return (
    <CardStyled
      image={image}
      position={position}
      as={motion.div}
      onClick={handleClick}
      whileHover={{
        translateX: -20,
        translateY: -20,
        scale: isBig ? 1.2 : 1,
        boxShadow: "15px 15px 15px #FA0081",
      }}
    />
  );
}
