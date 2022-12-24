import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {ListGroup} from '../../components/ListGroup';
import {ProfileCard} from '../../components/ProfileCard';

import {useAuth} from '../../hooks/useAuth';

import {ProfileStackScreenProps} from '../../routes/ProfileStackRoutes';

import {
  Container,
  ProfileContainer,
  VersionLabel,
  Button,
  ButtonText,
} from './styles';

type SettingsProps = ProfileStackScreenProps<'Settings'>;

const SECTIONS = [
  {
    key: 0,
    name: 'FEATURES',
    items: [
      {
        key: 0,
        icon: 'calendar',
        label: 'Memories',
      },
    ],
  },
  {
    key: 1,
    name: 'SETTINGS',
    items: [
      {
        key: 0,
        icon: 'airplay',
        label: 'Notification',
      },
      {
        key: 1,
        icon: 'globe',
        label: 'Time Zone: Americanas',
      },
      {
        key: 2,
        icon: 'external-link',
        label: 'Other',
      },
    ],
  },
  {
    key: 2,
    name: 'ABOUT',
    items: [
      {
        key: 0,
        icon: 'share',
        label: 'Share BeReal',
      },
      {
        key: 1,
        icon: 'star',
        label: 'Rate BeReal',
      },
      {
        key: 2,
        icon: 'help-circle',
        label: 'Help',
      },
      {
        key: 3,
        icon: 'info',
        label: 'About',
      },
    ],
  },
];

export const Settings = ({navigation}: SettingsProps) => {
  const {user} = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color="#fff" name="arrow-left" size={28} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ProfileContainer>
        <ProfileCard name={user.name} nick={user.nick} image={user.avatar} />
      </ProfileContainer>

      {SECTIONS.map(({key, name, items}) => (
        <ListGroup key={key} label={name} items={items} />
      ))}

      <Button>
        <ButtonText>Log Out</ButtonText>
      </Button>

      <VersionLabel>Version 0.23.3 (7500) - Production</VersionLabel>
    </Container>
  );
};
