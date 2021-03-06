import Image from "next/image";
import { useState } from "react";
import { theme } from "../../../../styles";
import { Text } from "../../../components/Text";
import { Container } from "./GitRepoLinkStyled";
import Link from "next/link";

export const GitRepoLink = () => {
  const [hover, setHover] = useState(false);

  return (
    <Link href="https://github.com/MrRaccxxn/aerolab-coding-challenge">
      <a target="_blank">
        <Container
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={
              hover ? "/icons/github-active.svg" : "/icons/github-default.svg"
            }
            width={24}
            height={24}
            className="icon"
            alt="git hub"
          />
          <Text gradientColor={hover ? theme.colors.brand.hover : undefined}>
            View this repository
          </Text>
        </Container>
      </a>
    </Link>
  );
};
