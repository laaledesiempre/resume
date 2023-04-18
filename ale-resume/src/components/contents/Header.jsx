import { contacts, generalDescription } from "../../data/data";
export const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <img
            src="#"
            alt="a curly hair brown person smiling"
            className="head-banner"
          />
          {/* Change later */}
          <h1 className="head-name">Fernando (Ale) Pajón</h1>
          <h3 className="head-pronouns">She/Her</h3>
          <ul className="contact-container">
            {contacts.map((e) => {
              return (
                <li key={e.name} className="contact-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="contact-icon"
                    
                  >
                    {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d={e.path} />
                  </svg>
                  <a href={e.contact} className="contact-name">
                    {e.name}
                  </a>
                </li>
              );
            })}
            <h2 className="head-general-description">{generalDescription}</h2>
          </ul>
        </div>
      </header>
    </>
  );
};
