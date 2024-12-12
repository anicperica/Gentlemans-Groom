import "./HomeSection_Service.css";
import Scissors from "../../assets/Images/scissors.svg";
import HairMachine from "../../assets/Images/hair-clipper.svg";
import HomeService_display from "../HomeService_display/HomeService_display";
import RazorImg from "../../assets/Images/razor-barber.svg";
export default function HomeSection_Service() {
  return (
    <div className="home_section_service">
      <div className="home_section_service-wrapper">
        <div className="home_section_service-text">
          <h1>What we provide for our customer</h1>
          <p>
            From precision haircuts to relaxing shaves, we offer a full range of
            services designed to make you look and feel your best. Our skilled
            barbers are here to ensure that every visit is more than just a
            grooming session it is an experience.
          </p>
        </div>
      </div>
      <div className="Service-wrapper">
        <HomeService_display
          imgSource={HairMachine}
          imgDescription="hair-clipper"
          heading="Beard Triming"
          description="Maintaining a well  groomed beard requires regular trimming and proper care to keep it looking sharp and healthy. Our expert barbers specialize in beard styling."
          style="wrapper"
          style2="service_button"
          butName="Book Now"
        />
        <HomeService_display
          imgSource={Scissors}
          imgDescription="scissors"
          heading="Hair Cut"
          description="Expert haircuts tailored to your style, ensuring a sharp and fresh look every time. Our barbers focus on precision and detail to deliver a personalized grooming experience."
          style="wrapper"
          style2="service_button"
          butName="Book Now"
        />
        <HomeService_display
          imgSource={RazorImg}
          imgDescription="Razor"
          heading="Clean Shave"
          description="Experience a smooth, clean shave with expert precision, leaving your skin refreshed and razor-burn free. Perfect for a polished, timeless look."
          style="wrapper"
          style2="service_button"
          butName="Book Now"
        />
      </div>
    </div>
  );
}
