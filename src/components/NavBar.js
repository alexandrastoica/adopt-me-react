import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "../styles/colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt me!</Link>
    <span
      css={css`
        cursor: default;
        font-size: 60px;
        display: inline-block;

        &:hover {
          animation: 2s ${spin} linear infinite;
        }
      `}
      role="img"
      aria-label="logo"
    >
      🐶
    </span>
  </header>
);

export default NavBar;
