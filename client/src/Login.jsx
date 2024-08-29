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
          username: yup.string().required().min(4).max(16),
          password: yup.string().required().min(8).max(64),
        })}
        onSubmit={(APIParams) => {
          API.Post("users/login", { APIParams }).then((response) => {
            // ...
          });
        }} initialValues={{ username: "", password: "", }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control placeholder={t("username")} name="username" value={values.username} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.username && errors.username} />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation className="mb-3">
              <Form.Control type="password" placeholder={t("password")} name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} isInvalid={touched.password && errors.password} />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </InputGroup>
            <Button type="submit">{t("login")}</Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withTranslation()(Login);