import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./user');

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const rawData: any = localStorage.getItem(key);
  return JSON.parse(rawData);
};
