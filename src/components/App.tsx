import React from 'react';
import StoryGenerator from './StoryGenerator';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Creative Story Generator</h1>
      </header>
      <main>
        <StoryGenerator />
      </main>
      <footer>
        <p>Created with love for my child</p>
      </footer>
    </div>
  );
};

export default App;