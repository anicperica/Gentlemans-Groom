import "./Barber.css";
import signatureImg from "../../assets/Images/team_bg.png";

export default function Barber({ imageSource, description, name ,text}) {
  return (
    
    <div className="barber-wrapper">
      <img className="barber-img" src={imageSource} alt={description} />
    
      <div className="barber-container">
      <p className="barber-name">{name}</p>
      <img className="barberSignature" src={signatureImg} alt="signature" />
      </div>
    </div>
    
    
  );
}
