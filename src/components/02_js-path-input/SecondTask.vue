<template>
  <div class="second-task">
    <h2 class="second-task__title">Задача 2.</h2>
    <p class="second-task__text">
      Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується
      розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.
    </p>
    <file-path-input v-model.lazy.checkPath="path" />
  </div>
</template>

<script>
import FilePathInput from './FilePathInput.vue'
export default {
  name: 'SecondTask',
  components: {
    FilePathInput,
  },
  data() {
    return {
      path: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
