import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../navigation';
import { useRoute, RouteProp } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'CompDetails'>;

export const CompDetails = (): React.ReactNode => {
  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <View>
      <Text>{route.params?.name}</Text>
    </View>
  );
};
