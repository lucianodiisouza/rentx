import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgorund_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
