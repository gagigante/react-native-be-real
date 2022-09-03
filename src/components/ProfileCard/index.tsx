import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Avatar, TextContent, Name, Nick} from './styles';

type ProfileCardProps = {
  name: string;
  nick: string;
  image: string;
};

export const ProfileCard = ({name, nick, image}: ProfileCardProps) => {
  return (
    <Container>
      <Avatar source={{uri: image}} />

      <TextContent>
        <Name>{name}</Name>
        <Nick>{nick}</Nick>
      </TextContent>

      <Icon name="chevron-right" color="#303030" size={20} />
    </Container>
  );
};
