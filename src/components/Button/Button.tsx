import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import styled from '@emotion/native';
import {flexCenter, fontSelector} from '@styles/mixins';

interface MyButtonProps {
    onPress: () => void;
    text: string;
}

export const MyButton = ({onPress, text}: MyButtonProps) => {
    return (
        <ButtonStyled onPress={onPress}>
            <ButtonTextStyled style={styles.text}>{text}</ButtonTextStyled>
        </ButtonStyled>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'violet',
    },
    text: {color: 'black'},
});

const ButtonStyled = styled.TouchableOpacity`
    padding: 16px 8px;
    background-color: ${({theme}) => theme.colors.bg};
    ${flexCenter};
`;

const ButtonTextStyled = styled.Text`
    font-size: 60px;
    color: '#000000';
    font-family: ${fontSelector()};
`;
