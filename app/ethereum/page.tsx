'use client';
import {
  capitalizeFirstLetter,
  createGeneral,
  readGeneral,
} from '../functions';
import { path } from './data';
import { DataType, useData } from '#/provider/provider';
import { useEffect } from 'react';

const Page = () => {
  const { data, setData } = useData();
  const datas = readGeneral(path);

  if (!datas) return;

  useEffect(() => {
    setData(datas);
  }, [datas]);

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">{capitalizeFirstLetter(path)}</h1>
      This crypto is second biggest biggest crypto in the world
    </div>
  );
};

export default Page;
