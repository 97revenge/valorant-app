import { ScrollView, View, Text } from 'react-native';
import { W, wx } from 'windstitch';

type Props = {
  cost: undefined;
  category: undefined;
  fireRate: undefined;
  magazineSize: undefined;
};

namespace WeaponSection {
  type Elem = React.ReactNode;

  export const Cost = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const Category = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const FireRate = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
  export const MagazineSize = ({ children = <View></View> }: { children: Elem }): Elem => {
    return <View>{children}</View>;
  };
}

export const RateWeaponsSection = ({ cost, category, fireRate, magazineSize }: Props) => {
  return (
    <ScrollView horizontal={true} className="gap-2 w-auto px-4 py-2 rounded-lg ">
      <WeaponSection.Cost>
        {typeof cost === 'number' && (
          <View
            className={
              typeof cost === 'number' ? 'bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg mt-2' : ''
            }>
            <Text className="font-bold text-white ">Cost Rate: {cost} </Text>
          </View>
        )}
      </WeaponSection.Cost>
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
