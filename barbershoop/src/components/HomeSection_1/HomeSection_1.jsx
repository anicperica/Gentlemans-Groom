import "./HomeSection_1.css";
import introductionImage from "../../assets/Images/BarberChair.jpg";
import Button from "../Button/Button";
export default function HomeSection_1() {
  return (
    <div className="home_section">
      <div className="introduction_section">
        <img src={introductionImage} alt="Image" />
        <div className="introduction_text">
          <h1>
            We Respect The<br></br> Heritage of Classic Barbering
          </h1>
          <h2>Heritage Meets Style</h2>
          <span>
            At Gentlemens Groom, we honor the timeless craft of traditional
            barbering while bringing modern expertise to every cut and shave.
            Since our founding, we have been dedicated to providing the highest
            quality grooming services to our discerning clients. Each visit is
            not just a haircut but an experience steeped in the classic
            techniques of barbering. Our barbers take pride in the details: the
            precision of every fade, the straightness of every neckline, and the
            sharpness of every razor stroke. It is this attention to detail that
            sets us apart, making each client feel not only well groomed but
            truly valued.
          </span>
          <Button style='homeSection_button' name='Learn More'/>
        </div>
      </div>
    </div>
  );
}
