<template>
  <header>
    <div class='top-info'>
      <div class='wrapper display-flex'>
        <div class='display-flex'>
          <div class='top-info__phone'>
            <router-link class='reset' to="">Call: {{ PHONE }}</router-link>
          </div>
          <div class='top-info__email'>
            <router-link class='reset' to="">Email: {{ EMAIL }}</router-link>
          </div>
        </div>
        <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class='top-menu'>
      <div class='wrapper display-flex'>
        <div class='top-menu__logo'>
          <a class='reset display-flex' href='#'>
            <img :src='require("@/assets/images/logo.png")' alt="logo">
            <span>
              <em>ARSEN</em>
              PAINTING GROUP (APG) PTY LTD2
            </span>
          </a>
        </div>
        <nav class='top-menu__menu'>
          <ul class='display-flex'>
            <li v-for="(item,index) in NAV"
                :key="index"
                :class='item.active ? "active" :"reset top-menu__link"'>
              <router-link to="">{{ $t(item.title) }}</router-link>
            </li>
          </ul>
        </nav>
        <div class='top-menu__icons'>
          <div v-for="index in 3" :key="index"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "vHeader",
  data () {
    return { langs: ['ru', 'en'] }
  },
  computed: {
    ...mapGetters({
      NAV: 'GET_NAV',
      PHONE: 'GET_PHONE',
      EMAIL: 'GET_EMAIL',
    })
  }
};
</script>

