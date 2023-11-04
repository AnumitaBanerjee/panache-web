import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultistepFormContext";

const Review = () => {
  const { details, address, next, prev } = useContext(MultiStepFormContext);
  console.log(details);
  console.log(address);
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>

          <Button type={"default"} onClick={prev}>
            Back
          </Button>
          <Button type={"primary"} onClick={next}>
            Confirm
          </Button>

        </Col>
      </Row>
    </div>
  );
};
export default Review;
