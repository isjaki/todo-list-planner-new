import React from 'react';

import HelloWorld from './components/HelloWorld/HelloWorld';
import styles from './App.scss';

const App = () => (
    <div>
        <h1 className={styles.mainHeader}>My React App!</h1>
        <HelloWorld />
    </div>
);

export default App;
