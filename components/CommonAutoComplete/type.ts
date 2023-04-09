import { ReactElement } from 'react';
import { ICommonInputProps } from './../CommonInput/type';

interface DataSourceObject {
  value: string;
}

export interface LakerPlayerProps {
  value: string;
  number: number;
}

export type DataSourceType<T={}> = T & DataSourceObject;

export interface ICommonAutoCompleteProps extends Omit<ICommonInputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType<any>) => ReactElement;
}