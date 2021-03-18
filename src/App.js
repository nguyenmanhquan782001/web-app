// import logo from './logo.svg';
import './App.css';
import Albums from './components/Albums';
import Banner from './components/Banner.js';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <div>

        <Header />

        <main>
          <Banner />
          <Albums />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
