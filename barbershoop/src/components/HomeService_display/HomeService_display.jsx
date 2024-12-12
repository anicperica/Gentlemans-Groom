import "./HomeService_display.css";
import Button from "../Button/Button";
export default function HomeService_display({
  imgSource,
  imgDescription,
  heading,
  description,
  style,
  style2,
  butName,
}) {
  return (
    <div className={style}>
      <img src={imgSource} alt={imgDescription} />
      <h2>{heading}</h2>
      <p>{description}</p>
      <Button name={butName} style={style2} />
    </div>
  );
}
