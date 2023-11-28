import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native';

import Overview from '../screens/overview';
import Details from '../screens/details';
import Agents from '../screens/agents';

export type RootStackParamList = {
  Overview: undefined;
  Details: {
    name: string;
    colors?: { one: any; two: any; three: any };
    image?: string;
    description?: string;
    background?: string;
    role?: {
      role: string;
      description: string;
    };
    iconHabilities?: {
      one: string;
      two: string;
      three: string;
      ult: string;
    };
    nameHabilities?: {
      one: string;
      two: string;
      three: string;
      ult: string;
    };
    habilities?: {
      one: string;
      two: string;
      three: string;
      ult: string;
    };
  };
  Agents: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen
          name="Agents"
          component={Agents}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
