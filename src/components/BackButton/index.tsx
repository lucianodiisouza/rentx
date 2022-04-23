import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

const Component = ({ color, ...props }: Props) => {
  const theme = useTheme();
  return (
    <Container {...props}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};

export default Component;
