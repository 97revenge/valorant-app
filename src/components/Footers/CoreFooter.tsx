import { ReactNode } from 'react';
import { SafeAreaView, TouchableOpacity, Image, View } from 'react-native';
import { wx, W } from 'windstitch';

const concept = wx({
  variants: {
    concept: {
      primary: `mb-5 flex items-center  flex-row justify-center gap-6`,
      secondary: `h-[35px] w-[35px] m-2 mt-5`,
    },
  },
});

type Concept<T> = {
  primary: T;
  secondary: T;
};

const styles = {
  primary: concept({
    concept: 'primary',
  }),
  secondary: concept({
    concept: 'secondary',
  }),
} satisfies Concept<W.Infer<typeof concept>>;

export const CoreFooter = (): ReactNode => {
  return (
    <View className={styles.primary}>
      <SafeAreaView>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
            }}
            className={styles.secondary}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
