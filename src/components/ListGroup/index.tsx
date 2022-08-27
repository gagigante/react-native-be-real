import React from 'react';

import {ListItem} from './components/ListItem';

import {Container, GroupLabel, GroupOptions, OptionDivider} from './styles';

type Item = {
  key: number;
  label: string;
  icon: string;
  onPress?: () => void;
};

type ListGroupProps = {
  label: string;
  items: Item[];
};

export const ListGroup = ({label, items}: ListGroupProps) => {
  return (
    <Container>
      <GroupLabel>{label}</GroupLabel>
      <GroupOptions>
        {items.map(({key, label: itemLabel, icon, onPress}, index) => (
          <React.Fragment key={key}>
            {index > 0 && <OptionDivider />}

            <ListItem icon={icon} onPress={onPress}>
              {itemLabel}
            </ListItem>
          </React.Fragment>
        ))}
      </GroupOptions>
    </Container>
  );
};
