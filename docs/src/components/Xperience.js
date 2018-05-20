import React from "react";
import styled from "styled-components";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

const Xperience = ({
  className,
  company,
  date,
  location,
  title,
  description,
  misisons,
  stack,
  logo,
  onClick
}) => {
  return (
    <Card
      className={className}
      onClick={() =>
        onClick({
          company,
          date,
          location,
          title,
          description,
          misisons,
          stack,
          logo
        })
      }
    >
      <Image src={logo} wrapped />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {company} - {location}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const StyledXperience = styled(Xperience)`
  & div.ui.image {
    background-color: white !important;
    text-align: center !important;
  }

  img {
    height: 80px !important;
    width: auto !important;
    display: inline-block !important;
  }
`;

export default StyledXperience;
