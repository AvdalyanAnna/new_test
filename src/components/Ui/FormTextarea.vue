<template>
  <div class='form-name'>
    <div class='form-name__title'>{{ formLabel }}</div>
    <textarea class='textarea form-name__input'
              :inputRequired="inputRequired"
              @change="$emit('change', $event.target.value)"
              :value="inputValue"
              @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "FormTextarea",
  props: {
    formLabel: {
      type: String,
      default: "",
    },
    inputRequired: {
      type: Boolean,
      default: false,
    },
    inputValue: {
      type: [String, Number],
      default: "",
    },
  }
}
</script>

<style scoped>

</style>