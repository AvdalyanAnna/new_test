<template>
  <div class='contact'>
    <div class='wrapper display-flex'>
      <div class='contact__us'>
        <div class='contact__title'>{{ $t('contact_us_title') }}</div>
        <div class='contact__place'>Sydney, NWS</div>
        <div class='contact__phone'>
          <router-link to="">{{ PHONE }}</router-link>
        </div>
        <div class='contact__email'>
          <router-link to="">{{ EMAIL }}</router-link>
        </div>
      </div>
      <div class='contact__request'>
        <div class='contact__title'>{{ $t('contact_us_title_1') }}</div>
        <form class='contact__form clearfix'>
          <div class='contact__left'>
            <FormInput input-required
                       form-label="Name Surname"
                       v-model.trim="name"
                       :class="{ error: $v.name.$error }"
                       @change="$v.name.$touch()"/>

            <FormInput input-required
                       form-label="Email"
                       v-model.trim="email"
                       :class="{ error: $v.email.$error }"
                       @change="$v.email.$touch()"/>
          </div>
          <div class='contact__right'>
            <FormInput input-required
                       form-label="Phone Number"
                       v-model.trim="phone"
                       :class="{ error: $v.phone.$error }"
                       @change="$v.phone.$touch()"/>

            <FormTextarea input-required
                          form-label="How can we help you?"
                          v-model.trim="textarea"
                          :class="{ error: $v.textarea.$error }"
                          @change="$v.textarea.$touch()"/>
            
            <input
                @click.prevent="onSubmit"
                class='button contact__submit'
                type='submit' value='SEND A NOTE'>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormInput from "@/components/Ui/FormInput";
import FormTextarea from "@/components/Ui/FormTextarea";
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
  name: "Contact",
  components: {FormInput, FormTextarea},
  computed: {
    ...mapGetters({
      PHONE: 'GET_PHONE',
      EMAIL: 'GET_EMAIL',
    })
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      textarea: '',
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      minLength: minLength(4)
    },
    textarea: {
      required,
      minLength: minLength(10)
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
    }
  }
}
</script>