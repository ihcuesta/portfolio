import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  position: relative;
  z-index: 500;
  grid-template-columns: 1fr;
  max-width: 740px;
  perspective: -5000;
  transform-origin: top right 0px;
  transform-style: preserve-3d;
  gap: 20px;
  @media (min-width: 1300px) {
    max-width: 740px;
    grid-template-columns: 1fr 1fr;
  }
`;
