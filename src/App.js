import React, { Component } from "react";
import "./App.css";

import Play from "./asset/play3.mp4";
import Set1 from "./asset/set1.jpg";
import Set2 from "./asset/set2.jpg";
import Set3 from "./asset/set3.jpg";
import Me from "./asset/me.jpg";

var mostVisible = require("most-visible");

const url = new URL(window.location.href),
  initView = url.searchParams.get("view") || "header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: initView
    };
  }
  componentDidMount() {
    window.addEventListener(
      "popstate",
      event => {
        if (window.history.state !== null) {
          let view = window.history.state.view;
          this.setState({
            last: view || "header"
          });
        } else {
          this.setState({ last: "header" });
        }
      },
      false
    );

    window.addEventListener("scroll", event => {
      var els = [...this.refs.app.children];
      els.splice(1, 1);
      var el = mostVisible(els);
      if (this.state.last !== el.className)
        this.setState({ last: el.className });
    });

    this.scroll(this.state.last);
  }
  urlSetParams(params) {
    let url = new URL(window.location.href);
    url.searchParams.set("view", params.view);

    window.history.pushState(
      { view: params.view },
      `Chicago Guitar instructor - ${params.view}`,
      url
    );
  }
  scroll = e => {
    let to;
    if (typeof e === "string") to = e;
    else to = e.currentTarget.getAttribute("data-to");
    document.getElementsByClassName(to)[0] &&
      document
        .getElementsByClassName(to)[0]
        .scrollIntoView({ behavior: "smooth" });

    this.setState({ last: to }, () => {
      this.urlSetParams({ view: this.state.last });
    });
  };
  render() {
    return (
      <div className="App" ref="app">
        <Nav scroll={this.scroll} last={this.state.last} />
        <Scroller scroll={this.scroll} last={this.state.last} />
        <Header />
        <About />
        <Truth />
        <Course />
        <Feel />
        <Goal />
        <Contact />
      </div>
    );
  }
}

const Nav = props => {
  return (
    <div className="nav">
      <button
        onClick={props.scroll}
        data-to="about"
        data-selected={props.last === "about"}
      >
        About
      </button>
      <button
        onClick={props.scroll}
        data-to="truth"
        data-selected={props.last === "truth"}
      >
        Truth
      </button>
      <button
        onClick={props.scroll}
        data-to="course"
        data-selected={props.last === "course"}
      >
        Course
      </button>
      <button
        onClick={props.scroll}
        data-to="feel"
        data-selected={props.last === "feel"}
      >
        Feel
      </button>
      <button
        onClick={props.scroll}
        data-to="goal"
        data-selected={props.last === "goal"}
      >
        My Goal
      </button>
      <button
        onClick={props.scroll}
        data-to="contact"
        data-selected={props.last === "contact"}
      >
        Contact
      </button>
    </div>
  );
};

const Scroller = props => {
  let content = [
      "header",
      "about",
      "truth",
      "course",
      "feel",
      "goal",
      "contact"
    ],
    index = content.indexOf(props.last),
    up = index > -1 ? content[index - 1 > 0 ? index - 1 : 0] : "about",
    down =
      index > -1
        ? content[
            index + 1 < content.length - 1 ? index + 1 : content.length - 1
          ]
        : "contact";

  return (
    <div className="scroller">
      <div className="up" onClick={props.scroll} data-to={up} />
      <div className="down" onClick={props.scroll} data-to={down} />
    </div>
  );
};

const BgVid = props => {
  return (
    <div className="bg-vid">
      <video src={props.src} autoPlay loop muted />
    </div>
  );
};

const Header = props => {
  return (
    <header className="header">
      <BgVid src={Play} />
      <div className="inner">
        <h1>
          Chicago Guitar Instructor
          <h2>
            <br />
            Learn the Sacred Art of
            <br />
            Euphoric Subconscious Expression
            <br />
            Through Music
            <br />
            <br />
            Without <span className="fancy">Reading</span> Music
            <br />
            <br />
            Every Student's First Class is Free!
          </h2>
        </h1>
      </div>
    </header>
  );
};

const About = props => {
  return (
    <div className="about">
      <img src={Set2} alt="set2" />
      <p className="tekts">
        Over the past twenty years,
        <br />I have developed a <span className="fancy">unique</span> system
        <br />
        of teaching students
        <br />
        how to play guitar,
        <br />
        without the need to read music.
        <br />
        <br />
        Music can be used as an <span className="fancy">outlet </span>
        <br />
        through which one may <span className="fancy">express</span>
        <br />
        his or her <span className="fancy">subconscious </span>emotions
        <br />
        in the form of <br />
        combinations of vibrations
        <br />
        that are simultaneously <span className="fancy">felt</span> and{" "}
        <span className="fancy">heard</span>
      </p>
    </div>
  );
};

const Truth = () => {
  return (
    <div className="truth">
      <p className="tekts">
        A startling amount of guitar classes
        <br />
        are based on <span className="fancy">ideas</span>
        <br /> taken from <span className="fancy">books </span>
        <br />
        written by <span className="fancy">third parties</span>.
        <br />
        <br />
        ...ideas
        <br />
        the teachers
        <br />
        of these <span className="fancy">classes</span>
        <br />
        don't<span className="fancy"> fully</span> understand!
        <br />
        <br />
        A lot of these instructors
        <br />
        are <span className="fancy">just</span> there for the paycheck.
        <br /> <br />
        To me, this is <span className="fancy">not a job</span>.
        <br /> <br />
        In fact, your first class is <span className="fancy">free</span>!
        <br />
        <br />
      </p>
    </div>
  );
};

const Course = () => {
  return (
    <div className="course">
      <p className="tekts">
        My course
        <br />
        will teach you that the <span className="fancy">tiny</span> details,
        <br />
        that 98% of musicians completely <span className="fancy">overlook</span>
        ,
        <br />
        are almost always the missing pieces of the
        <br />
        <span className="fancy">"Musician's Puzzle of Success"</span>.
        <br /> <br />
        Ignorance of these
        <br />
        <span className="fancy">seemingly</span> insignificant details
        <br />
        will, without a doubt,
        <br />
        limit a musician's ability to <span className="fancy">succeed</span>.
        <br />
        <br />I know <span className="fancy">every single detail</span>
        <br />
        of my system
        <br />
        because <span className="fancy">I created it!</span>
      </p>
      <p className="tekts">
        I construct patterns of exercises,
        <br />
        based on <span className="fancy">each individual student's</span>
        <br />
        experience and goals.
        <br />
        <br />
        Through <span className="fancy">repetition</span>,
        <br />
        these simple, enjoyable exercises
        <br />
        become <span className="fancy">habits</span>.
        <br />
        <br />
        True <span className="fancy">habits</span> do not require{" "}
        <span className="fancy">conscious</span> thought.
        <br />
        <br />
        They become second nature and{" "}
        <span className="fancy">just happen!</span>
        <br />
        <br />I specialize in recognizing the{" "}
        <span className="fancy">tendencies</span>
        <br />
        that <span className="fancy">prevent</span> musicians from progressing,
        <br />
        and I <span className="fancy">modify</span> them with
        <br />
        patterns that transform them into
        <br />
        <span className="fancy">successful habits!</span>
      </p>
    </div>
  );
};

const Feel = () => {
  return (
    <div className="feel">
      <p className="tekts">
        My course heavily focuses on
        <br />
        <span className="fancy">feel</span> over thought.
        <br />
        <br />
        One can easily play a <span className="fancy">single</span> note on a
        guitar
        <br />
        and manipulate its frequency
        <br />
        to that which he desires to hear and <span className="fancy">feel</span>
        .
        <br />
        <br />
        And when exectued <span className="fancy">correctly</span>,
        <br />
        the resulting <span className="fancy">euphoria</span> is incomparible
        <br />
        to <span className="fancy">any</span> other sensation.
        <br />
        <br />
        The less you <span className="fancy">think</span> and the more you{" "}
        <span className="fancy">feel</span>,
        <br />
        the better you will <span className="fancy">play</span>.
      </p>
      <p className="tekts">
        I will teach you how to experience
        <br />
        the <span className="fancy">joy</span> and{" "}
        <span className="fancy">emotion</span>
        <br />
        in <span className="fancy">every</span> note you play
        <br />
        and <span className="fancy">every</span> sound you create,
        <br />
        <br />
        Which will provide
        <br />
        the necessary encouragement
        <br />
        to practice<span className="fancy">/</span>experiment
        <br />
        <span className="fancy">as often as you can.</span>
        <br />
        <br />
        Remember,
        <span className="fancy"> habits</span> are formed <br />
        through
        <span className="fancy"> repetition</span>.
      </p>
    </div>
  );
};

const Goal = () => {
  return (
    <div className="goal">
      <img src={Set1} alt="set1" />
      <p className="tekts">
        My <span className="fancy">goal</span>
        <br />
        is to reveal the <span className="fancy">euphoria</span>
        <br />
        that <span className="fancy">is</span> the appreciation of{" "}
        <span className="fancy">music</span>,
        <br />
        so my students can experience it{" "}
        <span className="fancy">first-hand</span>
        <br />
        and accumulate their own
        <span className="fancy"> wisdom</span>,<br />
        with the hope that they spread this <span className="fancy">gift</span>
        <br />
        to <span className="fancy">others</span>.
        <br />
        <br />
        You've got a <span className="fancy">lot</span> of emotion inside of
        you,
        <br />
        whether or not you realize it.
        <br />
        Isn't it about time you <span className="fancy">let some out</span>?
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <p className="tekts">
        <span className="fancy">$40</span> per class.
        <br />
        First class is always <span className="fancy">free</span>
        <br />
        <br />I charge per <span className="fancy">class</span>, rather than per{" "}
        <span className="fancy">hour</span>
        <br />
        because each student is <span className="fancy">unique</span>.
        <br />
        <br />
        My class is not over
        <br />
        until what I'm teaching you clicks.
        <br />
        And I know <span className="fancy">exactly</span> how to make that happen!
        <br />
        <br />I currently have a 100%<span className="fancy">
          {" "}
          success
        </span>{" "}
        rate.
        <br />
        <br />
        <br />
      </p>
      <span className="namesies">
        <img src={Me} alt="meme" />
        <br />
        Matthew J. Nolan
        <br />
        Tinley Park, IL
        <br />
        mnolan312@gmail.com
      </span>
    </div>
  );
};

export default App;
