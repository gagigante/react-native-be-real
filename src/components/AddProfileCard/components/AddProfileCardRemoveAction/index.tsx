import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type AddProfileCardRemoveActionProps = {
  onClick: () => void;
};

export const AddProfileCardRemoveAction = ({
  onClick,
}: AddProfileCardRemoveActionProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name="x" color="#979797" size={18} />
    </TouchableOpacity>
  );
};
