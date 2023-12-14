import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'MapsDetails'>;

export const MapsDetails = (): React.ReactNode => {
  const router = useRoute<DetailScreenRouteProp>();

  const [call, setCall] = useState<Array<any>>([]);

  useEffect(() => {
    setCall(router.params?.callouts);
  }, []);

  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.7, y: 0.4 }}
      accessible
      className={styles.container}>
      <ScrollView>
        <View className="rounded-b-lg   bg-[#ffffff18]  border-t-8  border-t-[#ffffff3f] text-3xl    shadow-2xl h-auto">
          <View className={styles.main}>
            <Text className={styles.title}>{router.params?.description}</Text>
            <View className=" items-start ">
              <View className=" flex flex-row   justify-center shadow-3xl rounded-lg w-[99%] h-auto my-2 bg-[#ffffff18] p-2 ">
                <Image
                  source={{ uri: router.params?.icon }}
                  className="w-[80%] h-[65px] object-cover rounded-lg"
                />
                <Text className="px-1.5 my-6  text-md text-center justify-center font-bold text-white ">
                  {router.params?.tatical}
                </Text>
              </View>
            </View>
            <View className=" flex items-center justify-center h-[550px] bg-[#ffffff18] rounded-lg  m-2 ">
              <Image
                source={{ uri: router.params?.display }}
                className=" relative w-[100%] h-[100%] object-cover"
              />
            </View>
          </View>
          <View className="px-4 py-2 h-[900px] ">
            <Text className="text-center font-valorant text-white text-6xl border-b-8 mx-12 rounded-lg border-[#ffffff3f]">
              Statistics
            </Text>
            <ScrollView className="my-2 ">
              {call.map((item) => {
                return (
                  <View className=" flex flex-row   bg-[#ffffff18]  w-[410px] rounded-md h-[130px] px-2 items-center gap-x-2 my-3">
                    <Text className="font-valorant text-md text-white ">{item.regionName}</Text>
                    <Text className="text-md font-bold underline">{item.superRegionName}</Text>
                    <Text className="bg-red-200 px-2"> Location X : {item.location.x}</Text>
                    <Text className="bg-yellow-600 px-2 h-auto">
                      Location Y : {item.location.y}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

// {call.map((item) => {
//   return (
//     <View className=" flex flex-col  bg-[#ffffff18]  w-[410px] rounded-md h-[100%] px-2 items-center gap-x-2">
//       <Text className="font-valorant text-md text-white ">{item.regionName}</Text>
//       <Text className="text-md font-bold underline">{item.superRegionName}</Text>
//       <Text className="bg-red-200 px-2"> Location X : {item.location.x}</Text>
//       <Text className="bg-yellow-600 px-2 h-auto">
//         {' '}
//         Location y : {item.location.y}
//       </Text>
//     </View>
//   );
// })}

const styles = {
  container: 'flex-1 p-6 bg-[#ffffff95] shadow-lg  shadow-lg  bg-[#ffffff3f] ',
  main: ' max-w-[960px] p-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
