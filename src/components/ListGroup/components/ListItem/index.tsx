import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, OptionLabel} from './styles';

type ListItemProps = {
  icon: string;
  children: string;
  onPress?: () => void;
};

export const ListItem = ({icon, children, onPress}: ListItemProps) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} color="#ffffff" size={18} />

      <OptionLabel>{children}</OptionLabel>

      <Icon name="chevron-right" color="#303030" size={20} />
    </Container>
  );
};
