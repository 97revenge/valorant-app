import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
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

            <View className="w-full h-[960px] object-contain  rounded-lg " />
          </View>
          <Text className="text-center font-valorant text-white text-4xl border-b-8 mx-12 rounded-lg border-[#ffffff42]">
            Skins
          </Text>
          {skins.map((item) => {
            return (
              <View className="flex flex-row py-12">
                <View className={styles.container}>
                  <Text className="font-valorant text-white text-2xl px-2">{item.displayName}</Text>
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
  container: 'flex-1 p-6 ',
  main: ' max-w-[960]    ',
  title:
    'text-[64px]   font-valorant text-xl p-2 text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
