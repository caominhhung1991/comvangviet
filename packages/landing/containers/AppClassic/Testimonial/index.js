import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Image from "reusecore/src/elements/Image";
import Container from "common/src/components/UI/Container";
import GlideCarousel from "common/src/components/GlideCarousel";
import GlideSlide from "common/src/components/GlideCarousel/glideSlide";
import { SectionHeader } from "../appClassic.style";
import SectionWrapper, { CarouselWrapper } from "./testimonial.style";

import { testimonial } from "common/src/data/AppClassic";
import { SANPHAMS, SECTIONS } from "common/src/constants/appConstants";

const Testimonial = () => {
  const { slogan, title, reviews } = testimonial;

  const glideOptions = {
    type: "carousel",
    gap: 0,
    autoplay: 3000,
    perView: 5,
    animationDuration: 250,
    breakpoints: {
      991: {
        perView: 3,
      }
    }
  };

  return (
    <SectionWrapper id={SECTIONS.sanPhams.id}>
      <Container>
        <SectionHeader>
          <Fade up delay={280}>
            <Heading as="h5" content={SANPHAMS.title}/>
            <Heading content={SANPHAMS.subTitle}/>
          </Fade>
        </SectionHeader>

        <CarouselWrapper>
          <Fade up delay={350}>
            <GlideCarousel
              options={glideOptions}
              nextButton={
                <Button icon={<i className="flaticon-next"/>} aria-label="Next" variant="fab"/>
              }
              prevButton={
                <Button icon={<i className="flaticon-left-arrow"/>} aria-label="Prev" variant="fab"/>
              }
            >
              <Fragment>
                {SANPHAMS.sanPhams.map((item, index) => (
                  <GlideSlide key={`testimonial--key${index + 1}`}>
                    <div className="review-card">
                      <Heading as="h3" content={item.title} textAlign={"center"}/>
                      <div className="card-footer">
                        <div className="image">
                          <Image src={item.avatar} alt="Client Image"/>
                        </div>
                      </div>
                    </div>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonial;
