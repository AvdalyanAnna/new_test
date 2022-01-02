<template>
  <div class='form-name'>
    <div class='form-name__title'>{{ formLabel }}</div>
    <input class='input form-name__input'
           :required="inputRequired"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           :type='inputType'>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props:{
    formLabel: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    inputRequired: {
      type: Boolean,
      default: false,
    },
    inputValue: {
      type: [String,Number],
      default: "",
    },
  }
}
</script>

<style scoped>

</style>