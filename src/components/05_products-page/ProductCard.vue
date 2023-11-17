<template>
  <a class="product-card" :href="productData.href">
    <div class="product-card__img">
      <img :src="productData.img" :alt="productData.title" />
    </div>
    <div class="product-card__title">{{ productData.title }}</div>
    <div class="product-card__price">
      <span>{{ productData.price }}</span
      >₴
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-decoration: none;
  color: inherit;
  // .product-card__img
  &__img {
    flex: 0 1 250px;
    img {
      max-width: 100%;
    }
  }
  // .product-card__title
  &__title {
    font-size: 14px;
    flex: 1 1 100%;
    &:hover {
      text-decoration: underline;
    }
  }
  // .product-card__price
  &__price {
    color: #812020c0;
    span {
      font-size: 24px;
    }
  }
}
</style>
