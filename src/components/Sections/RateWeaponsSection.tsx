import { ScrollView, View, Text } from 'react-native';

type Props = {
  cost: undefined;
  category: undefined;
  fireRate: undefined;
  magazineSize: undefined;
};

type Elem = React.ReactNode;

const Cost = ({ children = <View></View> }: { children: Elem }): Elem => {
  return <View>{children}</View>;
};

export const RateWeaponsSection = ({ cost, category, fireRate, magazineSize }: Props) => {
  return (
    <ScrollView horizontal={true} className="gap-2 w-auto px-4 py-2 rounded-lg ">
      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg ">
        <Text className="font-bold text-white ">Cost Rate: {cost}</Text>
      </View>
      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg">
        <Text className="font-bold text-white "> {category}</Text>
      </View>
      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg">
        <Text className="font-bold text-white ">Fire Rate: {fireRate}</Text>
      </View>
      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg">
        <Text className="font-bold text-white ">
          Magazine Size:
          <Text>{magazineSize} Bullets</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
