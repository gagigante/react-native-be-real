import styled from 'styled-components/native';

export const HeaderButton = styled.TouchableOpacity`
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 12px;
  background-color: #000000;
`;

export const Avatar = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  margin: 12px auto 0;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin: 12px auto 0;
`;

export const Nick = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto;
`;

export const MemoriesLabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 8px;
`;

export const Label = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const PrivacyWarningContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PrivacyWarningText = styled.Text`
  margin-left: 4px;
  color: #8c8c8c;
`;

export const MemoriesContainer = styled.View`
  padding: 12px;
  background-color: #141414;
  border-radius: 12px;
`;

export const MemoriesLabel = styled.Text`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const MemoriesContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -4px;
`;

export const MemoriesButton = styled.TouchableOpacity`
  margin: 16px auto 0;
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #3d3d3d;
  border-radius: 12px;
`;

export const MemoriesButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;

export const ShareButton = styled.TouchableOpacity`
  margin: 0 auto;
`;

export const ShareButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin-top: 24px;
`;
