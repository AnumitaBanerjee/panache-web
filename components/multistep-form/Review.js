import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultistepFormContext";

const Review = () => {
  const { questionOne, questionTwo, questionThree, next, prev } = useContext(MultiStepFormContext);
  console.log(questionOne);
  console.log(questionTwo);
  console.log(questionThree);
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
