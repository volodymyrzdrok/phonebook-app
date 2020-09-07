import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const LoaderSpinner = () => {
  return (
    <div className={styles.loaderSpinner}>
      <Loader
        type="TailSpin"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderSpinner;
