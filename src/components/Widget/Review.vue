<template>
  <div class='review'>
    <div class='review__wrapper wrapper'>
      <div class='review__quotation ta-c'>
        <img src='@/assets/images/sprite.svg#quotation'>
      </div>
      <h2 class='ta-c review__h2'>{{ $t('reviews_title')}}</h2>
      <div class='say-client-slider'>
        <carousel  v-bind="settings">
          <div class='say-client-slider__item display-flex'
               v-for="(item,index) in REVIEW" :key="index" >
            <div class='say-client-slider__img'>
              <img :src='item.avatar'>
            </div>
            <div class='say-client-slider__introduce'>
              <div class='say-client-slider__name'>{{ item.name }}</div>
              <div class='say-client-slider__position'>{{ item.position }}</div>
              <div class='say-client-slider__text'>{{ item.description }}</div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import carousel from 'vue-owl-carousel'
export default {
  name: "Review",
  components: {carousel },
  computed: {
    ...mapGetters({
      REVIEW: 'GET_REVIEW'
    })
  },
  data(){
    return{
      settings:{
        items: 2,
        nav: true,
        loop: true,
        dots:false,
        stagePadding: 15,
        margin: 32,
        responsive: {
          0: {
            items: 1,

          },
          1025: {
            items: 2,
          }
        }
      }
    }
  }
}
</script>