import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { SubTitle } from './bannerSection.style';
import { BANNER, GENERAL } from 'common/src/constants/appConstants';

const BannerSection = (props) => {
  const {
    row, col, title, btnStyle, description, discountText, discountAmount, outlineBtnStyle
  } = props;

  const ButtonGroup = () => (
    <Fragment>
      {/*<Button title={GENERAL.buttons.xemThem.name} {...btnStyle} />*/}
      <Button
        title={`${GENERAL.buttons.lienHe.name}`}
        // variant="textButton"
        icon={<i className="fa fa-phone"/>}
        onClick={GENERAL.buttons.lienHe.onClick}
        {...btnStyle}
        // {...outlineBtnStyle}
      />
    </Fragment>
  );

  return (
    <BannerWrapper>
      <Particles/>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <SubTitle>
              <Text content={BANNER.heading.subTitle} {...discountAmount} />
              <Text content={BANNER.heading.subTitle2} {...discountText} />
            </SubTitle>

            <FeatureBlock
              title={
                <Heading content={BANNER.heading.title} {...title} />
              }
              description={
                <Text
                  content={BANNER.heading.description}
                  {...description}
                />
              }
              button={<ButtonGroup/>}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%']
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500'
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span'
  }
};

export default BannerSection;
