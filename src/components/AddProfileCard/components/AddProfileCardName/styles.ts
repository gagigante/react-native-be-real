import styled from 'styled-components/native';

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  margin-bottom: 2px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  max-width: 180px;
  text-overflow: ellipsis;
`;
