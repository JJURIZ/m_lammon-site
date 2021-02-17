// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TextLoop from "react-text-loop";
import Header from "./Header";
import Footer from "./Footer";
import "./main.scss";

const Controlled = () => {
  const [options, setOptions] = useState(["", ""]);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    const optionsTimeout = setTimeout(() => {
      setOptions([
        `In THE LONG ROAD HOME, Martin Lammon gives us acutely observed poems that discover and clarify and question, and in the end, often achieve a kind of wisdom. His is a clean, powerful music that moves and delights us, even as we travel that sad road. What a fine collection this is. 
          -Judson Mitcham, Georgia Poet Laureate (2012 - 2019), author of A Little Salvation:Poems Old and New`,
        `In the inimitable happiness of THE LONG ROAD HOME, consolations about as fathers and sons enact their natures-sometimes ferocious, often vulnerable-against the backdrop of aging and death. Martin Lammon traces a rural Ohio childhood through adult intimations of wonder and love, beyond what he calls "the only other beautiful thing," followed by the next, always the next: "And if my father and I//cannot say where the soul goes when we die, if/we have souls, what we have is enough." Lammon's long-awaited second collection brims with candor and relentless birdsong.
          -Michael Waters, author of The Dean of Disciplines, coeditor of Contemporary American Poetry`,
        `Gratitude and grief, beauty and time, prayers and progeny. These poems are heartfelt and heartfilled, never afraid of emotion and ache. Martin Lammon's THE LONG ROAD HOME evokes many different versions of home-the homes of our past lives with our fathers and grandfathers filled with plangent nostalgia, the habitats of animals so vulnerable and trilling, the homes that poets make inside the words and worlds of other poets. Like the "poetry fathers" he lovingly evokes, Martin Lammon is a poet of place and fidelity to those places, like James Wright, he's not afraid to make us feel the hurt and the glory within those places. THE LONG ROAD HOME is a worthy trip for anyone who's longed to feel again the pull of those places that haunt our imaginations, those locales we resist but know are true.
          -Allison Joseph, author of Confessions of a Barefaced Woman`
      ]);
    }, 0);

    return () => {
      clearTimeout(optionsTimeout);
    };
  }, []);

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      setInterval(5000); // How long the blurb appears on the screen
    }, 10);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, []);

  return (
    <div className="blurbs-container">
      <TextLoop
        interval={interval}
        children={options}
        noWrap={false}
        className="blurbs"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="home-page">
        <h1 className="header-lg">Martin Lammon</h1>
        <h3 className="header-md3">Poetry & Prose</h3>
        <img
          src="https://martinlammon.files.wordpress.com/2019/11/long-road-home-poems-by-martin-lammon.jpg"
          className="img-long-road"
        />
        <p>
          <Controlled />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
