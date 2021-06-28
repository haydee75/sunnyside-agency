import "./TextImgContainer.scss";

const ImgContainer = (props) => {
  return (
    <div className="ImgContainer">
      <div className="box">
        <div className="image first">
          <div className="content">
            <h4>{props.title1}</h4>
            <p>{props.content1}</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="image second">
          <div className="content">
            <h4>{props.title2}</h4>
            <p>{props.content2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
