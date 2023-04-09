import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import '../styles/vars.scss'
import '../components/CommonButton/index.scss'
import '../styles/global.css';
import '../styles/menu-var.scss';
import '../components/CommonMenu/index.scss';
import '../components/CommonThemeText/index.scss';
import '../styles/theme-text.scss';
import '../styles/input-var.scss';
import '../components/CommonInput/index.scss';
import '../components/CommonAutoComplete/index.scss';
import '../components/CommonUpload/index.scss';
import '../components/CommonProgress/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
