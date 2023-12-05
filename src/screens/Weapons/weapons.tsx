import axios, { AxiosResponse, AxiosError } from 'axios';

import { LinearGradient } from 'expo-linear-gradient';

import { ViewComponent, Text, View, ScrollView } from 'react-native';
import CoreTitle from '../../components/Headers/CoreTitle';
import { useState, useEffect, useCallback } from 'react';

export default function Weapons() {
  const [load, setLoad] = useState<Array<any>>([]);

  const fetch = useCallback(async () => {
    await axios
      .get('https://valorant-api.com/v1/weapons')
      .then((response: AxiosResponse) => {
        setLoad(response.data);
        alert(load);
      })
      .catch((err: AxiosError) => alert(err.status));
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LinearGradient
      colors={['#cd4855', '#6c343e', '#17232b']}
      start={{ x: 0.1, y: 0.1 }}
      accessible
      className={styles.container}>
      <CoreTitle title="Weapons" />
      <ScrollView>
        <View className=" w-full h-full rounded-lg p-8 bg-[#2022253f]     ">
          <Text>Ok</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6 ',
  main: 'flex-1 max-w-[960] justify-start ',
  title: 'text-[64px] font-bold text-center',
  subtitle: 'text-4xl text-gray-700 text-center text-gray-200',
};
