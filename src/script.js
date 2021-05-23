import $ from 'jquery'; 
import AOS from "aos";
import "aos/dist/aos.css";


$(window).on("popstate", function (e) {
  e.preventDefault();
  var target = window.location.href.split("#")[1];
  if (
    target !== "" &&
    target !== undefined &&
    document.getElementById(target) != null
  ) {
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#" + target).offset().top },
        500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  }
});

$(document).ready(function () {
  SF_scripts();
});

function SF_scripts() {
  $(window).resize(function () {
    resizeVideo();
    showMenuBtn();
    setBackgrounds();
  });

  $(window).trigger("resize");

  // open menu on mobile
  function showMenuBtn() {
    if ($(window).width() < 1199.98) {
      $(".open_menu").addClass("d-block");
      $("header nav").addClass("d-none");
      $(".navigation_mobile").removeClass("opened");
    } else {
      $(".open_menu").removeClass("d-block");
      $("header nav").removeClass("d-none");
      $(".navigation_mobile").removeClass("opened");
    }
  }

  $(".open_menu").click(function (event) {
    event.preventDefault();
    $(".navigation_mobile").addClass("opened");
  });

  $(".close_menu, header, section, footer, .navigation_mobile .inner a, openmenu-item").click(
    function (event) {
      $(".navigation_mobile").removeClass("opened");
    }
  );
  
  function setBackgrounds() {
    var bgSrc;
    if (window.devicePixelRatio > 1.1) {
      // retina
      $("[data-bg-src-2x]").each(function () {
        bgSrc = $(this).attr("data-bg-src-2x");
        if (
          bgSrc === "" ||
          bgSrc === "false" ||
          bgSrc === false ||
          bgSrc === undefined
        ) {
          bgSrc = $(this).attr("data-bg-src");
        }
        if (bgSrc !== "" && bgSrc !== "false" && bgSrc && bgSrc !== undefined) {
          $(this).css("background-image", "url(" + bgSrc + ")");
        } else {
          $(this).css("background-image", "");
        }
      });
    } else {
      // regular
      $("[data-bg-src]").each(function () {
        bgSrc = $(this).attr("data-bg-src");
        if (bgSrc !== "" && bgSrc !== "false" && bgSrc && bgSrc !== undefined) {
          $(this).css("background-image", "url(" + bgSrc + ")");
        } else {
          $(this).css("background-image", "");
        }
      });
    }
  }
  setBackgrounds();

  // aos
  if (typeof AOS !== "undefined" && $("body").hasClass("SFG_body") === false) {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    setTimeout(function () {
      if ($(".slick-initialized").length > 0) {
        AOS.refreshHard();
      }
    }, 200);
  }

  function resizeVideo() {
    var width, height, ratio;
    $(".video").each(function () {
      ratio = $(this).data("ratio");
      ratio = ratio.split("/");
      ratio = ratio[0] / ratio[1];
      width = $(this).width();
      height = width / ratio;
      $(this).height(height);
    });
  }
  resizeVideo();

  if ($("#copy_from_me").length > 0) {
    function copyStringToClipboard(str) {
      var el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    $(".js-copy-btn").click(function () {
      copyStringToClipboard($("#copy_from_me").text());
    });
  }

} 
