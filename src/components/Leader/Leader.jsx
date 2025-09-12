import "./leader.scss";
import leaderImage from "../../images/desktop/image-interactive.jpg";

export default function Leader() {
  return (
    <section className="leader">
      <div className="leader__content">
        <div className="leader__image">
          <img src={leaderImage} alt="Playing VR" />
        </div>
        <div className="leader__description">
          <h2 className="leader__title">The leader in interactive VR</h2>
          <p className="leader__text">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
