import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Xperience, Education, Aside, Modal } from "./components";
import { Header, Icon, Grid, Card, Container } from "semantic-ui-react";
import { profil, skills, educations, experiences } from "./resume";

class App extends Component {
  renderComponent = (Component, otherProps) => (props, idx) => (
    <Component key={idx} {...props} {...otherProps} />
  );

  handleXperienceClick = data => {
    this.setState({
      displayModal: true,
      data
    });
  };
  handleCloseModal = () => {
    this.setState({ displayModal: false });
  };

  state = { displayModal: false, data: null };

  render() {
    const { displayModal, data } = this.state;
    return (
      <Fragment>
        <Aside profil={profil} />
        {displayModal && <Modal data={data} onClose={this.handleCloseModal} />}
        <div style={{ marginLeft: "18%", marginRight: "2.8%" }}>
          <Header as="h2" block style={{ marginTop: "1rem" }}>
            <Icon name="student" />
            <Header.Content>Educations</Header.Content>
          </Header>
          <Card.Group>
            {educations.map(this.renderComponent(Education))}
          </Card.Group>
          <Header as="h2" block>
            <Icon name="suitcase" />
            <Header.Content>Experiences</Header.Content>
          </Header>
          <Card.Group>
            {experiences.map(
              this.renderComponent(Xperience, {
                onClick: this.handleXperienceClick
              })
            )}
          </Card.Group>
        </div>
      </Fragment>
    );
  }
}

export default App;
