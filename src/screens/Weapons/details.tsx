import { View, Text, ScrollView, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../navigation';
import { useEffect, useState } from 'react';
type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'WeaponsDetails'>;

export const Details = (): React.ReactNode => {
  const router = useRoute<DetailsSreenRouteProp>();

  const [skins, setSkins] = useState<Array<any>>([]);

  useEffect(() => {
    const data = router.params?.skins;
    setSkins(data);
  }, []);

  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.7, y: 0.4 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <View className="rounded-b-lg  bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f]    shadow-2xl">
          <View className={styles.main}>
            <Text className={styles.title}>{router.params?.name}</Text>

            <View className="flex  my-5 full p-2 bg-[#ffffff18] rounded-lg">
              <LinearGradient
                colors={['transparent', '#ffffff31']}
                className="w-[400px] h-auto  p-2 py-2  rounded-lg items-center ">
                <Image
                  source={{ uri: router.params?.image }}
                  className="object-cover  w-[380px] h-[130px]     px-2 "
                />
              </LinearGradient>
            </View>

            <View className="flex flex-col gap-12  w-full  p-4 ">
              <View className=" bg-red-200 px-1 w-auto h-auto">
                <Text>ok</Text>
              </View>
              <View className="bg-red-200 px-1 w-auto h-auto">
                <Text>ok</Text>
              </View>
              <View className="bg-red-200 px-1 w-auto h-auto">
                <Text>ok</Text>
              </View>
              <View className="bg-red-200 px-1 w-auto h-auto">
                <Text>ok</Text>
              </View>
            </View>
            <View className="w-full h-[960px] object-contain  rounded-lg " />
          </View>
          <Text className="text-center font-valorant text-white text-4xl border-b-8 mx-12 rounded-lg border-[#ffffff42]">
            Skins
          </Text>
          {skins.map((item) => {
            const { chromas } = item;

            return (
              <View className=" p-2 mt-5 " key={item.uuid}>
                <View className={styles.container}>
                  <Text className="flex flex-col font-valorant text-white text-2xl px-2">
                    {item.displayName}
                  </Text>
                  <ScrollView horizontal={true} className="flex flex-row gap-16 py-12">
                    <View className="  bg-[#ffffff0e] w-auto h-auto rounded-lg  items-start px-5 justify-center">
                      <Image
                        source={{ uri: item.displayIcon }}
                        className=" object-fill w-[320px] h-[120px]  "
                      />
                    </View>
                    <View className="  bg-[#ffffff0e] w-auto h-auto rounded-lg  items-center px-5 justify-center">
                      <Image
                        source={{ uri: chromas?.displayIcon }}
                        className=" object-fill w-[320px] h-[120px]  "
                      />
                      <Text className="text-center font-valorant text-xl py-2">Chroma Version</Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 bg-red-200 rounded-lg shadow-lg  bg-[#ffffff3f] ',
  main: ' max-w-[960] p-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
