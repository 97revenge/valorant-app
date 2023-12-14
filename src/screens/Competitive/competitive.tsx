// @ts-nocheck

import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';

export const Competitive = (): React.ReactNode => {
  return (
    <LinearGradient
      colors={[`#0a212b`, `#ce4352`]}
      start={{ x: 1.6, y: 0.6 }}
      accessible
      className={styles.container}>
      <Text>ok</Text>
    </LinearGradient>
  );
};

const styles = {
  container: 'flex-1 p-6 bg-[#ffffff95] shadow-lg  shadow-lg  bg-[#ffffff3f] ',
  main: ' max-w-[1020px] p-2   ',
  title:
    'text-[64px]  mb-2 font-valorant text-xl p-2  text-white text-center bg-[#ffffff36]  rounded-xl',
  subtitle: ' text-white text-center text-xl font-valorant font-bold ',
};
