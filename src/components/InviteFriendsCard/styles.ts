import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px 14px;
  background-color: #141414;
  border-radius: 16px;
`;

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.View`
  margin-left: 8px;
`;

export const InviteText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const LinkText = styled.Text`
  color: #8c8c8c;
`;
