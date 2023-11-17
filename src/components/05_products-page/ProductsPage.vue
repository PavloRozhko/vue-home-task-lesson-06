<template>
  <div class="fifth-task">
    <h2 class="fifth-task__title">Задача 5.</h2>
    <p class="fifth-task__text">
      Спробуйте відтворити фрагмент. Компонент ProductsFilters через v-model повертає 2 значення фільтра: продавець,
      бренд. При заданні модифікатора “check” відображати секцію зеленою рамкою, якщо фільтр з відповідної секції
      (продавець чи бренд) не обрано.
    </p>
    <div class="page">
      <aside class="page__sidebar">
        <products-filter
          v-model:seller-status.check="selectedSellers"
          v-model:brand-status.check="selectedBrands"
          :sellers="sellersList"
          :brands="brandsList"
          @select-seller="onSellerSelect"
          @select-brand="onBrandSelect"
        />
      </aside>
      <products-list class="page__content" :products-data="filteredProductsList" />
    </div>
  </div>
</template>

<script>
import ProductsFilter from './ProductsFilter.vue'
import ProductsList from './ProductsList.vue'
import { laptopsData } from '@/constants/laptops-list'

export default {
  name: 'ProductsPage',
  components: { ProductsFilter, ProductsList },
  data() {
    return {
      laptopsData,
      selectedSellers: [],
      selectedBrands: [],
      selectedSellersList: [],
      selectedBrandsList: [],
    }
  },
  computed: {
    sellersList() {
      return [...new Set(this.laptopsData.map((product) => product.seller))]
    },
    brandsList() {
      return [...new Set(this.laptopsData.map((product) => product.brand))]
    },
    filteredProductsList() {
      if (this.selectedBrandsList.length === 0 && this.selectedSellersList.length === 0) {
        return this.laptopsData
      } else {
        return this.laptopsData.filter((product) => {
          const filteredBrand = this.selectedBrandsList.length === 0 || this.selectedBrandsList.includes(product.brand)
          const filteredSeller =
            this.selectedSellersList.length === 0 || this.selectedSellersList.includes(product.seller)
          return filteredBrand && filteredSeller
        })
      }
    },
  },
  methods: {
    onSellerSelect(selectedSeller) {
      if (this.selectedSellersList.includes(selectedSeller))
        this.selectedSellersList = this.selectedSellersList.filter((seller) => seller !== selectedSeller)
      else this.selectedSellersList.push(selectedSeller)
    },
    onBrandSelect(selectedBrand) {
      if (this.selectedBrandsList.includes(selectedBrand))
        this.selectedBrandsList = this.selectedBrandsList.filter((brand) => brand !== selectedBrand)
      else this.selectedBrandsList.push(selectedBrand)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  gap: 1.5625em;
  // .page__sidebar
  &__sidebar {
    padding: 0 0.9375em;
  }
  // .page__content
  &__content {
    padding: 0 0.9375em;
  }
}
</style>
