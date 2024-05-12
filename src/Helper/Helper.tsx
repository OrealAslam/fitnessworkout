import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'http://192.168.138.43/MRL-Apps/MRL-Apps/public/api/';
export const IMG_URL = 'http://192.168.138.43/MRL-Apps/MRL-Apps/public/data';
export const URL = 'https://mrlapps.care20.com/public/data/';

export const dayArr = [
  'day1',
  'day2',
  'day3',
  'day4',
  'day5',
  'day6',
  'day7',
  'day8',
  'day9',
  'day10',
  'day11',
  'day12',
  'day13',
  'day14',
  'day15',
  'day16',
  'day17',
  'day18',
  'day19',
  'day20',
  'day21',
  'day22',
  'day23',
  'day24',
  'day25',
  'day26',
  'day27',
  'day28',
];

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

export const get_exercise_list = async (day:any) => {
  const request = await fetch(BASE_URL+'get-exercise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: JSON.stringify({type: day}),
  });

  const response = await request.json();
  return response.data;
};
