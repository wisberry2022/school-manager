import { CustomTheme } from '@/theme/CustomTheme'
import type { AppProps } from 'next/app'
import '../assets/reset.css';
import { Layout } from '@/component/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomTheme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomTheme>
  )
}
