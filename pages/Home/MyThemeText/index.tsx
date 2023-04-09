import React from 'react'
import CommonThemeText from '../../../components/CommonThemeText';
import { ThemeTextSize } from '../../../components/CommonThemeText/type';

// library.add(faCoffee);

function MyThemeText() {
  return (
    <CommonThemeText theme='danger' size={ThemeTextSize.Large} />
  )
}

export default MyThemeText;