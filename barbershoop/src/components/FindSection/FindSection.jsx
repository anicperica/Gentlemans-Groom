import "./FindSection.css";
import MapSection from "../MapSection/MapSection";
import PingIcon from '../../assets/Images/placeholder.png';
import CallIcon from '../../assets/Images/call.png';
import ClockIcon from '../../assets/Images/clock.png';
export default function FindSection() {
  return (
    <div className="find_wrapper">
      <div className="find_heading">
        <h1>DO YOURSELF A FAVOR</h1>
        <span>
          And take a moment to unwind with a professional grooming experience.
          Let our skilled barbers redefine your style and boost your confidence,
        </span>
        <span>
          leaving you looking sharp and feeling refreshed. It is more than a
          haircut; it is a chance to invest in yourself
        </span>
      </div>
      <div className="Map_section">
        <div className="Map_section_text">
          <h1>Visit us Today</h1>
          <span>
            We are just around the corner, ready to provide you with top notch
            grooming services. Stop by or give us a call to schedule an
            appointment. We look forward to welcoming you
          </span>
          <div className="Map_section_info">
            <img src={PingIcon} alt="PingIcon" />
            <p>89 E 32nd St. at Park Avenue.</p>
          </div>
          <div className="Map_section_info">
            <img src={CallIcon} alt="CallIcon" />
            <p>655 555 3890</p>
          </div>
          <div className="Map_section_info">
            <img src={ClockIcon} alt="clockIcon" />
            <div className="text">
            <p>Monday  9 to 8</p>
            <p>Tuesday  9 to 8</p>
            <p>wednesday  9 to 8</p>
            <p>Thursday  9 to 8</p>
            <p>Friday  9 to 6</p>
            <p>Saturday  9 to 3</p>
            <p>Sunday  Closed</p>
            </div>
          </div>
        </div>
        <div className="find_map">
          <MapSection />
        </div>
      </div>
    </div>
  );
}
