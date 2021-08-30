import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import WorkHistoryWrapper, { CounterUpArea } from "./workHistory.style";
import { SECTIONS, THANH_TUUS } from "common/src/constants/appConstants";

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  return (
    <WorkHistoryWrapper id={SECTIONS.thanhTuus.id}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content={THANH_TUUS.title.content}
                  {...title}
                />
              }
              description={
                <Text
                  content={THANH_TUUS.description.content}
                  {...description}
                />
              }
            />
          </Box>

          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={30}/>+
                </h3>
                <Text content="Nhà hàng, bếp ăn"/>
              </Card>

              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={400} duration={4}/>+
                </h3>
                <Text style={{ textAlign: "center" }} content="Nhân viên làm việc 3 ca"/>
              </Card>

              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={4300} duration={4}/>Kg
                </h3>
                <Text
                  content="Thực phẩm mỗi ngày được giao"
                  style={{ textAlign: "center" }}
                />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // WorkHistory section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },
  // Card default style
  cardStyle: {
    p: ["20px 20px", "30px 20px", "30px 20px", "53px 40px"],
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)"
  },
  // WorkHistory section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px"
  },
  // WorkHistory section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default WorkHistory;
