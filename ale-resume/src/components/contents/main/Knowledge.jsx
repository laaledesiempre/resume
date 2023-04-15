import { languages } from "../../../data/data";
export const Knowledge = () => {
  const meter = (num) => {
    let meter = [];

    for (let i = 1; i <= 10; i++) {
      console.log(i);
      i <= num
        ? meter.push(
            <div key={i} className="meter-item-full">
              f
            </div>
          )
        : meter.push(
            <div key={i} className="meter-item-empty">
              e
            </div>
          );
    }
    console.log(meter);
    return <div className="meter-wrapper">{meter}</div>;
  };
  return (
    <>
      <section className="main-knowledge">
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
    </>
  );
};
