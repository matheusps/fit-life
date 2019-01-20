import React from 'react';
import { Container, Box } from '../Layout';
import Sidebar from '../Sidebar';
import styles from './style.module.css';

const App = () => (
  <div className={styles.app}>
    <Container>
      <Box grow={1}>
        <Sidebar />
      </Box>
      <Box grow={3}>
        <h1>content</h1>
      </Box>
    </Container>
  </div>
)

export default App;
