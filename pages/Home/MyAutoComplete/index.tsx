import React, { ChangeEvent, useState } from 'react'
import CommonAutoComplete from '../../../components/CommonAutoComplete';
import { DataSourceType } from '../../../components/CommonAutoComplete/type';
import { LakerPlayerProps } from '../../../components/CommonAutoComplete/type';

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

function MyAutoComplete() {
  // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins','james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const lakersWithNumber: LakerPlayerProps[] = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]
  
  const [filterState, setFilterState] = useState<DataSourceType[]>([]);

  // const handleFetch = (query: string) => {
  //   const res = lakers.filter(name => name.includes(query));
  //   setFilterState(res);
  //   return res;
  // }
  // const handleFetch = (query: string) => {
  //   const res = lakersWithNumber.filter(player => player.value.includes(query)).map(x=>({
  //     value: x.value
  //   }));
  //   setFilterState(res);
  //   return res;
  // }
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        const res = items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}));
        setFilterState(res);
        return res;
      })
  }
  // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item?.value}</h2>
  //       <p>Number: {item?.number}</p>
  //     </>
  //   )
  // }
  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return (
      <>
        <h2>Name: {item?.value}</h2>
        <p>Url: {item?.url}</p>
      </>
    )
  }

  return (
    <div>
      <h2>防抖 debounce</h2>
      <p>通过闭包，保存setTimeout返回值timer， 每当用户输入，就将前一个setTimeout clear掉，创建一个新的setTimeout,
        这就保证在一定的输入时间间隔内，如果还有输入，就不会执行这个回调函数</p>
      <h2>useState setState会触发组件rerender</h2>
      <h2>ref不会rerender而是保存在内存中, 等价于声明在全局</h2>
      <div>如果说你写的这个组件要在父组件中被使用n次</div>
      <div>useref是每个组件都有一个</div>
      <div>全局变量可能是同一个</div>
      <h2>自定义hooks，点击组件外区域，关闭弹层</h2>
      <CommonAutoComplete 
        fetchSuggestions={handleFetch} 
        onSelect={console.log} 
        renderOption={renderOption}
      />
      <div style={{height: '20px'}}>
        {JSON.stringify(filterState)}
      </div>

      <CommonAutoComplete fetchSuggestions={handleFetch}        
      />
    </div>
  )
}

export default MyAutoComplete;