import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import { styles } from '../components/Sections/ListSection';
import axios from 'axios';

import { StackNavigationProp } from '@react-navigation/stack';

import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Agents() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [load, setLoad] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
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
      <Text className="font-valorant text-5xl text-center text-white py-5">Agents</Text>
      <ScrollView>
        <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]    ">
          {load.map((item) => {
            return (
              <View
                key={item.uuid}
                className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <SafeAreaView className="">
                  <TouchableOpacity
                    className=" w-full p-5 rounded-lg "
                    onPress={() =>
                      navigation.navigate('Details', {
                        name: item.displayName,
                        colors: {
                          one: item.backgroundGradientColors[0],
                          two: item.backgroundGradientColors[1],
                          three: item.backgroundGradientColors[2],
                        },
                        image: item.fullPortraitV2,
                        description: item.description,
                        background: item.background,
                        habilities: {
                          one: item.abilities[0].description,
                          two: item.abilities[1].description,
                          three: item.abilities[2].description,
                          ult: item.abilities[3].description,
                        },
                        nameHabilities: {
                          one: item.abilities[0].displayName,
                          two: item.abilities[1].displayName,
                          three: item.abilities[2].displayName,
                          ult: item.abilities[3].displayName,
                        },
                        iconHabilities: {
                          one: item.abilities[0].displayIcon,
                          two: item.abilities[1].displayIcon,
                          three: item.abilities[2].displayIcon,
                          ult: item.abilities[3].displayIcon,
                        },
                        role: {
                          role: item.role.displayName,
                          description: item.role.description,
                        },
                      })
                    }>
                    <View className="flex  justify-start flex-row gap-12 items-center">
                      <Text className="text-[55px] text-start font-valorant text-white">
                        {item.displayName}
                      </Text>
                    </View>

                    <LinearGradient
                      colors={[
                        `#${item.backgroundGradientColors[0]}`,
                        `#${item.backgroundGradientColors[1]}`,
                        `#${item.backgroundGradientColors[2]}`,
                      ]}
                      start={{ x: 0.2, y: 0.5 }}
                      className="flex flex-row justify-between px-2 bg-zinc-200 h-[50px] items-center rounded-lg ">
                      <Image
                        source={{ uri: item.displayIcon }}
                        className=" w-[70px] h-[70px] rounded-lg "
                      />
                      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg ">
                        <Image
                          source={{ uri: item.abilities[0].displayIcon }}
                          className=" w-[45px] h-[45px] p-2 rounded-lg "
                        />
                      </View>
                      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg ">
                        <Image
                          source={{ uri: item.abilities[1].displayIcon }}
                          className=" w-[45px] h-[45px] p-2 rounded-lg "
                        />
                      </View>
                      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg">
                        <Image
                          source={{ uri: item.abilities[2].displayIcon }}
                          className=" w-[45px] h-[45px] p-2 rounded-lg "
                        />
                      </View>
                      <View className="bg-[#ffffff31] w-auto p-2 rounded-lg shadow-lg ">
                        <Image
                          source={{ uri: item.abilities[3].displayIcon }}
                          className=" w-[45px] h-[45px] p-2 rounded-lg "
                        />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </SafeAreaView>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
