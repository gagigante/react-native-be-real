import {ReactNode} from 'react';

import {Container} from './styles';

type AddProfileCardContentProps = {
  children: ReactNode;
};

export const AddProfileCardContent = ({
  children,
}: AddProfileCardContentProps) => {
  return <Container>{children}</Container>;
};
