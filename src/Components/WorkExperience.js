// import useFetch from "../useFetch";

const WorkExperience = () => {
  // const { data, isPending, error } = useFetch("http://localhost:8888/work-experience");
  const json_data = require("../db.json");
  const data = json_data.work_experiences;
  const error = null;
  const isPending = false;

  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <h1 className="pb-2 border-bottom" id="work-experiences">
        Work Experiences
      </h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ... </div>}
      {data &&
        data.map((value, index) => {
          return (
            <div className="col d-flex align-items-start pt-3" key={value.id}>
              <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-4">
                <i className="bi bi-gear"></i>
              </div>
              <div>
                <h4>{value.job_title}</h4>
                <p className="text-muted">
                  {value.started_date} - {value.ended_date} , {value.company}
                </p>
                <p className="lead">{value.description} </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkExperience;
