import { aboutMe, abouts } from "../../../data/data";
export const About = () => {
  return (
    <>
      <section className="main-about-me">
        <div className="about-me">
          <h3 className="main-title">About Me</h3>
          <p className="about-me-text">{aboutMe}</p>
        </div>
        <div className="about-wrapper">
          {abouts.map((e) => {
            return (
              <article key={e.name} className="main-abouts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="about-icon"
                  width="1rem"
                  height="1rem"
                >
                  {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d={e.path} />
                </svg>
                <h3 className="abouts-title">{e.name}</h3>
                <p className="abouts-text">{e.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
