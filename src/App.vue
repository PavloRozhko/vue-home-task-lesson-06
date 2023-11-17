<template>
  <h1>Домашні завдання урок № 6.</h1>
  <div class="tasks">
    <first-task class="tasks__item" />
    <second-task class="tasks__item" />
    <third-task class="tasks__item" />
    <fourth-task class="tasks__item" />
    <products-page class="tasks__item" />
    <sixth-task class="tasks__item" />
  </div>
</template>

<script>
import FirstTask from './components/01_age-input/FirstTask.vue'
import SecondTask from './components/02_js-path-input/SecondTask.vue'
import ThirdTask from './components/03_email-input/ThirdTask.vue'
import FourthTask from './components/04_user-info/FourthTask.vue'
import ProductsPage from './components/05_products-page/ProductsPage.vue'
import SixthTask from './components/06_credit-card-form/SixthTask.vue'

export default {
  name: 'App',
  components: {
    FirstTask,
    SecondTask,
    ThirdTask,
    FourthTask,
    ProductsPage,
    SixthTask,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Arial, sans-serif;
  max-width: 75em;
  margin: 0 auto;
  padding-left: 0.625em;
  padding-right: 0.625em;
}
h1 {
  text-align: center;
  margin: 0 0 1.25em 0;
}
</style>
