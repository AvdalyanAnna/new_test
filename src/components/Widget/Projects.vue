<template>
  <div class='featured'>
    <div class='wrapper'>
      <div class='featured__title ta-c'>{{ $t('project_title') }}</div>
      <h2 class='ta-c'>{{ $t('project_subTitle') }}</h2>
      <div class='featured__text ta-c'>{{ $t('project_description') }}</div>
      <div class='project display-flex'>
        <div class='project__item'
             v-for="(item,index) in PROJECTS"
             :key="index"
        >
          <div class='project__img'>
            <img :src='item.image' alt="">
          </div>
          <div class='project__hover-area'>
            <div class='project__name'>{{ item.name }}</div>
            <div class='project__text'>{{ item.text }}</div>
            <router-link class='project__more' :to='item.link'>CONTINUE READING</router-link>
          </div>
        </div>
      </div>
      <div class='ta-c'>
        <router-link class='button' to=''>{{ $t('view_projects') }}</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Projects",
  computed: {
    ...mapGetters({
      PROJECTS: 'GET_PROJECTS'
    })
  }
}
</script>
