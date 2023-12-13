import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from '../../components/Sections/ListSection';
import { LinearGradient } from 'expo-linear-gradient';
import CoreTitle from '../../components/Headers/CoreTitle';

export const Maps = (): React.ReactNode => {
  const [maps, setMaps] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/maps')
      .then((res) => {
        const { data } = res.data;
        setMaps(data);
        // alert(JSON.stringify(maps));
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <CoreTitle title="Maps" />

        <View className=" w-full h-full rounded-lg p-4 bg-[#2022253f]    ">
          {maps.map((item) => {
            return (
              <View
                key={item.uuid}
                className="rounded-b-lg mb-5 bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]   shadow-lg ">
                <SafeAreaView className="">
                  <TouchableOpacity className=" w-full p-5 rounded-lg ">
                    <View className="flex  justify-between flex-row  items-center">
                      <Text className="text-[55px] text-start font-valorant text-white mb-2">
                        {item.displayName}
                      </Text>

                      <Text className="font-bold text-white border-b-2 border-white text-xs">
                        {item.coordinates}
                      </Text>
                    </View>

                    <View className="flex flex-row justify-between  bg-[#ffffff18] h-auto w-full items-center rounded-lg shadow-xl">
                      <Image
                        source={{ uri: item.splash }}
                        className="   w-[350px] h-[300px] rounded-lg object-center  "
                      />
                    </View>
                  </TouchableOpacity>
                </SafeAreaView>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
