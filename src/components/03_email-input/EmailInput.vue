<template>
  <label>
    Enter your email
    <input ref="emailInput" v-model="emailValue" type="email" title="example@inv.mn.edu" @change="addDomain" />
  </label>
</template>

<script>
import { validateEmail } from '@/utils/format'

import { DOMAIN_PATTERN } from '@/constants/patterns'

export default {
  name: 'EmailInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  computed: {
    emailValue: {
      get() {
        return this.modelValue
      },
      set(newLogin) {
        if (this.modelModifiers.check) {
          if (!validateEmail(newLogin)) {
            this.$refs.emailInput.style.backgroundColor = 'red'
          } else {
            this.$refs.emailInput.style.backgroundColor = 'transparent'
          }
        }
        this.$emit('update:modelValue', newLogin)
      },
    },
  },
  methods: {
    addDomain() {
      if (this.emailValue) this.emailValue += DOMAIN_PATTERN
    },
  },
}
</script>

<style lang="scss" scoped></style>
