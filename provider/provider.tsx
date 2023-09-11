import {
  FC,
  Dispatch,
  createContext,
  useState,
  useContext,
  SetStateAction,
} from 'react';

export type DataType = {
  general?: string;
  history?: Array<string>;
};

type DataContextType = {
  data?: object;
  setData: Dispatch<SetStateAction<object>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider: FC<any> = ({ children }) => {
  const [data, setData] = useState<DataType>({});

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);
