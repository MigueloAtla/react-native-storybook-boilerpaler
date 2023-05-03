import styled from '@emotion/native';
import {flexCenter, size, circle, rem, remNumber} from '@styles/mixins';
// import MyText from "../fonts/MyText";

export default function FloatingButton({
  symbol,
  higherTop,
  onPress,
}: {
  symbol: string;
  onPress: () => void;
  higherTop?: boolean;
}) {
  return (
    <PressableStyled higherTop={higherTop} onPress={onPress}>
      <SymbolStyled>{symbol}</SymbolStyled>
    </PressableStyled>
  );
}
const PressableStyled = styled.Pressable`
  ${flexCenter};
  ${size(remNumber(3))};
  ${circle};
  border: 2px solid #555;
  padding-top: ${({higherTop}) => (higherTop ? '4px' : '0px')};
  ${props => console.log(props)}// theme is passed as expected
`;

const SymbolStyled = styled.Text`
  font-size: ${rem(2)};
`;
