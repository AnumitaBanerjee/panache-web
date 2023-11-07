import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import MultiStepFormContext from './MultistepFormContext';

export const QuestionOne = () => {
  const { questionOne, setQuestionOne, next } = useContext(MultiStepFormContext);
  
  return (
    <div className={"details__wrapper"}>
      <h1>I like to work on cars ?</h1>
      <div
        className={
          "form__item button__items d-flex justify-content-between"
        }
      >
        <label>
          <input type="radio" name="answer" value="Yes" onClick={(e) => {console.log(e.target.value); next()}} />
          Yes
        </label>
        <label>
          <input type="radio" name="answer" value="No" onClick={(e) => {console.log(e.target.value); next()}} />
          No
        </label>
      </div>
    </div>
  );
};

export const QuestionTwo = () => {
  const { questionTwo, setQuestionTwo, next, prev } = useContext(MultiStepFormContext);

  return (
    <div className={"details__wrapper"}>
      <h1>I like to build things ?</h1>
      <div
        className={"form__item button__items d-flex justify-content-end"}
      >
        <label>
          <input type="radio" name="answer" value="Yes" onClick={(e) => {console.log(e.target.value); next()}} />
          Yes
        </label>
        <label>
          <input type="radio" name="answer" value="No" onClick={(e) => {console.log(e.target.value); next()}} />
          No
        </label>
      </div>
    </div>
  );
};

export const QuestionThree = () => {
  const { questionThree, setQuestionThree, next, prev } = useContext(MultiStepFormContext);

  return (
    <div className={"details__wrapper"}>
      <h1>I like to take care of animals ?</h1>
      <div
        className={"form__item button__items d-flex justify-content-end"}
      >
        <label>
          <input type="radio" name="answer" value="Yes" onClick={(e) => {console.log(e.target.value); next()}} />
          Yes
        </label>
        <label>
          <input type="radio" name="answer" value="No" onClick={(e) => {console.log(e.target.value); next()}} />
          No
        </label>
      </div>
    </div>
  );
};




