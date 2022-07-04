import React from 'react';
import './App.css';
import { Container } from './components/container';
import Header from './components/Header/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Hero />
      </Container>  
    </div>
  );
}

export default App;
