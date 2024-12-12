import "./AboutHeader.css";
import Signature_img from '../../assets/Images/Gentlemans_signature.png'
export default function AboutHeader() {
  return (
    <div className="aboutHeader-wrapper">
      <h1>Crafting Confidence Since Day One</h1>
      <p>
        With over 15 years of excellence, Gentlemans Groom is a name that
        stands for quality and style. Founded by three passionate barbers, we have
        built a trusted reputation for combining traditional techniques with
        modern grooming. Here, every cut, shave, and trim is crafted with care,
        making us a staple in the community.
      </p>
      <img src={Signature_img} alt="signature" />
    </div>
  );
}
