import cls from 'classnames';
import React, { ChangeEvent, KeyboardEvent, FC, useEffect, useState, useRef } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import useDebounce from '../../hooks/useDebounce';
import CommonInput from '../CommonInput';
import { DataSourceType, ICommonAutoCompleteProps } from './type';

// let triggerSearch = false;
let count = 1;

const CommonAutoComplete: FC<ICommonAutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const debouncedValue = useDebounce(inputValue, 500);
  const triggerSearchRef = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutSide(componentRef, () => {
    setSuggestions([])
  });
  
  useEffect(() => {
    // if(debouncedValue && triggerSearch) {
    if(debouncedValue && triggerSearchRef.current) {
      const results = fetchSuggestions(debouncedValue);
      if(results instanceof Promise) {
        results.then(data => {
          setSuggestions(data);
        })
      } else {
        setSuggestions(results);
      }
    }else {
      setSuggestions([]);
    }
    setHighlightIndex(-1);
  }, [debouncedValue])
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    // triggerSearch=true;
    triggerSearchRef.current = true;
  }
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    if(onSelect) {
      onSelect(item);
    }
    triggerSearchRef.current = false;
    // triggerSearch=false;
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  }

  const highlight = (index: number) => {
    if(index < 0) {
      index = 0;
    }
    if(index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      // 回车
      case 13:
        if(suggestions[highlightIndex]) { // 搜索完了，回车才生效，不然有bug
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      // 上
      case 38:
        highlight(highlightIndex - 1);
        break;
      // 下
      case 40:
        highlight(highlightIndex + 1);
        break;
      // esc
      case 27:
        setSuggestions([]); // 置空
        break;
      default:
        break;
    }
  }

  const generateDropdown = () => {
    return (
      <ul>
        {
          suggestions.map((x, idx)=>{
            const cnames = cls('suggestion-item', {
              'is-active': idx === highlightIndex
            })
              return (
                <li className={cnames} key={idx} onClick={() => handleSelect(x)}>
                  {renderTemplate(x)}
                </li>
              )
            }
          ) 
        }
      </ul>
    )
  }


  return (
    <div className='auto-complete' ref={componentRef}>
      <CommonInput
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {
       ( suggestions?.length > 0) && generateDropdown()
      }
      <button onClick={() => {
        count = count+1;
        console.log("count", count);
      }}>+1</button>
    </div>
  )
}

export default CommonAutoComplete;