<template>
  <div class='looking-for'>
    <div class='wrapper display-flex justify-center'>
      <div class='looking-for__text'>
        {{ $t('looking') }}
      </div>
      <router-link class='button' to=''>{{ $t('contact_us') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LookingFor"
}
</script>

<style scoped>

</style>