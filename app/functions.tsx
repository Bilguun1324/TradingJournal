'use client';
import { useCol } from '#/firebase/firebase';
import { DataType } from '#/provider/provider';

export const randomId = (length: number) => {
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const capitalizeFirstLetter = (str: string) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
};

export const createGeneral = async (text: string, path: string) => {
  const { updateRecord } = useCol(path);

  try {
    await updateRecord({ hello: text }, 'general').then((res) =>
      console.log(res),
    );
  } catch (error) {
    return error;
  }
};

export const readGeneral = async (id: string) => {
  const { getRecord } = useCol('all');

  try {
    const record = await getRecord(id);
    return record;
  } catch (error) {
    return error;
  }
};
