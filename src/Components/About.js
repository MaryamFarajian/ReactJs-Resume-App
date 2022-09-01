// import useFetch from "../useFetch";

const About = () => {
  // const { data, isPending, error } = useFetch("http://localhost:8888/profile");
  const json_data = require("../db.json");
  const data = json_data.profile;
  const error = null;
  const isPending = false;
  if (error) {
    return <div>{error}</div>
  }
  if (isPending) {
    return <div>Loading ... </div>;
  } else {
    return (
      <section className="py-3 text-center container">
        <img
          src={data.avatar}
          className="about-avatar shadow-lg p-1"
          alt={data.first_name} 
        ></img>
        <div className="row py-lg-5">
          <div className="col-lg-9 col-md-8 mx-auto">
            <h1>{data.first_name} {data.last_name}</h1>
            <h4 className="fw-light">{data.job_title}</h4>
            <p className="lead text-muted">{data.about}</p>
          </div>
        </div>
      </section>
    );
  }
};

export default About;
