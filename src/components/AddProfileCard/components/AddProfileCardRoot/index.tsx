import {ReactNode} from 'react';

import {Container} from './styles';

type AddProfileCardRootProps = {
  children: ReactNode;
  onClick: () => void;
};

export const AddProfileCardRoot = ({
  children,
  onClick,
}: AddProfileCardRootProps) => {
  return <Container onPress={onClick}>{children}</Container>;
};
