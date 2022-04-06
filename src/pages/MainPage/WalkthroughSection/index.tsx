import { WalkthroughCard } from "../../../components/WalkthroughCard";
import {
  Background,
  Container,
  IllustrationOne,
  IllustrationThree,
  IllustrationTwo,
  WalkthroughContainer,
} from "./WalkthroughSection.styled";
import Image from "next/image";
import { theme } from "../../../../styles";
import WalkthroughOne from "../../../../public/icons/walkthrough-1.svg";
import WalkthroughTwo from "../../../../public/icons/walkthrough-2.svg";
import WalkthroughThree from "../../../../public/icons/walkthrough-3.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

export const WalkthroughSection = () => {
  const mediumDevice = useMediaQuery(theme.deviceSize.medium.toString());

  return (
    <Container>
      <Background>
        <WalkthroughContainer>
          <IllustrationOne>
            <WalkthroughCard
              image={
                <Image
                  src={
                    mediumDevice
                      ? "/illustrations/walkthroug-1-responsive.png"
                      : "/illustrations/walkthroug-1-desktop.png"
                  }
                  width={500}
                  height={500}
                />
              }
              icon={<WalkthroughOne />}
              title={"1—browse"}
              description={
                "Browse our tech catalog with more than 20 top tech products"
              }
              backgroundColor={theme.colors.specials.illustrationBg}
            />
          </IllustrationOne>

          <IllustrationTwo>
            <WalkthroughCard
              image={
                <Image
                  src={
                    mediumDevice
                      ? "/illustrations/walkthroug-2-responsive.png"
                      : "/illustrations/walkthroug-2-desktop.png"
                  }
                  width={500}
                  height={500}
                />
              }
              icon={<WalkthroughTwo />}
              title={"2—choose"}
              description={
                "Exchange your hard earned AeroPoints for the item you want"
              }
              backgroundColor={theme.colors.specials.illustrationBg}
              className="illustrationTwo"
            />
          </IllustrationTwo>

          <IllustrationThree>
            <WalkthroughCard
              image={
                <Image
                  src={
                    mediumDevice
                      ? "/illustrations/walkthroug-3-responsive.png"
                      : "/illustrations/walkthroug-3-desktop.png"
                  }
                  width={500}
                  height={500}
                />
              }
              icon={<WalkthroughThree />}
              title={"3—enjoy!"}
              description={
                "All done, you can relax! We’ll take care of delivery of your tech item!"
              }
              backgroundColor={theme.colors.specials.illustrationBg}
            />
          </IllustrationThree>
        </WalkthroughContainer>
      </Background>
    </Container>
  );
};
