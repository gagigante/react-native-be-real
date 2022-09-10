import React from 'react';

import {Container, ImageContainer, DayLabelContainer, DayLabel} from './styles';

type MemoryItemProps = {
  label: string;
  image: string | null;
  active?: boolean;
};

export const MemoryItem = ({label, image, active = false}: MemoryItemProps) => {
  return (
    <Container>
      <ImageContainer source={{uri: image ?? ''}} resizeMode="cover">
        <DayLabelContainer active={active}>
          <DayLabel active={active}>{label}</DayLabel>
        </DayLabelContainer>
      </ImageContainer>
    </Container>
  );
};
