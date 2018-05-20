import React from "react";
import styled from "styled-components";
import { Transition, Icon, Card, Image } from "semantic-ui-react";

const Modal = ({ className, onClose, data }) => {
  return (
    <Transition animation="scale" duration={1500}>
      <div className={className}>
        <Icon
          name="close"
          style={{ float: "right" }}
          size="huge"
          onClick={onClose}
        />
        <Card className={className} fluid>
          <Card.Content>
            <Image src={data.logo} floated="right" size="tiny" />
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
              {data.company} - {data.location}
            </Card.Meta>
            <Card.Description>{data.description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Transition>
  );
};

const StyledModal = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 500;
  border: 1rem solid #000;

  i {
    cursor: pointer;
  }

  & .ui.card {
    border-style: none !important;
    box-shadow: none !important;
    display: block !important;
    width: auto !important;
    height: auto !important;
    margin-right: 70px;
    & .content {
      display: block;
    }
  }
`;

export default StyledModal;
