import './App.css';
import StocksContainer from './Components/Stocks/StocksContainer';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <div></div>
      <Header />
      <StocksContainer />
      <Footer />
    </div>
  );
}

export default App;
