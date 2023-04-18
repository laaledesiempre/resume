import { experience } from "../../../data/data";
export const Experiences = () => {

  return (
    <section className="main-experiences">
      <h3 className="main title">Experience</h3>
      <div className="experience-wrapper">
        {experience.map((e,i)=>{
          return<div className="experience-item" key={i}>
           <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="exp-icon"
                  width="1rem"
                  height="1rem"
                >
                  {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d={e.path} />
                </svg>
            <h3 className="experience-name">{e.name}</h3>
            <p className="experience-summary">{e.summary}</p>
            <ul className="experiences-token-wrapper">
              {e.tokens.map((e)=>{
                return<>
                <li key={e} className="experience-token">{e}</li>
                </>
              })}
            </ul>
          </div>
        })}
      </div>
    </section>
  )
}
