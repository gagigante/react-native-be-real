import {Info} from './styles';

type AddProfileCardInfoProps = {
  children: string | string[];
};

export const AddProfileCardInfo = ({children}: AddProfileCardInfoProps) => {
  return <Info>{children}</Info>;
};
