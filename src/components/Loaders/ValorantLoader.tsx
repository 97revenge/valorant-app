import { View, Image, Text } from 'react-native';

export const ValorantLoader = (): React.ReactNode => {
  return (
    <>
      <View className=" w-full  flex-col gap-4  flex items-center justify-center mt-52">
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-256/free-valorant-3244523-2701892.png',
          }}
          className="h-[155px] w-[220px]  object-cover "
        />
        <Text className="font-valorant text-5xl text-black ">Loading ... </Text>
      </View>
    </>
  );
};
