import React, { useContext } from "react";
import { Formik, Field } from "formik";
import MultiStepFormContext from "./MultistepFormContext";

const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <div className={"details__wrapper"}>
            <h1>I like to work on cars ?</h1>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
              <button type={"primary"} onClick={handleSubmit}>
                Next
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
