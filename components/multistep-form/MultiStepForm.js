import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultistepFormContext";
import Details from "./Details";
import Address from "./Address";
import Review from "./Review";
import "antd/dist/antd.css";

const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: ""
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Address />;
    case 2:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  
  const prev = () => setCurrentStep(currentStep - 1);
  
  return (
    <>
      <div className="content-panel dashboard">
        <Provider value={{ details, setDetails, next, prev, address, setAddress }}>
          <Steps current={currentStep}>
            <Step />
            <Step />
            <Step />
          </Steps>
          <main>{renderStep(currentStep)}</main>
        </Provider>
      </div>
    </>
  );
};
export default MultiStepForm;
