import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #54b7f9;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: #fff;
`;
export const Recommand = () => {
  return (
    <Container>
      <StyledText>추천 스터디</StyledText>
    </Container>
  );
};

export const AllStudy = () => {
  return (
    <Container>
      <StyledText>모든 스터디</StyledText>
    </Container>
  );
};

export const Add = () => {
  return (
    <Container>
      <StyledText>추가</StyledText>
    </Container>
  );
};

export const MyStudy = () => {
  return (
    <Container>
      <StyledText>내 스터디</StyledText>
    </Container>
  );
};

export const MyPage = () => {
  return (
    <Container>
      <StyledText>마이페이지</StyledText>
    </Container>
  );
};
