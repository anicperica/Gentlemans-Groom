import './AboutPage.css';
import Navbar from '../../components/navbar/Navbar';
import AboutHeader from '../../components/AboutHeader/AboutHeader';
import AboutBarbers from '../../components/AboutBarbers/AboutBarbers';
import AboutGallery from '../../components/AboutGallery/AboutGallery';
import Foter from "../../components/Foter/Foter";
export default function AboutPage(){
    return(
        <>
        <div className='aboutHeader_wrapper'>  
            <Navbar/>
            <AboutHeader/>
        </div>
        <AboutBarbers/>
        <AboutGallery/>
        <Foter/>
        </>
    );
}