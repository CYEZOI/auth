import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import API from "./API";
import * as yup from "yup";
import { withTranslation } from 'react-i18next';

const { Formik } = formik;

class Login extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Formik
        validationSchema={yup.object().shape({
          Username: yup.string().required().min(4).max(16),
          Password: yup.string().required().min(8).max(64),
        })}
        onSubmit={(APIParams) => {
          API.Post("Login", { APIParams }).then((response) => {
            // ...
          });
        }} initialValues={{ Username: "", Password: "", }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control placeholder={t("Username")} name="Username" value={values.Username} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.Username && errors.Username} />
              <Form.Control.Feedback type="invalid">{errors.Username}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation className="mb-3">
              <Form.Control type="password" placeholder={t("Password")} name="Password" value={values.Password} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.Password && errors.Password} />
              <Form.Control.Feedback type="invalid">{errors.Password}</Form.Control.Feedback>
            </InputGroup>
            <Button type="submit">{t("Login")}</Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withTranslation()(Login);