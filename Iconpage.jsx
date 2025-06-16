import React from 'react'
import { Link } from 'react-router-dom';

import './Icon.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeR7JuJhhULd7JKMu9BmevtcWVWvwnZ2WPN5U9yjaLVLLPXHm9ByqPeckqwJ1V0Ek_SvI&usqp=CAU"
          className="App-logo" alt="logo" />

        <Link to={'/home'}> <p> LibraryManagement</p></Link>

        <p><code>Welcome to my Website</code> </p>
        <p><code>Learn more Books and Build your Knowledge</code> </p>
        <p><code></code> </p>
      </header>
    </div>
  );
}

export default App;
