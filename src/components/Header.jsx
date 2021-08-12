import Intro from "./header/Intro.jsx";
import Logo from "./header/Logo.jsx";
import Slide from "./header/Slide.jsx";

const Header = () => {
  return (
    <header className="App-header">
      <Logo />
      <Intro />
      <Slide />
    </header>
  );
};

export default Header
