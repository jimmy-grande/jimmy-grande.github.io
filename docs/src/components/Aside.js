import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Aside = ({ className, profil }) => {
  const age = new Date().getFullYear() - profil.age;
  return (
    <aside className={className}>
      <img src="/assets/jimmy.jpg" />
      <h3 className="fullName">{profil.fullName}</h3>
      <div className="socials">
        <a className="linkedin" target="_blank" href={profil.linkedin}>
          <Icon size="big" name="linkedin" />
        </a>
        <a className="github" target="_blank" href={profil.github}>
          <Icon size="big" name="github" />
        </a>
        <a className="mail" href={`mailto:${profil.mail}`}>
          <Icon size="big" name="mail" />
        </a>
      </div>
    </aside>
  );
};

const StyledAside = styled(Aside)`
  position: fixed;
  top: 0;
  left: 0;
  width: 16%;
  height: 100%;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;

  img {
    border-radius: 50%;
    border: 2px solid #ddd;
    margin: 1rem;
    width: calc(100% - 2rem);
    height: auto;
  }
  .fullName {
    text-align: center;
    margin-top: 0.5rem;
  }
  .socials {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    a {
      flex: 1 1 auto;
      text-align: center;

      &:hover {
        opacity: 0.6;
      }
    }
  }
  .mail {
    color: #f00;
  }
  .linkedin {
    color: #0077b5;
  }

  .github {
    color: #fff;
  }
`;

export default StyledAside;
