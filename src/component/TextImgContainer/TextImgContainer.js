import "./TextImgContainer.scss";

const TextImgContainer = (props) => {
  return (
    <div className={`TextImgContainer direction-${props.direction}`}>
      <div className="content-box">
        <div className="box">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <a className="link secondary">{props.link}</a>
        </div>
      </div>
      <div className="image-box">
        <div className="image"></div>
      </div>
    </div>
  );
};

export default TextImgContainer;
