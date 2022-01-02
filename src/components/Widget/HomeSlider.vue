<template>
  <div class='home-slider'>
    <carousel ref="slick" v-bind="settings">
      <div v-for="(item,index) in HOME_SLIDER" :key="index">
        <div class='home-slider__text'>
          <div class='wrapper'>
            <div class='page__title' v-html="item.title"> </div>
            <div class='page__undertitle'>{{ item.subTitle }}</div>
          </div>
        </div>
        <img :src='item.image' alt="slider">
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {mapGetters} from "vuex";

export default {
  name: "HomeSlider",
  components: {carousel},

  computed: {
    ...mapGetters({
       HOME_SLIDER: 'GET_HOME_SLIDER'
    })
  },
  data() {
    return {
      settings: {
        margin: 0,
        items: 1,
        nav: true
      }
    }
  }
}
</script>