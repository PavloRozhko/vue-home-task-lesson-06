<template>
  <label>
    Введіть свій вік
    <input ref="ageInput" :key="updateKey" v-model="userAgeValue" type="number" />
  </label>
</template>

<script>
export default {
  name: 'UserAgeInput',
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:userAge'],
  data() {
    return {
      updateKey: 0,
    }
  },
  computed: {
    userAgeValue: {
      get() {
        return this.modelValue
      },
      set(newAge) {
        if (this.modelModifiers.check) {
          if (newAge > 150) {
            newAge = null
            this.$nextTick(() => {
              this.updateKey++
              this.$nextTick(() => {
                this.$refs.ageInput.focus()
              })
            })
          }
        }
        if (this.modelModifiers.setColor) {
          this.setStatusColor(newAge)
        }
        this.$emit('update:userAge', newAge)
      },
    },
  },
  methods: {
    setStatusColor(age) {
      if (age <= 10) this.$refs.ageInput.style.backgroundColor = 'green'
      else if (age <= 21) this.$refs.ageInput.style.backgroundColor = 'yellow'
      else if (age <= 150) this.$refs.ageInput.style.backgroundColor = 'orange'
      else this.$refs.ageInput.style.backgroundColor = 'transparent'
    },
  },
}
</script>

<style lang="scss" scoped></style>
