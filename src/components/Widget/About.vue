<template>
  <div class='about display-flex'>
    <div class='about__img'>
      <img :src='require("@/assets/images/about__img.png")' alt="about">
    </div>
    <div class='about__content'>
      <div class='about__title'>{{ $t('about') }}</div>
      <h2>{{ $t('about_title') }} </h2>
      <p>{{ $t('about_description') }}</p>
      <router-link class='button button-mt-20' to="">
        {{ $t('learn_more') }}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "About",
}
</script>