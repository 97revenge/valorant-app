import { ReactNode, useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, Image, View, Linking } from 'react-native';
import { wx, W } from 'windstitch';

const concept = wx({
  variants: {
    concept: {
      primary: `mb-5 flex items-center  flex-row justify-center gap-6  `,
      secondary: `h-[45px] w-[45px] m-2 rounded-full  object-center `,
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
  const callBackAnchor = useCallback((tag: string) => {
    const url = tag;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          throw new Error('invalid');
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <View className={styles.primary}>
      <SafeAreaView>
        <View className=" flex flex-row justify-between rounded-full gap-12 ">
          <TouchableOpacity onPress={() => callBackAnchor('https://discord.com/invite/9V5MWgD')}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/free-discord-4054295-3352977.png?f=webp',
              }}
              className={styles.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => callBackAnchor('https://twitter.com/ValorantAPI')}>
            <Image
              source={{
                uri: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
              }}
              className={styles.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => callBackAnchor('https://github.com/97revenge/valorant-app')}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
              }}
              className={styles.secondary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
