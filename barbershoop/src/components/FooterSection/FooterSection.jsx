import "./FooterSection.css";
import { Link } from "react-router-dom";

export default function FooterSection({ title, items }) {
    return (
      <div className="footer_section_wrapper">
        <h3>{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                {item.icon && <span className="icon" style={{ marginRight: '8px'} }>{item.icon}</span>}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
