<template>
  <div class='calculation'>
    <div class='wrapper display-flex calculation__block justify-around'>
      <div class='calc'
           v-for="(item,index) in CALCULATOR"
           :key="index">
        <div class='calc__number counter_number'>{{ item.number }}</div>
        <div class='calc__text'>{{ $t(item.name) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Calculator",
  computed: {
    ...mapGetters({
      CALCULATOR: 'GET_CALCULATOR'
    })
  }
}
</script>