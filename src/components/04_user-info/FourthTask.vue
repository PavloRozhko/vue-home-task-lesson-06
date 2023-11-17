<template>
  <div class="fourth-task">
    <h2 class="fourth-task__tile">Задача 4.</h2>
    <p class="fourth-task__text">
      Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні відповідних модифікаторів
      відповідних полів input:
    </p>
    <ul class="fourth-task__list">
      <li>ім’я користувача - у випадку порожнього поля (червони фон)</li>
      <li>вік (вік менший за 18 – колір фону червоний, інакше – зелений).</li>
    </ul>
    <user-info-form v-model:login.notFilled="userLogin" v-model:age.allowedAge="userAge" />
  </div>
</template>

<script>
import UserInfoForm from './UserInfoForm.vue'

export default {
  name: 'FourthTask',
  components: { UserInfoForm },
  data() {
    return {
      userLogin: null,
      userAge: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
