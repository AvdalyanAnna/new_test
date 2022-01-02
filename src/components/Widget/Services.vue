<template>
  <div class='services'>
    <div class='wrapper'>
      <div class='ta-c'>
        <h2>{{ $t('our_services') }}</h2>
      </div>
      <div class='service-block display-flex'>
        <div class='service-block__item'
             v-for="(item,index) in SERVICES"
             :key="index"
        >
          <div class='service-block__com m-a'>
            <img :src='item.image' alt="services">
          </div>
          <div class='service-block__name ta-c'>{{ item.name }}</div>
          <div class='service-block__hover'>
            <div class='service-block__text'>{{item.text}}</div>
            <div class='ta-c'>
              <router-link class='service-block__link' :to='item.link'>
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Services",
  computed: {
    ...mapGetters({
      SERVICES: 'GET_SERVICES'
    })
  }
}
</script>