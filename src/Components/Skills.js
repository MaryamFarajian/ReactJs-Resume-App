// import useFetch from "../useFetch";

const Skills = () => {
  // const { data, isPending, error } = useFetch("http://localhost:8888/skill");
  const json_data = require("../db.json");
  const data = json_data.skills;
  const error = null;
  const isPending = false;
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h1 className="pb-2 border-bottom" id="skills">
        Skills
      </h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {error && <div>{error}</div>}
        {isPending && <div>Loading ... </div>}
        {data &&
          data.map((value, index) => {
            return (
              <div className="col d-flex align-items-start" key={value.id}>
                <div>
                  <h4 className="fw-bold mb-0">{value.name}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
