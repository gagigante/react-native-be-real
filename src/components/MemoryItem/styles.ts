import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

type LabelProps = {
  active: boolean;
};

type ImageContainerProps = {
  isMemoryOnTime: boolean;
};

const windowWidth = Dimensions.get('window').width;
const memoriesContentWidth = windowWidth - 48 - 48;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 4px;
`;

export const ImageContainer = styled.ImageBackground<ImageContainerProps>`
  width: ${memoriesContentWidth / 7}px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;

  ${props =>
    props.isMemoryOnTime &&
    css`
      border: 1.5px solid #fff;
    `}
`;

export const EmptyView = styled.View`
  width: ${memoriesContentWidth / 7}px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`;

export const DayLabelContainer = styled.View<LabelProps>`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;

  ${props =>
    props.active &&
    css`
      background-color: #ffffff;
    `}
`;

export const DayLabel = styled.Text<LabelProps>`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.active ? '#000000' : '#ffffff')};
`;
