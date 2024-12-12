import "./Foter.css";
import { GiBeard} from "react-icons/gi";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";
import AboutPage from '../../pages/AboutPage/AboutPage';
export default function Foter() {
  const companyItems = [
    { name: "About us",  path: "/about" },
    { name: "Our Services", Path: "./service" },
    { name: "Privacy Policy", Path: "./Policy" },
    { name: "Find Us", Path: "./find" },
  ];

  const helpItems = [
    { name: "FAQ", path: "/faq" },
    { name: "Payment Options", path: "/payment" },
    { name: "Customer Suport", path: "/customersup" },
  ];
  const ResourcesItmes = [
    { name: "Blog", path: "/blog" },
    { name: "News and Upadtes", path: "/news" },
    { name: "Comunity Forum", path: "/forum" },
  ];
  const ConnectItems = [
    { name: "Facebook", path: "https://www.facebook.com/?locale=hr_HR" ,icon:<CiFacebook />},
    { name: "Instagram", path: "https://www.instagram.com/",icon:<AiFillInstagram /> },
    { name: "Twitter", path: "https://x.com/?mx=2",icon:<FaTwitter /> },
    { name: "Tik Tok", path: "https://www.tiktok.com/",icon:<FaTiktok  /> },
  ];

  return (
    <div className="foter_wrapper">
      <GiBeard style={{ fontSize: "250px", color: "white"}} />
      <FooterSection title="Company" items={companyItems} />
      <FooterSection title="Help" items={helpItems} />
      <FooterSection title="Resources" items={ResourcesItmes} />
      <FooterSection title="Follow Us" items={ConnectItems} />
    </div>
  );
}
