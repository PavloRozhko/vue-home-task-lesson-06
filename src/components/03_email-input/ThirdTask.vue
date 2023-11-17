<template>
  <div class="third-task">
    <h2 class="third-task__title">Задача 3.</h2>
    <p class="third-task__text">
      Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад:
      ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні
      модифікатора check відображати червоним фоном input, якщо некоректний.
    </p>
    <email-input v-model.check="email" />
  </div>
</template>

<script>
import EmailInput from './EmailInput.vue'

export default {
  name: 'ThirdTask',
  components: { EmailInput },
  data() {
    return {
      email: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
