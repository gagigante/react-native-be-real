import React from 'react';
import {faker} from '@faker-js/faker';

import {ListGroup} from '../../components/ListGroup';
import {ProfileCard} from '../../components/ProfileCard';

import {
  Container,
  ProfileContainer,
  VersionLabel,
  Button,
  ButtonText,
} from './styles';

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

const FAKE_USER = {
  name: faker.name.fullName(),
  nick: faker.word.adjective(),
  image: faker.image.people(640, 640),
};

export const Settings = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileCard
          name={FAKE_USER.name}
          nick={FAKE_USER.nick}
          image={FAKE_USER.image}
        />
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
