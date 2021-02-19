import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Profile from "./Profile";
import Books from "./Books";
import About from "./About";
import PoemsEssaysMore from "./PoemsEssaysMore"
import "./main.scss";


const App = () => {
  return (
    <div className="App">

      <Header />

      <Route 
      exact path="/"
      render={() => {
        return <Home />
      }}
      />
      
      <Route 
      exact path="/profile"
      render={() => {
        return <Profile />
      }}
      />

      <Route 
      exact path="/books"
      render={() => {
        return <Books />
      }}
      />

      <Route 
      exact path="/poems-essays-more"
      render={() => {
        return <PoemsEssaysMore />
      }}
      />

      <Route 
      exact path="/about"
      render={() => {
        return <About />
      }}
      />

      <Footer />
    </div>
  );
};

export default App;
