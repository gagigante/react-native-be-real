import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #141414;
  padding: 16px 16px;
  border-radius: 12px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const TextContent = styled.View`
  margin: 0 auto 0 8px;
`;

export const Name = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const Nick = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
