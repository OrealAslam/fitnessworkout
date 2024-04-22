import AsyncStorage from '@react-native-async-storage/async-storage';

export const set_async_data = async (name: any, value: any) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

export const get_async_data = async (name: any) => {
  try {
    const data = await AsyncStorage.getItem(name);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    return false;
  }
};
