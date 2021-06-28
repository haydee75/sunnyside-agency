import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <h5>CLIENT TESTIMONIALS</h5>
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="picture first"></div>
              <p className="text">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <span className="author">Emily R.</span>
              <span className="role">Marketing Director</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="picture second"></div>
              <p className="text">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <span className="author">Thomas S.</span>
              <span className="role">Chief Operating Officer</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="picture third"></div>
              <p className="text">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <span className="author">Jennie F.</span>
              <span className="role">Business Owner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
