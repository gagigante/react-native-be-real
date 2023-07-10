import {Container, Label} from './styles';

type AddProfileCardLabelActionProps = {
  label: string;
  onClick: () => void;
};

export const AddProfileCardLabelAction = ({
  label,
  onClick,
}: AddProfileCardLabelActionProps) => {
  const labelInUpperCase = label.toUpperCase();

  return (
    <Container onPress={onClick}>
      <Label>{labelInUpperCase}</Label>
    </Container>
  );
};
