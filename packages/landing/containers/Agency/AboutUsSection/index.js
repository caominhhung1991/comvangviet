import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Card from "reusecore/src/elements/Card";
import Image from "reusecore/src/elements/Image";
import Button from "reusecore/src/elements/Button";
import FeatureBlock from "common/src/components/FeatureBlock";
import AboutUsSectionWrapper from "./aboutUsSection.style";

import data from "common/src/data/Agency";
import { ABOUT_US, GENERAL, SECTIONS } from "common/src/constants/appConstants";

import GroupImage1 from "common/src/assets/image/agency/group/group-image1.jpg";
import GroupImage2 from "common/src/assets/image/agency/group/group-image2.jpg";
import GroupImage3 from "common/src/assets/image/agency/group/group-image3.jpg";
import aboutUs1_400x600 from "common/src/assets/image/agency/aboutUs1_400x600.jpg";
import aboutUs2_505x361 from "common/src/assets/image/agency/aboutUs2_505x361.jpg";
import aboutUs3_505x350 from "common/src/assets/image/agency/aboutUs3_505x350.jpg";

import aboutUs2 from "common/src/assets/image/agency/aboutUs2.jpg";
import aboutUs3 from "common/src/assets/image/agency/aboutUs2.jpg";

const AboutUsSection = (props) => {
  const {
    row, col, title, description,
    textArea, featureTitle, btnStyle
  } = props;

  return (
    <AboutUsSectionWrapper id={SECTIONS.aboutCompany.id}>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <Image src={aboutUs2_505x361} alt="Feature Image"/>
              </Fade>

              <Fade left delay={60}>
                <Image src={aboutUs3_505x350} alt="Feature Image"/>
              </Fade>
            </Box>

            <Box className="col2">
              <Fade bottom delay={90}>
                <Image src={aboutUs1_400x600} alt="Feature Image"/>
              </Fade>
            </Box>
          </Card>
        </Box>

        <Box className="col" {...col}>
          <Box {...textArea}>
            <FeatureBlock
              title={<Heading content={ABOUT_US.title} {...title} />}
              description={
                <Text
                  content={ABOUT_US.subTitle}
                  {...description}
                />
              }
            />
          </Box>

          <Box {...textArea}>
            {ABOUT_US.suMenhs.map((feature, index) => (
              <FeatureBlock
                key={`feature_point-${index}`}
                icon={<i className={feature.icon}/>}
                iconPosition="left"
                title={<Heading content={feature.title} {...featureTitle} />}
              />
            ))}
            <Button
              title={GENERAL.buttons.lienHe.name}
              icon={<i className="fa fa-phone"/>}
              onClick={GENERAL.buttons.lienHe.onClick}
              {...btnStyle}
            />
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // About us section col default style
  col: {
    width: [1, "100%", "50%"]
  },
  // About us section text area default style
  textArea: {
    maxWidth: "490px",
    pl: "40px"
  },
  // About us section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "30px"
  },
  // About us section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },

  // feature title default style
  featureTitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#343d48",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default AboutUsSection;
