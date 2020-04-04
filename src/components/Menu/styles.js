import { Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { alignItems: "center" },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`;

export const Nav = styled.View`
  align-self: stretch;
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-self: stretch;
  padding: 12px;
  margin-top: 30px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  align-self: center;
`;
