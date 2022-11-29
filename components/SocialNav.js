import styled from "styled-components";
import linkedin from "../public/img/linkedin.svg";
import github from "../public/img/github.svg";
import behance from "../public/img/behance.svg";
import Image from "next/image";
import Link from "next/link";

const SocialNavStyled = styled.menu`
  width: 100vw;
  height: 42px;
  position: fixed;
  z-index: 800;
  top: 0;
  left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Container = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;

const SocialStyled = styled.div`
  & img {
    opacity: 1;
  }
  @media (min-width: 715px) {
    & img {
      opacity: 0.7;
    }

    & :hover img {
      opacity: 1;
    }
  }
`;

const Social = ({ src, href, alt }) => {
  return (
    <SocialStyled>
      <Link href={href} target="_blank">
        <Image src={src} width={23} height={23} alt={alt} />
      </Link>
    </SocialStyled>
  );
};

export function SocialNav() {
  return (
    <SocialNavStyled>
      <Container>
        <Social
          src={linkedin.src}
          href="https://www.linkedin.com/in/ivanherranzcuesta/"
          alt="LinkedIn"
        />
        <Social
          src={github.src}
          href="https://github.com/ihcuesta"
          alt="GitHub"
        />
        <Social
          src={behance.src}
          href="https://www.behance.net/ivanherranz"
          alt="Behance"
        />
      </Container>
    </SocialNavStyled>
  );
}
