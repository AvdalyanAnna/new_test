<template>
  <footer class='footer'>
    <div class='wrapper'>
      <div class='footer__block display-flex'>
        <div class='footer__logo'>
          <router-link to=''>
            <img src='@/assets/images/logo__footer.png'>
          </router-link>
        </div>
        <div class='footer__text'>ARSEN PAINTING GROUP. COPYRIGHT © 2020</div>
        <div class='display-flex social'>
          <router-link class='restart social__link social__link-fb social__link-them-with' to=''>
            <svg>
              <use xlink:href='@/assets/images/sprite.svg#fb'></use>
            </svg>
          </router-link>
          <router-link class='restart social__link social__link-insta social__link-them-with' to=''>
            <svg>
              <use xlink:href='@/assets/images/sprite.svg#insta'></use>
            </svg>
          </router-link>
          <router-link class='restart social__link social__link-linkedin social__link-them-with' to=''>
            <svg>
              <use xlink:href='@/assets/images/sprite.svg#linkedin'></use>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter"
}
</script>

<style scoped>

</style>