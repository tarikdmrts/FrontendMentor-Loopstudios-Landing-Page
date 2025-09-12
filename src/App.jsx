import Home from "./components/Home/Home";
import Leader from "./components/Leader/Leader";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import './styles/main.scss';

export default function App() {
  return <>
    <Home />
    <Leader />
    <Creations />
    <Footer />
  </>;
}
