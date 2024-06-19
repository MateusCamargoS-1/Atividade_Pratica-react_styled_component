import styled from "styled-components";

const FooterComponentStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 70px 100px;
  background-color: #f7f7f7;

  nav {
    color: #646cff;
    font-size: 0.9em;
  }

  small {
    color: #333;
    font-size: 0.7em;
  }

  .icon {
    width: 30px;
    margin-right: 30px;
  }

  ul{
    display: flex;
    list-style: none;
  }
`;

export default FooterComponentStyled;
