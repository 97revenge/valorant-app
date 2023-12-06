import { View, Image, Text, SafeAreaView } from 'react-native';
import { W, wx } from 'windstitch';

import { useState } from 'react';

const concept = wx({
  variants: {
    primary: {
      SafeAreaView: `w-full h-full flex items-center justify-start mt-52`,
      View: `w-full  flex-col   flex items-center justify-center py-5 bg-[#ffffff0e] rounded-lg shadow-lg`,
      Image: `h-[155px] w-[220px]  object-cover mb-2`,
      Text: `font-valorant text-5xl text-black`,
    },
  },
});

namespace Styles {
  type Concept<T> = {
    SafeAreaView: T;
    View: T;
    Image: T;
    Text: T;
  };
  export const styles = (): object => {
    return {
      SafeAreaView: concept({
        primary: 'SafeAreaView',
      }),
      View: concept({
        primary: 'Text',
      }),
      Image: concept({
        primary: 'Image',
      }),
      Text: concept({
        primary: 'Text',
      }),
    } satisfies Concept<W.Infer<typeof concept>>;
  };
}

export const ValorantLoader = (): React.ReactNode => {
  const [data, setData] = useState<Partial<{ SafeAreaView: any }>>(Styles.styles);

  return (
    <>
      <SafeAreaView className={data?.SafeAreaView}>
        <View className=" w-full  flex-col   flex items-center justify-center py-5 bg-[#ffffff0e] rounded-lg shadow-lg">
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/free-valorant-3244523-2701892.png',
            }}
            className="h-[155px] w-[220px]  object-cover mb-2 "
          />
          <Text className="font-valorant text-5xl text-black ">Loading ... </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
