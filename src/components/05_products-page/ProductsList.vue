<template>
  <div class="products-list">
    <product-card
      v-for="product in productsData"
      :key="product.id"
      :product-data="product"
      class="products-list__item"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductsList',
  components: { ProductCard },
  props: {
    productsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.875em;
  // .products-list__item
  &__item {
    flex: 0 1 15.625em;
  }
}
</style>
