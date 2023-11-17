<template>
  <div class="sixth-task">
    <h2 class="sixth-task__title">Задача 6.</h2>
    <p class="sixth-task__text">
      Створити компонент - форму для вводу даних кредитної карти (на зразок поданого прикладу). При вводі “EXPIRY DATE”
      розділювач “/” додається автоматично.
    </p>
    <payment-form
      v-model:card-number.digitsOnly.separate4Digits="card"
      v-model:expiry-date.separateDate="date"
      v-model:secure-code="code"
    />
  </div>
</template>

<script>
import PaymentForm from './PaymentForm.vue'

export default {
  name: 'SixthTask',
  components: { PaymentForm },
  data() {
    return {
      card: null,
      date: null,
      code: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
