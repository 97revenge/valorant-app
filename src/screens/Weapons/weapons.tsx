import axios, { AxiosResponse, AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  ViewComponent,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CoreTitle from '../../components/Headers/CoreTitle';
import { useState, useEffect, useCallback } from 'react';
import { HabilitieIcon } from '../../components/Icons/HabilitieIcon';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

export default function Weapons() {
  const [load, setLoad] = useState<Array<any>>([]);
  type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/weapons')
      .then((response) => {
        const { data } = response.data;
        setLoad(data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      <CoreTitle title="Weapons" />
      <ScrollView>
        <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]     ">
          {load.map((item) => {
            return (
              <SafeAreaView
                key={item.uuid}
                className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <TouchableOpacity className="">
                  <View className="flex items-start my-4 w-full p-2">
                    <Text className="font-valorant text-white text-4xl text-start">
                      {item.displayName}
                    </Text>
                    <View className="w-full h-auto  px-2">
                      <Image
                        source={{ uri: item.displayIcon }}
                        className="object-cover  w-[350px] h-[120px]     "
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <ScrollView horizontal={true} className=" w-auto h-auto gap-2  py-2 mx-2 ">
                  <View className="bg-red-200 rounded-lg px-5 ">
                    <Text>Cost Rate: {item.shopData?.cost}</Text>
                  </View>
                  <View className="bg-red-200 rounded-lg px-5">
                    <Text> {item.shopData?.category}</Text>
                  </View>
                  <View className="bg-red-200 rounded-lg px-5">
                    <Text>Fire Rate: {item.weaponStats?.fireRate}</Text>
                  </View>
                </ScrollView>
              </SafeAreaView>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6 ',
  main: 'flex-1 max-w-[960] justify-start ',
  title: 'text-[64px] font-bold text-center',
  subtitle: 'text-4xl text-gray-700 text-center text-gray-200',
};
