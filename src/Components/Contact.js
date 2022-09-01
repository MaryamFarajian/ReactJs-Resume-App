const Contact = () => {
  return (
    <div>
      <h1 className="pb-2 border-bottom">Contact</h1>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5">
            <h2>Reach ME</h2>
            <p>you can reach me using other social media platforms such as:</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5">
            <form
              action="mailto:bigdeli.ali3@gmail.com"
              method="get"
              enctype="text/plain"
            >
              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="textarea">Body</label>
                <textarea
                  id="textarea"
                  name="textarea"
                  cols="40"
                  rows="5"
                  aria-describedby="textareaHelpBlock"
                  className="form-control"
                ></textarea>
                <span id="textareaHelpBlock" className="form-text text-muted">
                  share your thoughts
                </span>
              </div>

              <div className="form-group">
                <button className="btn btn-dark btn-lg" type="submit">
                  Send
                </button>
                <button
                  className="btn btn-secondary btn-lg"
                  type="reset"
                  name="reset"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
