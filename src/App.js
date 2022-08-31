import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [page, setPage] = useState('home');

  // useEffect(() => {
  //   console.log(page);
  // }, [page])

  return (
    <div className="App">
      <header className="App-header" width="100%">
        <Header page={page} setPage={setPage} />
      </header>
    </div>
  );
}

export default App;
