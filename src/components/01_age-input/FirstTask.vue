<template>
  <div class="first-task">
    <h2 class="first-task__title">Задача 1.</h2>
    <p class="first-task__text">
      Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не
      допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати
      фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий).
    </p>
    <user-age-input v-model.check.setColor="age" />
  </div>
</template>

<script>
import UserAgeInput from './UserAgeInput.vue'

export default {
  name: 'FirstTask',
  components: { UserAgeInput },
  data() {
    return {
      age: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
