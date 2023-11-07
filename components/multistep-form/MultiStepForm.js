import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultistepFormContext";
import Review from "./Review";
import { QuestionOne } from "./Questions";
import { QuestionTwo } from "./Questions";
import { QuestionThree } from "./Questions";
import "antd/dist/antd.css";

const { Step } = Steps;

const QuesOneInitialState = { answer: ''  };
const QuesTwoInitialState = { answer: '' };
const QuesThreeInitialState = { answer: '' };

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <QuestionOne />;
    case 1:
      return <QuestionTwo />;
    case 2:
      return <QuestionThree />;
    case 3:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [questionOne, setQuestionOne] = useState(QuesOneInitialState);
  const [questionTwo, setQuestionTwo] = useState(QuesTwoInitialState);
  const [questionThree, setQuestionThree] = useState(QuesThreeInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setQuestionOne(QuesOneInitialState);
      setQuestionTwo(QuesTwoInitialState);
      setQuestionThree(QuesThreeInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  
  const prev = () => setCurrentStep(currentStep - 1);
  
  return (
    <>
      <div className="content-panel dashboard">
        <Provider value={{ 
          questionOne, 
          setQuestionOne, 
          questionTwo, 
          setQuestionTwo, 
          next, 
          prev, 
          questionThree, 
          setQuestionThree  }}>
          
          <Steps current={currentStep}>
            <Step />
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
