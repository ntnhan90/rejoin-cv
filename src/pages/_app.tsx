import type { AppProps } from "next/app";
import React, { Fragment } from 'react';
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import '@assets/css/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
