<template>
  <label>
    Введіть шлях до фалу JS
    <input
      ref="pathInput"
      v-model="filePathValue"
      title="Приклад шляху до файлу: c:/directory-name/file-name.js"
      type="url"
      placeholder="c:/directory/file-name.js"
    />
  </label>
</template>

<script>
import { validateFilePath } from '@/utils/format'

export default {
  name: 'FilePathInput',

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
    filePathValue: {
      get() {
        return this.modelValue
      },
      set(newPath) {
        if (this.modelModifiers.checkPath) {
          if (!validateFilePath(newPath)) {
            this.$refs.pathInput.style.backgroundColor = 'red'
          } else {
            this.$refs.pathInput.style.backgroundColor = 'transparent'
          }
        }
        this.$emit('update:modelValue', newPath)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
