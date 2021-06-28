import "./App.scss";
import Header from "./component/Header/Header";
import TextImgContainer from "./component/TextImgContainer/TextImgContainer";
import ImgContainer from "./component/TextImgContainer/ImgContainer";
import Testimonial from "./component/Testimonial/Testimonial";
import FlexiImg from "./component/FlexiImg/FlexiImg";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TextImgContainer
        direction="left"
        title="Transform your brand"
        content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        link="LEARN MORE"
      />
      <TextImgContainer
        direction="right"
        title="Stand out to the right audience"
        content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        link="LEARN MORE"
      />
      <ImgContainer
        title1="Graphic Design"
        content1="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        title2="Photography"
        content2="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
      <Testimonial />
      <FlexiImg />
      <Footer />
    </div>
  );
};

export default App;
