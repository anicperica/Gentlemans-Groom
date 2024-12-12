import Barber from "../Barber/Barber";
import "./AboutBarbers.css";
import barber1 from "../../assets/Images/team1.png";
import barber2 from "../../assets/Images/team2.png";
import barber3 from "../../assets/Images/team3.png";

export default function AboutBarbers() {
  return (
    <div className="aboutBarbers-Wrapper">
      <div className="aboutBarbers-container">
        <div className="aboutBarbers-img">
          <Barber
            imageSource={barber1}
            description="barber1"
            name="Damon Blackwood"
          />
          <Barber
            imageSource={barber2}
            description="barber2"
            name="Jaxon Steele"
          />
          <Barber
            imageSource={barber3}
            description="barber3"
            name="Zane Cross"
          />
        </div>
        
      </div>
    </div>
  );
}
