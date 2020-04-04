import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Money,
  MoneyText,
  Title,
  Description,
  Annotation,
} from "./styles";

export default function Home() {
  let offSet = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offSet += translationY;

      if (translationY >= 60) {
        opened = true;
      } else {
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 360 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        offSet = opened ? 360 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 360],
                    outputRange: [-50, 0, 360],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Money>
                <MaterialIcons name="attach-money" size={28} color="#666" />
                <MoneyText>Conta</MoneyText>
              </Money>
              <MaterialIcons name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 200.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida de Felipe Nunes em 09 MAR
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
