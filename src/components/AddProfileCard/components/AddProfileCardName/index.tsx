import {Name} from './styles';

type AddProfileCardNameProps = {
  children: string;
};

export const AddProfileCardName = ({children}: AddProfileCardNameProps) => {
  return <Name>{children}</Name>;
};
