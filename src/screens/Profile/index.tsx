import React, {useLayoutEffect} from 'react';
import {Share} from 'react-native';
import {sub} from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import {faker} from '@faker-js/faker';

import {MemoryItem} from '../../components/MemoryItem';

import {useAuth} from '../../hooks/useAuth';

import {ProfileStackScreenProps} from '../../routes';

import {
  HeaderButton,
  Container,
  Avatar,
  Name,
  Nick,
  MemoriesLabelContainer,
  Label,
  PrivacyWarningContainer,
  PrivacyWarningText,
  MemoriesContainer,
  MemoriesLabel,
  MemoriesContent,
  MemoriesButton,
  MemoriesButtonText,
  ShareButton,
  ShareButtonText,
} from './styles';

type ProfileProps = ProfileStackScreenProps<'Profile'>;

const FAKE_MEMORIES = Array.from(Array(14).keys())
  .reverse()
  .map((item, index) => {
    const date = sub(new Date(), {days: item}).getDate();

    if (item === 0) {
      return {key: index, date, image: null, active: true};
    }

    return {
      key: index,
      date,
      image: faker.image.business(640, 640),
      active: false,
    };
  });

export const Profile = ({navigation}: ProfileProps) => {
  const {user} = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => navigation.navigate('Settings')}>
          <Icon name="more-horizontal" color="#ffffff" size={24} />
        </HeaderButton>
      ),
    });
  }, [navigation]);

  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          message: 'Add me on BeReal.',
        },
        {
          dialogTitle: 'dawdawd',
          subject: 'dawdad',
          tintColor: 'red',
        },
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // alert(error.message);
    }
  };

  return (
    <Container>
      <Avatar source={{uri: user.avatar}} />
      <Name>{user.name}</Name>
      <Nick>{user.nick}</Nick>

      <MemoriesLabelContainer>
        <Label>Your memories</Label>

        <PrivacyWarningContainer>
          <Icon name="lock" color="#8c8c8c" />

          <PrivacyWarningText>Only visible to you</PrivacyWarningText>
        </PrivacyWarningContainer>
      </MemoriesLabelContainer>

      <MemoriesContainer>
        <MemoriesLabel>Last 14 days</MemoriesLabel>

        <MemoriesContent>
          {FAKE_MEMORIES.map(({key, date, image, active}) => {
            return (
              <MemoryItem
                key={key}
                label={String(date)}
                image={image}
                active={active}
              />
            );
          })}
        </MemoriesContent>

        <MemoriesButton onPress={() => navigation.navigate('Memories')}>
          <MemoriesButtonText>View all my Memories</MemoriesButtonText>
        </MemoriesButton>
      </MemoriesContainer>

      <ShareButton onPress={onShare}>
        <ShareButtonText>🔗 BeRe.al/{user.nick}</ShareButtonText>
      </ShareButton>
    </Container>
  );
};
