import deepEarthMobile from "../../images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../../images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "../../images/mobile/image-soccer-team.jpg";
import theGridMobile from "../../images/mobile/image-grid.jpg";
import fromUpAboveMobile from "../../images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "../../images/mobile/image-pocket-borealis.jpg";
import theCuriosityMobile from "../../images/mobile/image-curiosity.jpg";
import makeItFisheyeMobile from "../../images/mobile/image-fisheye.jpg";

import deepEarthDesktop from "../../images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "../../images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "../../images/desktop/image-soccer-team.jpg";
import theGridDesktop from "../../images/desktop/image-grid.jpg";
import fromUpAboveDesktop from "../../images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "../../images/desktop/image-pocket-borealis.jpg";
import theCuriosityDesktop from "../../images/desktop/image-curiosity.jpg";
import makeItFisheyeDesktop from "../../images/desktop/image-fisheye.jpg";

import "./creations.scss";

export default function Creations() {
  return (
    <section className="creations">
      <div className="creations__header">
        <h2 className="creations__title">Our Creations</h2>
      </div>
      <div className="creations__list">
        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={deepEarthDesktop} />
            <img
              src={deepEarthMobile}
              className="creations__item__image"
              alt="Deep Earth"
            />
          </picture>
          <span className="creations__item__header">Deep Earth</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={nightArcadeDesktop} />
            <img
              src={nightArcadeMobile}
              className="creations__item__image"
              alt="Night Arcade"
            />
          </picture>
          <span className="creations__item__header">Night Arcade</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={soccerTeamDesktop} />
            <img
              src={soccerTeamMobile}
              className="creations__item__image"
              alt="Soccer Team VR"
            />
          </picture>
          <span className="creations__item__header">Soccer Team VR</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={theGridDesktop} />
            <img
              src={theGridMobile}
              className="creations__item__image"
              alt="The Grid"
            />
          </picture>
          <span className="creations__item__header grid">The Grid</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={fromUpAboveDesktop} />
            <img
              src={fromUpAboveMobile}
              className="creations__item__image"
              alt="From Up Above VR"
            />
          </picture>
          <span className="creations__item__header">From Up Above VR</span>
        </div>

        <div className="creations__item">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={pocketBorealisDesktop}
            />
            <img
              src={pocketBorealisMobile}
              className="creations__item__image"
              alt="Pocket Borealis"
            />
          </picture>
          <span className="creations__item__header">Pocket Borealis</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={theCuriosityDesktop} />
            <img
              src={theCuriosityMobile}
              className="creations__item__image"
              alt="The Curiosity"
            />
          </picture>
          <span className="creations__item__header">The Curiosity</span>
        </div>

        <div className="creations__item">
          <picture>
            <source media="(min-width: 1024px)" srcSet={makeItFisheyeDesktop} />
            <img
              src={makeItFisheyeMobile}
              className="creations__item__image"
              alt="Make It Fisheye"
            />
          </picture>
          <span className="creations__item__header">Make It Fisheye</span>
        </div>
      </div>
      <div className="creations__button-container">
        <button className="creations__button">See All</button>
      </div>
    </section>
  );
}
