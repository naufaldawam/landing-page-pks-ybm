import React, { Component } from "react";
import { Link } from "react-router-dom";
// Formik validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
} from "reactstrap";


class PasswordForget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:""
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-white">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <Card className="account-card">
                      <CardBody>
                        <div className="text-center mt-3">
                          <h3 className="fw-bold">
                            <a
                              href="index.html"
                              className="text-dark text-uppercase account-pages-logo"
                            >
                              PKS YBM PLN ADMIN
                            </a>
                          </h3>
                          <p className="text-muted">Reset Password</p>
                        </div>
                        <div className="p-3">
                          <div
                            className="alert alert-warning  text-center"
                            role="alert"
                          >
                            Enter your email address and we&apos;ll send you an email
                            with instructions to reset your password.
                          </div>
                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              email: (this.state && this.state.email) || "",
                            }}
                            validationSchema={Yup.object().shape({
                              email: Yup.string().required(
                                "Please Enter Your Email"
                              )
                            })}
                            onSubmit={values => {
                              console.log(values);
                            }}
                          >
                            {({ errors, status, touched }) => (
                              <Form className="form-horizontal">
                                <div className="mb-3">
                                  <label htmlFor="email" className="form-label">
                                    Email
                                  </label>
                                  <Field
                                    name="email"
                                    type="email"
                                    className={
                                      "form-control" +
                                      (errors.email && touched.email
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </div>
                                <div className="d-grid mt-3">
                                  <button type="submit" className="btn btn-primary">Reset your
                                    Password</button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PasswordForget;
