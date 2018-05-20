import React from "react";
import styled from "styled-components";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

const Education = ({
  className,
  school,
  location,
  level,
  title,
  description
}) => {
  return (
    // <Card className={className} header={title} meta={company} image={logo} />
    <Card className={className} fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {school} - {level}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const StyledEducation = styled(Education)``;
export default StyledEducation;
