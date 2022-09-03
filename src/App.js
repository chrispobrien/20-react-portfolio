import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState('about');

  // useEffect(() => {
  //   console.log(page);
  // }, [page])

  return (
    <div className="App">
      <header className="App-header" width="100%">
        <Header page={page} setPage={setPage} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
