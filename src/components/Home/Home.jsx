import Navbar from "../Navbar/Navbar";
import './Home.scss';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home__bg"></div>
        <div className="home__content">
          <h1 className="home__title">Immersive experiences that deliver</h1>
        </div>
      </section>
    </>
  );
}
