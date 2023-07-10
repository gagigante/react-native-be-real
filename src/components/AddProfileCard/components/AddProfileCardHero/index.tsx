import {Container, Name} from './styles';

type AddProfileCardHeroProps = {
  name: string;
};

export const AddProfileCardHero = ({name}: AddProfileCardHeroProps) => {
  const nameInitials = name
    .split(' ')
    .slice(0, 2)
    .map(item => item[0])
    .join('');

  return (
    <Container>
      <Name>{nameInitials}</Name>
    </Container>
  );
};
