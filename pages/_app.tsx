import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import '../styles/vars.scss'
import '../components/CommonButton/index.scss'
import '../styles/global.css';
import '../styles/menu-var.scss';
import '../components/CommonMenu/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
