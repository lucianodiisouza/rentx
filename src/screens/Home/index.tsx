import { StatusBar } from "expo-status-bar";
import React from "react";

import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components";

import { Container, Header, TotalCars, HeaderContent } from "./styles";

const Home = () => {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupe",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://www.downloadclipart.net/large/audi-rs5-red-png.png",
  };
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
    </Container>
  );
};

export default Home;
