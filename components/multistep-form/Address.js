import React, { useContext } from "react";
import { Formik, Field } from "formik";
import MultiStepFormContext from './MultistepFormContext';
const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.address1) errors.address1 = "Address is required";
      //   if (!values.city) errors.city = "City is required";
      //   return errors;
      // }}
    >
      {({ handleSubmit }) => {
        return (
          <div className={"details__wrapper"}>
            <h1>I like to build things ?</h1>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <button type={"default"} onClick={prev}>
                Back
              </button>
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
