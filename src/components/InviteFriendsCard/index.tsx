import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Avatar,
  Content,
  TextContent,
  InviteText,
  LinkText,
} from './styles';

type InviteFriendsCardProps = {
  userAvatar: string;
  userName: string;
};

export const InviteFriendsCard = ({
  userAvatar,
  userName,
}: InviteFriendsCardProps) => {
  return (
    <Container>
      <Avatar source={{uri: userAvatar}} />

      <Content>
        <TextContent>
          <InviteText>Invite friends on BeReal</InviteText>

          <View>
            <LinkText>bere.al/{userName}</LinkText>
          </View>
        </TextContent>

        <Icon name="share" color="#ffffff" size={20} />
      </Content>
    </Container>
  );
};
