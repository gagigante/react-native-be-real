import React from 'react';

import {
  Container,
  ImageContainer,
  DayLabelContainer,
  DayLabel,
  EmptyView,
} from './styles';

type MemoryItemProps = {
  label: string;
  image: string | null;
  active?: boolean;
};

export const MemoryItem = ({label, image, active = false}: MemoryItemProps) => {
  return (
    <Container>
      {image ? (
        <ImageContainer source={{uri: image}} resizeMode="cover">
          <DayLabelContainer active={active}>
            <DayLabel active={active}>{label}</DayLabel>
          </DayLabelContainer>
        </ImageContainer>
      ) : (
        <EmptyView>
          <DayLabelContainer active={active}>
            <DayLabel active={active}>{label}</DayLabel>
          </DayLabelContainer>
        </EmptyView>
      )}
    </Container>
  );
};
