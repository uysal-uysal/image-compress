import './App.css';
import './css/framework.css';
import './css/framework.min.css';
import './css/style.css';
import './css/style.min.css';
import logo from './img/comp-image.png';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


function App() {
  return (
    <div className="App">

      {/*mobile nav*/}
      <a href="#" className="open_menu bg-light radius_full">
        <i className="fas fa-bars lh-40"> </i>
      </a>
      <div className="navigation_mobile bg-dark type1">
        <a href="#" className="close_menu color-white">
          <i className="fas fa-times"> </i>
        </a>
        <div className="px-40 pt-60 pb-60 inner">
          <a href="#" className="mb-30 link img_link">
            <img src={require("./img/comp-image.png")} alt="logo" />
          </a>
          <div>
            <a href="#" className="f-heading f-22 link color-white mb-20"> Home </a>
          </div>
          <div>
            <a href="#" className="link color-white op-3 mb-15"> About Us </a>
          </div>
          <div className="socials mt-40">
            <a
              href="https://www.linkedin.com/in/uysal-uysal/"
              target="_blank"
              className="link color-white f-18 mr-20"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/uysal-uysal/"
              target="_blank"
              className="link color-white f-18 mr-20"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/*header*/}
      <header className="pt-195 pb-110 bg-light header_1">
        <nav className="header_menu_1 pt-30 pb-30 mt-30">
          <div className="container px-xl-0">
            <div
              className="row justify-content-center align-items-center f-18 medium"
            >
              <div className="col-lg-3">

              </div>
              <div
                className="col-lg-6 text-center"
                data-aos="fade-down"
                data-aos-delay="750"
              >
                <a href="#" className="link color-heading mx-15"> Image Compress? </a>
                <a href="#" className="link color-heading mx-15"> 'png'? </a>
                <a href="#" className="link color-heading mx-15"> 'jpeg'? </a>

              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-end align-items-center"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                <a href="#" className="link mr-15 color-main"> Contacts </a>
                <a
                  href="https://www.linkedin.com/in/uysal-uysal/"
                  className="mx-15 link color-main"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/uysal-uysal/"
                  className="mx-15 link color-main"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="big text-center" data-aos="fade-down" data-aos-delay="0">
            Startup Framework
        </h1>
          <div
            className="mw-600 mx-auto mt-30 f-22 color-heading text-center text-adaptive"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            We made it so beautiful and simple. It combines landings, pages, blogs
            and shop screens. It is definitely the tool you need in your
            collection!
        </div>
          <div
            className="mt-80 text-center buttons"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div>
              <label className="btn lg action-1">
                <i className="fa fa-image"></i> Select Image<input
                  type="file"
                  style={{ display: 'none' }}
                  name="image"
                />
              </label>
            </div>
          </div>
        </div>
      </header>

      {/*why we need to comp image */}
      <section className="pt-105 pb-95 bg-light content_2">
        <div className="container px-xl-0 text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <h2 data-aos="fade-down" data-aos-delay="0">
                Why we need to Compress Image?
            </h2>
            </div>
            <div className="col-xl-7 col-lg-9 col-md-10">
              <div
                className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                We have created a new product that will help designers, developers
                and companies create websites for their startups quickly and
                easily.
            </div>
            </div>
          </div>
        </div>
      </section>

      {/*png? */}
      <section className="pt-105 pb-95 bg-light content_2">
        <div className="container px-xl-0 text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <h2 data-aos="fade-down" data-aos-delay="0">What is the 'png'?</h2>
            </div>
            <div className="col-xl-7 col-lg-9 col-md-10">
              <div
                className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                We have created a new product that will help designers, developers
                and companies create websites for their startups quickly and
                easily.
            </div>
            </div>
          </div>
        </div>
      </section>

      {/*jpeg? */}
      <section className="pt-105 pb-95 bg-light content_2">
        <div className="container px-xl-0 text-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <h2 data-aos="fade-down" data-aos-delay="0">What is the 'jpeg'?</h2>
            </div>
            <div className="col-xl-7 col-lg-9 col-md-10">
              <div
                className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                We have created a new product that will help designers, developers
                and companies create websites for their startups quickly and
                easily.
            </div>
            </div>
          </div>
        </div>
      </section>

      {/*footer 
      <footer className="pt-75 pb-65 bg-light text-center footer_1">
      <div className="container px-xl-0">
        <div className="row justify-content-between align-items-center lh-40 links">
          <div
            className="col-lg-4 col-sm-6 text-sm-left text-lg-right order-2 order-lg-0"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <a href="#" className="link mr-15 color-main"> Footer </a>
          </div>
        </div>
      </div>
    </footer>
    */}



      {/*bootstrap */}
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
      {/*slick sliders */}
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      ></script>
      {/*aos animation */}
      <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    </div>
  );
}

export default App;
