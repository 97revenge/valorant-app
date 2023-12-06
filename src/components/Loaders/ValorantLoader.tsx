import { View, Image } from 'react-native';

export const ValorantLoader = (): React.ReactNode => {
  return (
    <>
      <View className="flex-col gap-4 w-full flex items-center justify-center">
        <view className="w-28 h-28 border-8 text-red-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red-400 rounded-full">
          <Image source={{ uri: 'https://api.iconify.design/tabler:brand-valorant.svg' }} />
        </view>
      </View>
    </>
  );
};
