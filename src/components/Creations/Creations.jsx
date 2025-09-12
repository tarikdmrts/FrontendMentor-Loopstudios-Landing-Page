import deepEarth from "../../images/mobile/image-deep-earth.jpg";
import nightArcade from "../../images/mobile/image-night-arcade.jpg";
import soccerTeam from "../../images/mobile/image-soccer-team.jpg";
import theGrid from "../../images/mobile/image-grid.jpg";
import fromUpAbove from "../../images/mobile/image-from-above.jpg";
import pocketBorealis from "../../images/mobile/image-pocket-borealis.jpg";
import theCuriosity from "../../images/mobile/image-curiosity.jpg";
import makeItFisheye from "../../images/mobile/image-fisheye.jpg";
import "./creations.scss";

export default function Creations() {
  return (
    <section className="creations">
      <div className="creations__header">
        <h2 className="creations__title">Our Creations</h2>
      </div>
      <div className="creations__list">
        <div className="creations__item">
          <img src={deepEarth} className="creations__item__image"></img>
          <span className="creations__item__header">Deep Earth</span>
        </div>
        <div className="creations__item">
          <img src={nightArcade} className="creations__item__image"></img>
          <span className="creations__item__header">Night Arcade</span>
        </div>
        <div className="creations__item">
          <img src={soccerTeam} className="creations__item__image"></img>
          <span className="creations__item__header">Soccer Team VR</span>
        </div>
        <div className="creations__item">
          <img src={theGrid} className="creations__item__image"></img>
          <span className="creations__item__header">The</span>
          <span className="creations__item__header grid">Grid</span>
        </div>
        <div className="creations__item">
          <img src={fromUpAbove} className="creations__item__image"></img>
          <span className="creations__item__header">From Up Above VR</span>
        </div>
        <div className="creations__item">
          <img src={pocketBorealis} className="creations__item__image"></img>
          <span className="creations__item__header">Pocket Borealis</span>
        </div>
        <div className="creations__item">
          <img src={theCuriosity} className="creations__item__image"></img>
          <span className="creations__item__header">The Curiosity</span>
        </div>
        <div className="creations__item">
          <img src={makeItFisheye} className="creations__item__image"></img>
          <span className="creations__item__header">Make It Fisheye</span>
        </div>
      </div>
      <button className="creations__button">See All</button>
    </section>
  );
}
