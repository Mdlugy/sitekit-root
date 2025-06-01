import styles from "./Nav_Sticky_Logo.modules.css";
export default function Nav_Sticky_Logo({ content, theme }) {

  const {Logo, links} = content;
  return (
    <nav styles={theme} className="nav-sticky">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo.url} alt={Logo.alt || "Logo"} className="nav-logo-image" />
        </div>
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.target} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


