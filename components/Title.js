import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/img/ih.png";
import html from "../public/img/html.svg";
import css from "../public/img/css.svg";
import js from "../public/img/js.svg";
import react from "../public/img/react.svg";
import redux from "../public/img/redux.svg";

const ContainerTitle = styled.header`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  top: 0;
  opacity: ${(props) =>
    props.translateY < -165 ? 0 : props.translateY > -60 ? 1 : 0.3};
  transition: opacity ease-in 0.15s;
  @media (min-width: 600px) {
    height: 300px;
  }
  @media (min-width: 715px) {
    opacity: 1;
    width: 40%;
    padding-left: 2%;
    top: 0;
  }
  @media (min-width: 850px) {
    top: 10%;
    padding-left: 3%;
  }
  @media (min-width: 1160px) {
    top: 20%;
  }
`;

const TitleStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Name = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  background-image: -webkit-linear-gradient(-45deg, #fa0081, #4a55f7);
  background-image: linear-gradient(-45deg, #fa0081, #4a55f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 430px) {
    font-size: 2.5rem;
  }
  @media (min-width: 715px) {
    font-size: 1.5rem;
  }
  @media (min-width: 850px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1060px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1380px) {
    font-size: 3rem;
  }
  @media (min-width: 1620px) {
    font-size: 3.5rem;
  }
`;

const Role = styled.h2`
  color: pink;
  font-weight: 800;
  font-size: 1rem;
  color: #fa0081;
`;

const Bar = styled.span`
  opacity: 0.3;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: url(${(props) => props.icon}) center / contain;
`;

export function Title({ translateY }) {
  return (
    <ContainerTitle translateY={translateY}>
      <TitleStyled>
        <Image
          src={logo.src}
          alt="Iván Herranz Cuesta: Frontend UI"
          width={50}
          height={50}
        />
        <Name>Iván Herranz</Name>
        <Role>
          Frontend<Bar> | </Bar>UI
        </Role>
        <Icons>
          <Image src={html.src} alt="HTML" width={24} height={24} />
          <Icon
            icon={css.src}
            size={24}
            as={motion.div}
            animate={{
              rotateY: [0, 0, 360, 360, 360, 360, 360, 360],
              origin: 0,
              transition: {
                repeat: Infinity,
                duration: 7,
                ease: "easeIn",
              },
            }}
          />
          <Image src={js.src} alt="JS" width={24} height={24} />
          <Icon
            icon={react.src}
            size={26}
            as={motion.div}
            animate={{
              rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 360, 180],
              origin: 0,
              transition: {
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              },
            }}
          />
          <Image src={redux.src} alt="Redux" width={24} height={24} />
        </Icons>
      </TitleStyled>
    </ContainerTitle>
  );
}
