import { Router, Link } from "react-router";
import "./main.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Martin Lammon</h1>
        <h3>Poetry & Prose</h3>
        <img
          src="https://martinlammon.files.wordpress.com/2019/10/2.-martin-lammon1stchoice-color.jpg?w=190&zoom=2"
          className="portrait"
          alt="Martin Lammon Headshot"
        />
        <h2>Hello, and Welcome</h2>
        <p>
          The Long Road Home is available now from Amazon or directly from the
          publisher, Finishing Line Press. When I was nineteen years old, I knew
          that I wanted to spend my life writing poems and teaching poetry. A
          lifetime later, after working with MFA graduate students and K-12
          students, speaking to audiences large and small at colleges,
          libraries, bookstores, and conventions from Atlanta to Portland,
          Oregon, from New Orleans to Madrid, Spain, I’m still writing poems and
          essays about poetry & poets, literature, politics, culture & family.
        </p>
      </header>
    </div>
  );
}

export default App;
