import "./AboutGallery.css";
import galeryphoto1 from "../../assets/Images/AboutGalery1.jpg";
import galeryphoto2 from "../../assets/Images/AboutGalery2.jpg";
import galeryphoto3 from "../../assets/Images/AboutGalery3.jpg";
import galeryphoto4 from "../../assets/Images/AboutGalery4.jpg";
import galeryphoto5 from "../../assets/Images/AboutGalery5.jpg";
import galeryphoto6 from "../../assets/Images/AboutGalery6.jpg";
import galeryphoto7 from "../../assets/Images/AboutGalery7.jpg";

export default function AboutGallery(){
    return(
        <div className="AboutGallery-wrapper">
            <div className="AboutGallery-container">
            <h1>Presentation of our work</h1>
            <div className="Image-container">
            <img src={galeryphoto1} alt="Image1" />
            <img src={galeryphoto2} alt="Image2" />
            <img src={galeryphoto5} alt="Image3" />
            <img src={galeryphoto4} alt="Image4" />
            <img src={galeryphoto3} alt="Image5" />
            <img src={galeryphoto6} alt="Image6" />
            <img src={galeryphoto7} alt="Image7" />

            </div>
            </div>
        </div>
    );
}