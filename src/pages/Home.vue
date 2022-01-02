<template>
  <div class="app">
    <vHeader/>
    <HomeSlider/>
    <LookingFor/>
    <Services/>
    <About/>
    <Projects/>
    <Calculator/>
    <Review />
    <Contact/>
    <vFooter/>
  </div>
</template>

<script>
import vHeader from "@/components/Layouts/vHeader";
import vFooter from "@/components/Layouts/vFooter";
import LookingFor from "@/components/Widget/LookingFor";
import Services from "@/components/Widget/Services";
import About from "@/components/Widget/About";
import Projects from "@/components/Widget/Projects";
import Calculator from "@/components/Widget/Calculator";
import Contact from "@/components/Widget/Contact";
import HomeSlider from "@/components/Widget/HomeSlider";
import Review from "@/components/Widget/Review";
export default {
  name: "Home",
  components: {
    vHeader, vFooter, LookingFor, Services, About, Projects, Calculator, Contact,HomeSlider,Review
  },

};
</script>