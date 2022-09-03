import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {paddingBottom: 32},
})`
  position: relative;
  padding: 16px 8px;
  background-color: #000000;
  flex: 1;
`;

export const ProfileContainer = styled.View`
  margin-bottom: 8px;
`;

export const VersionLabel = styled.Text`
  color: #303030;
  text-align: center;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  background-color: #141414;
  border-radius: 12px;
  margin: 12px 0;
  padding: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: tomato;
`;
