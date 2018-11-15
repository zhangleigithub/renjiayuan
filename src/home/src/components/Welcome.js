import React from 'react';
import styles from './Welcome.css';

class Welcome extends React.Component{

  render(){
    return(
      <div className={styles.normal}>
        <div className={styles.title}>Ant Design</div>
        <div className={styles.welcome}/>
      </div>
    );
  };
}

Welcome.propTypes = {
};

export default Welcome;
