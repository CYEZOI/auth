import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from "./Login";
import Register from "./Register";
import { withTranslation } from 'react-i18next';
import i18n from "./i18n";
import * as Icon from 'react-bootstrap-icons';

class App extends React.Component {
  state = {
    currentPage: "Login",
  };

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <img src="/CYEZOI.png" width="30" height="30" className="d-inline-block align-top" />
              CYEZOI
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link onClick={() => this.setState({ currentPage: "Login" })}>{t("Login")}</Nav.Link>
                <Nav.Link onClick={() => this.setState({ currentPage: "Register" })}>{t("Register")}</Nav.Link>
              </Nav>
              <NavDropdown title={<span><Icon.Translate className="me-2" />{t("Language")}</span>}>
                <NavDropdown.Item onClick={() => { i18n.changeLanguage("en"); this.render(); }}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { i18n.changeLanguage("zh"); this.render(); }}>中文</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar >
        <div className="mt-2">
          <h5>{this.state.currentPage}</h5>
          {(() => {
            switch (this.state.currentPage) {
              case "Login":
                return <Login />;
              case "Register":
                return <Register />;
              default:
                return null;
            }
          })()}
        </div>
      </Container >
    );
  }
}

export default withTranslation()(App);