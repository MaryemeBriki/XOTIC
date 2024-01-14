import { useCallback } from "react";
import { Link } from "gatsby";
import "./Branche.css";

const Filliere = () => {
  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Informatique" to the project
    console.log("Sync Informatique to the project");

  }, []);

  return (
    <div className="filliere">
     
      <div className="bguni-2" />
      <div className="footer">
        <img className="social-icons" alt="" src="/social-icons.svg" />
        <img className="social-icons1" alt="" src="/social-icons.svg" />
        <img className="social-icons2" alt="" src="/social-icons.svg" />
        <img className="social-icons3" alt="" src="/social-icons.svg" />
        <div className="copyright-best-container">
          <span>Copyright ©</span>
          <span className="best-developer"> Best Developer</span>
        </div>
      </div>
      <img className="filliere-child" alt="" src="/rectangle-4163@2x.png" />
      <div className="home-">
        <b className="home">Home</b>
      </div>
      <div className="home-wrapper">
        <b className="home">{`About us `}</b>
      </div>
      <div className="islamique-wrapper">
        <div className="islamique">Islamique</div>
      </div>
      <div className="home-container">
        <b className="home2">{` Contact us  `}</b>
      </div>
      <div className="histoire-geo-wrapper">
        <div className="islamique">Histoire-Geo</div>
      </div>
      <div className="mathematique-wrapper">
        <div className="islamique">Mathematique</div>
      </div>
      <div className="physique-parent">
        <div className="islamique">Physique</div>
        <div className="islamique">Physique</div>
      </div>
      <div className="les-langues-wrapper">
        <div className="les-langues">Les langues</div>
      </div>
      <div className="phylosophie-wrapper">
        <div className="islamique">Phylosophie</div>
      </div>
      <div className="svt-wrapper">
        <div className="svt">SVT</div>
      </div>
      <div className="informatique-wrapper" onClick={onFrameContainer9Click}>
        <div className="islamique"> Informatique</div>
      </div>
      <div className="login-wrapper">
        <b className="login">LOGIN</b>
      </div>
    </div>
  );
};

export default Filliere;
