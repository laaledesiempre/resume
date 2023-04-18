import { languages, technologies, certifications } from "../../../data/data";
export const Knowledge = () => {
  const meter = (num) => {
    let meter = [];

    for (let i = 1; i <= 10; i++) {
      console.log(i);
      i <= num
        ? meter.push(
            <div key={i} className="meter-item-full">
              {" "}
            </div>
          )
        : meter.push(
            <div key={i} className="meter-item-empty">
              {" "}
            </div>
          );
    }
    console.log(meter);
    return <div className="meter-wrapper">{meter}</div>;
  };
  return (
    <>
      <section className="main-knowledge">
        <section className="knowledge-languages">
        <h3 className="main-title">Languages</h3>
        <div className="languages-wrapper">
          {languages.map((e) => {
            return (
              <div key={e.name} className="languages-item">
                <h5 className="language-name">{e.name}</h5>
                <h6 className="languaje-level">{e.level}</h6>
              </div>
            );
          })}
        </div>
      </section>
        <section className="knowledge-techonologies">
        <h3 className="main-title">Technologies</h3>
        <div className="technologies-items-wrapper">
          {technologies.map((e)=>{
            return<div className="technologies-items" key={e.name}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="tech-icon"
                  width="1rem"
                  height="1rem"
                >
                  {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d={e.path} />
                </svg>
                <h3 className="abouts-title">{e.name}</h3>
                {meter(e.meter)}
            </div>
          })}
        </div>
        </section>
        <section className="knowledge-certifications">
        <h3 className="main-title">Certifications</h3>
        <div className="certifications-wrapper">
          {certifications.map((e)=>{
            return<div className="certification-item" key={e.name}>
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="certification-icon"
                  width="1rem"
                  height="1rem"
                >
                  {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d={e.path} />
                </svg>
                <h4 className="certification">{e.name}</h4>
                <h5 className="certification-status">{e.status}</h5>
                <p className="certification-content">{e.content}</p>
            </div>
          })}
        </div>
        </section>
      </section>
    </>
  );
};
