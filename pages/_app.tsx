import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
  );
}

export default MyApp;
