import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
  return (
   
    <div className="header_heading_h1">
      <h1>Refined Grooming for the Modern Gentleman</h1>
      <h3 className="header_heading_1_1">
        ...or, as we like to think of it, the ultimate treat for yourself.  
      </h3>
      
    <Button style="header_button" name="Book Now"/>
    <h3 className="header_heading_1_2">Unless you just booked a trip to paradise. Then we might be in the top
    three </h3>
    </div>
  
  );
}
