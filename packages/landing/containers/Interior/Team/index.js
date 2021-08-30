import React, { Fragment, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Box from "reusecore/src/elements/Box";
import Container from "common/src/components/UI/Container";
import GlideCarousel from "common/src/components/GlideCarousel";
import GlideSlide from "common/src/components/GlideCarousel/glideSlide";
import { CircleLoader } from "../interior.style";
import SectionWrapper, { CarouselWrapper, ImageWrapper, TeamCard, TextWrapper } from "./team.style";

import { CERT_PAPERS, SECTIONS } from "common/src/constants/appConstants";

const Team = (props) => {
  const { sectionHeader, sectionSubTitle, sectionTitle } = props;
  const [loading, setLoading] = useState(true);

  const glideOptions = {
    type: "carousel",
    perView: 4,
    gap: 10,
    breakpoints: {
      1200: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      480: {
        perView: 1
      }
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SectionWrapper id={SECTIONS.chungChis.id}>
      <Container width="1360px">
        <Fade bottom>
          <Box {...sectionHeader}>
            <Text content={CERT_PAPERS.title} {...sectionSubTitle}/>
            {/*<Heading content={CERT_PAPERS.slogan} {...sectionTitle} />*/}
          </Box>
        </Fade>

        <Fade bottom delay={30}>
          <CarouselWrapper>
            {loading && <CircleLoader className="alt">
              <div className="circle"/>
              <div className="circle"/>
            </CircleLoader>}

            {loading || <GlideCarousel
              carouselSelector="team_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow"/>}
              prevButton={<span className="prev_arrow"/>}
              bullets
            >
              <Fragment>
                {CERT_PAPERS.chungChis.map(chungChi => (
                  <GlideSlide key={`project_key${chungChi.id}`}>
                    <TeamCard className="team_card">
                      <ImageWrapper className="image_wrapper">
                        <Image src={chungChi.avatar} alt={chungChi.name}/>
                      </ImageWrapper>

                      <TextWrapper className="text_wrapper">
                        <div className="name_plate">
                          <Heading as="h3" content={chungChi.name}/>
                          <Text content={chungChi.designation}/>
                        </div>
                      </TextWrapper>
                    </TeamCard>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>}


          </CarouselWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

Team.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  }
};

export default Team;
