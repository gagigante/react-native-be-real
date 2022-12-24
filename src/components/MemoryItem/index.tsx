import React from 'react';

import {
  Container,
  ImageContainer,
  DayLabelContainer,
  DayLabel,
  EmptyView,
} from './styles';

type MemoryItemProps = {
  itemId: number;
  label: string;
  image: string | null;
  active?: boolean;
  isMemoryOnTime?: boolean;
  onClick?: (itemId: number) => void;
};

export const MemoryItem = ({
  itemId,
  label,
  image,
  active = false,
  isMemoryOnTime = false,
  onClick = () => null,
}: MemoryItemProps) => {
  return (
    <Container onPress={() => onClick(itemId)}>
      {image ? (
        <ImageContainer
          source={{uri: image}}
          resizeMode="cover"
          isMemoryOnTime={isMemoryOnTime}>
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
