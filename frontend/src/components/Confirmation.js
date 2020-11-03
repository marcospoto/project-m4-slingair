import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = (props) => {
  const { seat, givenName, surname, email, flightNumber, id } = props.user;

  return (
    <>
      <Wrapper>
        <Confirmed>Your flight is confirmed!</Confirmed>
        <Text>
          <Bold>Reservation #:</Bold> {id}
        </Text>
        <Text>
          <Bold>Flight #:</Bold> {flightNumber}
        </Text>
        <Text>
          <Bold>seat #:</Bold> {seat}
        </Text>
        <Text>
          <Bold>Name:</Bold> {givenName} {surname}
        </Text>
        <Text>
          <Bold>Email:</Bold> {email}
        </Text>
      </Wrapper>
      <ImageWrapper>
        <img src={tombstone} width="200" alt="tombstone" />
      </ImageWrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: auto;
  border: 2px solid ${themeVars.alabamaCrimson};
  padding: 40px;
`;
const ImageWrapper = styled.div`
  margin: auto;
`;

const Confirmed = styled.h4`
  color: ${themeVars.alabamaCrimson};
  font-family: ${themeVars.contentFont};
  border-bottom: 3px solid ${themeVars.alabamaCrimson};
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Text = styled.p`
  font-family: ${themeVars.contentFont};
  padding-bottom: 10px;
`;

export default Confirmation;
