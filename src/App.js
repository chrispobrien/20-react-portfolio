import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState('about');

  // Load page from sessionStorage to account for page refresh or back from deployed or gitbub links
  useEffect(() => {
    const storedPage = sessionStorage.getItem('page');
    if (storedPage) {
      setPage(storedPage);
    };
  }, []);

  // Save page selected to sessionStorage
  const handlePage = function(newPage) {
    setPage(newPage);
    sessionStorage.setItem('page', newPage);
  }

  return (
    <div className="App">
      <header className="App-header" width="100%">
        <Header page={page} handlePage={handlePage} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
