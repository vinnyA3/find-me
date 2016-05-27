import React from 'react';
import ReactDOM from 'react-dom';
//import styles
import './app.css';
import styles from './styles.module.css';

const App = () => {
	return (
		<div className={styles.wrapper}>
			This is soo cool!
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
