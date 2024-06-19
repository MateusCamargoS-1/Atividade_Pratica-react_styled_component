import styled from "styled-components";
import fundoMar from "../assets/fundo-mar.jpeg";

const BannerStyled = styled.div`
  background-image: url(${fundoMar});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: cover;
  color: #eee;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContato = styled.div`
  background-image: url(${fundoMar});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: cover;
  color: #eee;
  width: 100%;
  height: 200px;
  margin-top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { BannerStyled, BannerContato };
