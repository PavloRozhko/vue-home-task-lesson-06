<template>
  <form action="#" method="POST" class="payment-form">
    <div class="payment-form__container">
      <div class="payment-form__line">
        <div class="payment-form__label">
          <label for="card-number"> CARD NUMBER </label>
        </div>
        <div class="payment-form__input">
          <input
            id="card-number"
            ref="cardNumber"
            :key="updateKey"
            v-model="cardNumberValue"
            maxlength="19"
            type="text"
          />
        </div>
        <div>{{ cardNumberValue }}</div>
      </div>
      <div class="payment-form__line">
        <div class="payment-form__label">
          <label for="date"> EXPIRY DATE </label>
        </div>
        <div class="payment-form__input">
          <input id="date" ref="date" v-model="expiryDateValue" type="text" maxlength="5" placeholder="MM / YY" />
        </div>
      </div>
      <div class="payment-form__line">
        <div class="payment-form__label">
          <label for="code"> SECURE CODE </label>
        </div>
        <div class="payment-form__input">
          <input id="code" v-model="secureCodeValue" type="password" maxlength="3" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import { getDateValidation } from '@/utils/format'
export default {
  name: 'PaymentForm',
  props: {
    cardNumber: {
      type: String,
      default: '',
    },
    cardNumberModifiers: {
      type: Object,
      default: () => ({}),
    },
    expiryDate: {
      type: String,
      default: '',
    },
    expiryDateModifiers: {
      type: Object,
      default: () => ({}),
    },
    secureCode: {
      type: String,
      default: '',
    },
    secureCodeModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:cardNumber', 'update:expiryDate', 'update:secureCode'],
  data() {
    return {
      updateKey: 0,
    }
  },
  computed: {
    cardNumberValue: {
      get() {
        return this.cardNumber
      },
      set(newNumber) {
        if (this.cardNumberModifiers.digitsOnly) {
          newNumber = newNumber.replace(/\D/g, '')
          this.$nextTick(() => {
            this.updateKey++
            this.$nextTick(() => {
              this.$refs.cardNumber.focus()
            })
          })
        }
        if (this.cardNumberModifiers.separate4Digits) {
          newNumber = newNumber.replace(/(\d{4}(?=.+))/g, '$1 ')
        }
        this.$emit('update:cardNumber', newNumber)
      },
    },
    expiryDateValue: {
      get() {
        return this.expiryDate
      },
      set(newDate) {
        if (this.expiryDateModifiers.separateDate) {
          if (newDate.length === 2) {
            newDate = newDate.concat('/')
          }
        }

        // if (this.expiryDateModifiers.validateDate) {
        //   if (!getDateValidation(newDate)) {
        //     newDate = newDate.replace(/./g, '')
        //   }
        // }
        this.$emit('update:expiryDate', newDate)
      },
    },
    secureCodeValue: {
      get() {
        return this.secureCode
      },
      set(newCode) {
        this.$emit('update:secureCode', newCode)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.payment-form {
  max-width: 25em;
  margin: 0 auto;
  padding: 1.5625em;
  border: 2px solid #000;
  border-radius: 0.625em;
  background-color: seashell;
  // .payment-form__container
  &__container {
    gap: 0.625em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  // .payment-form__line
  &__line {
    &:first-child {
      grid-column: 1 / 3;
    }
  }
  // .payment-form__label
  &__label {
    font-weight: 600;
    label {
      cursor: pointer;
    }
  }
  // .payment-form__input
  &__input {
    input {
      width: 100%;
    }
  }
}
</style>
