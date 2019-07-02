import React, { Component } from "react";

import HelloWorld from './components/HelloWorld/HelloWorld';
import styles from './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.mainHeader}>My React App!</h1>
                <HelloWorld />
            </div>
        );
    }
}

export default App;