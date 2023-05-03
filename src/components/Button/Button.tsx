import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled, {css} from '@emotion/native';
import {flexCenter, size} from '../../styles/mixins';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const MyButton = ({text, onPress, color, textColor}: ButtonProps) => (
  <ButtonStyled color={color} onPress={onPress} activeOpacity={0.8}>
    <ButtonTextStyled>{text}</ButtonTextStyled>
  </ButtonStyled>
);

const ButtonTextStyled = styled.Text`
  font-size: 60px;
`;
const ButtonStyled = styled.TouchableOpacity`
  height: auto;
  flex-grow: 1;
  border-radius: 4px;
  color: white;
  background-color: ${({color}: {color: string}) => color};
  ${flexCenter};
`;
