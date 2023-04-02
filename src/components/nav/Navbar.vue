<template>
  <!--  <nav class="navbar">-->
  <!--    <div class="navbar-container">-->
  <!--      <nav-logo/>-->
  <!--      <ul class="navbar-nav">-->
  <!--        <nav-link link="About"/>-->
  <!--        <nav-link link="Experience"/>-->
  <!--        <nav-link link="Projects"/>-->
  <!--        <nav-link link="Contact Me"/>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </nav>-->

  <nav class="navbar" :class="{'navbar--active': navActive}">
    <div class="navbar-container">
      <nav-logo/>
      <div
          class="navbar-trigger"
          id="navbar-trigger"
          ref="navTrigger"
          @click="handleNavToggle"
      >
        <span class="navbar-trigger__lines"> </span>
      </div>
      <div
          class="navbar-wrapper"
          id="nav-wrapper"
          ref="navmenu"
      >
        <div class="menu">
          <ul>
            <nav-link link="About"/>
            <nav-link link="Experience"/>
            <nav-link link="Projects"/>
            <nav-link link="Contact Me"/>
          </ul>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import NavLink from "@/components/nav/NavLink.vue";
import NavLogo from "@/components/nav/NavLogo.vue";

export default {
  name: "Navbar",
  components: {NavLogo, NavLink},
  data() {
    return {
      navActive: false,
    }
  },
  methods: {
    handleNavToggle(){
      this.navActive = !this.navActive
    }
  },

}
// const navTrigger = $("#navbar-trigger");
// const navmenu = $("#nav-wrapper");
// const header = $("header");
// const firstSection = $("main").children().first();
//
// navTrigger.click(function () {
//   navTrigger.toggleClass("navbar--active");
//   navmenu.toggleClass("navbar-wrapper--active");
//   header.toggleClass("header--active");
//
//   if (isMobile() && header.hasClass("header--active")) {
//     const headerHeight = header.height();
//     const firstSectionCurrentHeight = firstSection.css("padding-top");
//
//     const newPaddingTop = `${
//         headerHeight + Number(firstSectionCurrentHeight.split("px")[0])
//     }px`;
//
//     firstSection.css("padding-top", newPaddingTop);
//   } else {
//     const newPaddingTop = `${
//         Number(firstSection.css("padding-top").split("px")[0]) - header.height()
//     }px`;
//
//     firstSection.css("padding-top", newPaddingTop);
//   }
// });
//
// function isMobile() {
//   if (screen.width <= 770) {
//     return true;
//   }
//   return false;
// }
//
// (function ($) {
//   var allPanels = $(".faq-card > .faq-card__answer-container").hide();
//
//   $(".faq-card > .faq-card__question-container").click(function () {
//     let closing = $(this).next()[0].style.display != "none";
//     allPanels.slideUp();
//     $(".faq-card > .faq-card__question-container > .faq-card__cta").removeClass(
//         "faq-card__cta--active"
//     );
//
//     if (!closing) {
//       $(this).find(".faq-card__cta").toggleClass("faq-card__cta--active");
//       $(this).next().slideDown();
//     }
//     return false;
//   });
// })(jQuery);
//
// $(document).on("click", 'a[href^="#"]', function (e) {
//   let id = $(this).attr("href");
//   let $id = $(id);
//   if ($id.length === 0) {
//     return;
//   }
//   e.preventDefault();
//   var pos = $id.offset().top;
//
//   $("html, body").animate({ scrollTop: pos }, "slow");
// });

</script>

