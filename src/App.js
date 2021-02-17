import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import "./main.scss";



function App() { 
  return (
    <div className="App">
      <Header />
      <div className="home-page">
      <h1 className="header-lg">Martin Lammon</h1>
        <h3 className="header-md3">Poetry & Prose</h3>
        <img src="https://martinlammon.files.wordpress.com/2019/11/long-road-home-poems-by-martin-lammon.jpg" className="img-long-road"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
