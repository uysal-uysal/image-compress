import "./App.css";
import "./css/framework.css";
import "./css/framework.min.css";
import "./css/style.css";
import "./css/style.min.css";
import logo from "./img/comp-image.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaImage,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./script";

import React from "react";
import "./App.css";
import imageCompression from "browser-image-compression";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.compressImage = this.compressImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1024,
      webWorker: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
      mainThread: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
    };
  }

  handleChange(target) {
    return (e) => {
      this.setState({ [target]: e.currentTarget.value });
    };
  }

  onProgress(p, useWebWorker) {
    const targetName = useWebWorker ? "webWorker" : "mainThread";
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        progress: p,
      },
    }));
  }

  async compressImage(event, useWebWorker) {
    const file = event.target.files[0];
    console.log("input", file);
    console.log(
      "ExifOrientation",
      await imageCompression.getExifOrientation(file)
    );
    const targetName = useWebWorker ? "webWorker" : "mainThread";
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      },
    }));
    var options = {
      maxSizeMB: this.state.maxSizeMB,
      maxWidthOrHeight: this.state.maxWidthOrHeight,
      useWebWorker,
      onProgress: (p) => this.onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);
    console.log("output", output);
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      },
    }));
  }

  render() {
    const { webWorker, mainThread, maxSizeMB, maxWidthOrHeight } = this.state;
    return (
      <div className="App">
        <div>
          {/*mobile nav*/}
          <a href="#" className="open_menu bg-light radius_full">
            <FaBars className="lh-40" />
          </a>
          <div className="navigation_mobile bg-dark type1">
            <a href="#" className="close_menu color-white">
              <FaTimes />
            </a>
            <div className="px-40 pt-60 pb-60 inner">
              <a href="#" className="mb-30 link img_link">
                <img src={logo} alt="Logo" style={{ width: "125px" }} />
              </a>
              <div>
                <a
                  href="#"
                  className="openmenu-item f-heading f-22 link color-white mb-20"
                >
                  {" "}
                  Home{" "}
                </a>
              </div>
              <div>
                <a
                  href="#image-comp"
                  className="openmenu-item f-heading f-18 link color-white mb-20"
                >
                  {" "}
                  Image Compress?{" "}
                </a>
              </div>
              <div>
                <a
                  href="#png"
                  className="openmenu-item f-heading f-18 link color-white mb-20"
                >
                  {" "}
                  'png'?{" "}
                </a>
              </div>
              <div>
                <a
                  href="#jpeg"
                  className="openmenu-item f-heading f-18 link color-white mb-20"
                >
                  {" "}
                  'jpeg'?{" "}
                </a>
              </div>
              <div>
                <a
                  href="#links"
                  className="openmenu-item f-heading f-18 link color-white mb-20"
                >
                  {" "}
                  İlgili Linkler{" "}
                </a>
              </div>

              <div className="openmenu-item socials mt-40">
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
                <div className="row justify-content-center align-items-center f-18 medium">
                  <div
                    class="col-lg-3"
                    data-aos="fade-down"
                    data-aos-delay="750"
                  >
                    <a href="" class="link img_link">
                      <img src={logo} alt="Logo" style={{ width: "125px" }} />
                    </a>
                  </div>
                  <div
                    className="col-lg-6 text-center"
                    data-aos="fade-down"
                    data-aos-delay="750"
                  >
                    <a href="#image-comp" className="link color-heading mx-15">
                      {" "}
                      Image Compress?{" "}
                    </a>
                    <a href="#png" className="link color-heading mx-15">
                      {" "}
                      'png'?{" "}
                    </a>
                    <a href="#jpeg" className="link color-heading mx-15">
                      {" "}
                      'jpeg'?{" "}
                    </a>
                    <a
                      href="#links"
                      className="link color-heading mx-15"
                    >
                      {" "}
                      İlgili Linkler{" "}
                    </a>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-end align-items-center"
                    data-aos="fade-down"
                    data-aos-delay="1000"
                  >
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

            {/*why we need to comp image */}
            <div className="container">
              <h1
                className="big text-center"
                data-aos="fade-down"
                data-aos-delay="0"
              >
                Görüntü Sıkıştırmaya Neden İhtiyacımız Var?
              </h1>
              <div
                className="mw-600 mx-auto mt-30 f-20 medium op-7 color-heading text-center text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                Görüntü Sıkıştırma bizlere, depolama ve zamandan tasarruf etme
                imkanı sağlar.
              </div>
              <div
                className="mw-600 mx-auto mt-30 f-20 medium op-7 color-heading text-center text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                Sıkıştırılmış bir görüntü daha küçüktür. Yani hafızanız, 10 ham
                (sıkıştırılmamış) görüntü veya genel olarak 100 sıkıştırılmış
                görüntü tutabilir.
              </div>
              <div
                className="mw-600 mx-auto mt-30 f-20 medium op-7 color-heading text-center text-adaptive"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                Bununla da kalmayıp örneğin bir e-posta gönderiyorsanız, görüntü
                boyutunu azaltmak yani görüntüyü sıkıştırmak işinizde size hız
                sağlayacaktır.
              </div>

              {/*Select Image Button */}
              <div>
                <div>
                  <label className="btn lg action-1 mt-30" htmlFor="web-worker">
                    <FaImage />
                    Select Image{" "}
                    <input
                      style={{ display: "none" }}
                      id="web-worker"
                      type="file"
                      accept="image/*"
                      onChange={(e) => this.compressImage(e, true)}
                    />
                  </label>
                  <p className="mw-600 mx-auto mt-30 f-20 medium op-7 color-heading text-center text-adaptive">
                    {webWorker.inputSize && (
                      <span>Source image size: {webWorker.inputSize} mb</span>
                    )}
                    {webWorker.outputSize && (
                      <span>, Output image size: {webWorker.outputSize}</span>
                    )}
                  </p>
                  <label>
                    {webWorker.progress && (
                      <span className="mw-600 mx-auto mt-30 f-14 medium op-7 color-heading text-center text-adaptive">
                        {webWorker.progress} %
                      </span>
                    )}
                  </label>
                </div>

                {/*preview original and compressed images*/}
                {webWorker.inputUrl && (
                  <table className="row justify-content-center mw-600 mx-auto mt-30">
                    <thead>
                      <tr className="mw-600 mt-30 mb-30 f-16 medium op-7 color-heading text-center text-adaptive">
                        <td>input preview</td>
                        <td>output preview</td>
                      </tr>
                    </thead>
                    <br />
                    <tbody>
                    <tr >
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={webWorker.inputUrl} style={{ height: "1024px" }} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={webWorker.outputUrl} style={{ height: "1024px" }} alt="Image two" />}
                      />
                    </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </header>

          {/*what is the image compression */}
          <section id="image-comp" className="pt-105 pb-95 bg-light content_2">
            <div className="container px-xl-0 text-center">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h2 data-aos="fade-down" data-aos-delay="0">
                    Görüntü Sıkıştırma Nedir?
                  </h2>
                </div>
                <div className="col-xl-7 col-lg-9 col-md-10">
                  <div
                    className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                    data-aos="fade-down"
                    data-aos-delay="250"
                  >
                    Görüntü sıkıştırma, orijinal görüntüyü birkaç bit ile
                    kodlayan bir veri sıkıştırma uygulamasıdır. Görüntü
                    sıkıştırmanın amacı, görüntünün fazlalığını azaltmak ve
                    verileri verimli bir biçimde depolamak veya iletmektir.
                  </div>
                </div>
              </div>
              <a
                href="https://en.wikipedia.org/wiki/Image_compression"
                className="mx-15 medium link color-main"
                style={{ color: "#25DAC5" }}
              >
                - Image Compression
              </a>
            </div>
          </section>

          {/*png? */}
          <section id="png" className="pt-105 pb-95 bg-light content_2">
            <div className="container px-xl-0 text-center">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h2 data-aos="fade-down" data-aos-delay="0">
                    'png' Nedir?
                  </h2>
                </div>
                <div className="col-xl-7 col-lg-9 col-md-10">
                  <div
                    className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                    data-aos="fade-down"
                    data-aos-delay="250"
                  >
                    Png (Portable Network Graphics), görüntülerin kayıpsız
                    sıkıştırılması için kullanılan bir saklama biçimidir. Bu
                    kayıpsız veri sıkıştırma formatı, Grafik Değişim Formatının
                    (GIF) yerini almak için oluşturulmuştur. Buna ek olarak, PNG
                    dosyaları 24 bit RGB renk paletleri ve gri tonlamalı
                    görüntüler içerebilir. Temel olarak, bu görüntü formatı
                    internetteki görüntüleri aktarmak için tasarlanmıştır.
                  </div>
                </div>
              </div>
              <a
                href="https://en.wikipedia.org/wiki/Portable_Network_Graphics"
                className="mx-15 medium link color-main"
                style={{ color: "#25DAC5" }}
              >
                - PNG
              </a>
            </div>
          </section>

          {/*jpeg? */}
          <section id="jpeg" className="pt-105 pb-95 bg-light content_2">
            <div className="container px-xl-0 text-center">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h2 data-aos="fade-down" data-aos-delay="0">
                    'jpeg' Nedir?
                  </h2>
                </div>
                <div className="col-xl-7 col-lg-9 col-md-10">
                  <div
                    className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                    data-aos="fade-down"
                    data-aos-delay="250"
                  >
                    JPEG, (Joint Photographic Experts Group), kayıplı ve
                    sıkıştırılmış görüntü verilerini içeren standart bir görüntü
                    formatıdır. Dosya boyutundaki büyük azalmaya rağmen JPEG
                    görüntüler makul görüntü kalitesini korur. Bu benzersiz
                    sıkıştırma özelliği, JPEG dosyalarının İnternette,
                    Bilgisayarlarda ve Mobil Cihazlarda yaygın olarak
                    kullanılmasına izin verir. JPEG görüntülerin paylaşımı hızlı
                    ve etkilidir. Ayrıca, minimum depolama alanında çok sayıda
                    JPEG resim dosyası saklanabilir.
                  </div>
                </div>
              </div>
              <a
                href="https://en.wikipedia.org/wiki/JPEG"
                className="mx-15 medium link color-main"
                style={{ color: "#25DAC5" }}
              >
                - JPEG
              </a>
            </div>
          </section>

          <section id="links" className="pt-105 pb-95 bg-light content_2">
            <div className="container px-xl-0 text-center">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h2 data-aos="fade-down" data-aos-delay="0">
                    Linkler
                  </h2>
                </div>
                <div className="col-xl-7 col-lg-9 col-md-10">
                  <div
                    className="mt-35 f-18 medium color-heading op-7 text-adaptive"
                    data-aos="fade-down"
                    data-aos-delay="250"
                  >
                    <a
                      href="https://youtu.be/a36_L4QjGQE"
                      className="mx-15 medium link color-main"
                      style={{ color: "#25DAC5" }}
                    >
                      - Youtube
                    </a>
                    <a
                      href="https://github.com/uysal-uysal/image-compress"
                      className="mx-15 medium link color-main"
                      style={{ color: "#25DAC5" }}
                    >
                      - Source Code
                    </a>
                    <a
                      href="https://github.com/Donaldcwl/browser-image-compression"
                      className="mx-15 medium link color-main"
                      style={{ color: "#25DAC5" }}
                    >
                      - Compression Github
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1xhOXyXyzCOd2PK19KI_M5lEsYz0fU4GI/view?usp=sharing"
                      className="mx-15 medium link color-main"
                      style={{ color: "#25DAC5" }}
                    >
                      - Proje Dokümanı
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
