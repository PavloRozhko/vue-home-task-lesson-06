<template>
  <div class="user-info">
    <div class="user-info__login">
      <label>
        Введіть логін
        <input ref="login" v-model="loginValue" type="text" />
      </label>
    </div>
    <div class="user-info__age">
      <label>
        Введіть вік
        <input ref="age" v-model="ageValue" type="number" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoForm',
  props: {
    login: {
      type: String,
      default: '',
    },
    loginModifiers: {
      type: Object,
      default: () => ({}),
    },
    age: {
      type: Number,
      default: null,
    },
    ageModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:login', 'update:age'],
  computed: {
    loginValue: {
      get() {
        return this.login
      },
      set(newLogin) {
        if (this.loginModifiers.notFilled) {
          if (!newLogin) this.$refs.login.style.backgroundColor = 'red'
          else this.$refs.login.style.backgroundColor = 'green'
        }
        this.$emit('update:login', newLogin)
      },
    },
    ageValue: {
      get() {
        return this.age
      },
      set(newAge) {
        if (this.ageModifiers.allowedAge) {
          if (newAge < 18) this.$refs.age.style.backgroundColor = 'red'
          else this.$refs.age.style.backgroundColor = 'green'
        }
        this.$emit('update:age', newAge)
      },
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.user-info {
  // .user-info__login
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
