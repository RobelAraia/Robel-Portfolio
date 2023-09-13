import Typewriter from "./TypeWriter";
import "./_Intro.scss";

const Intro = () => (
  <div className="intro-container">
    <Typewriter className="intro-title" text="Robel Araia" />
    <div className="intro-description">
    Hello, I'm Robel, currently in transition and eager to embark on a new professional journey.
    I have a strong interest in software engineering and cloud technologies, and I'm actively seeking opportunities in these fields.
    My dedication to continuous learning and exploration fuels my passion for acquiring new skills and making a meaningful impact in the tech industry.
    </div>
  </div>
);

export default Intro;
