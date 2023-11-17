<template>
  <div class="filter">
    <div ref="sellersSection" class="filter__item filter-element non-selected">
      <h4 class="filter-element__title">Продавець</h4>
      <ul class="filter-element__list">
        <li v-for="(seller, index) in sellers" :key="index" class="filter-element__item">
          <label>
            <input
              v-model="selectedSellerStatus"
              type="checkbox"
              :value="seller"
              @change="$emit('selectSeller', seller)"
            />
            {{ seller }}
          </label>
        </li>
      </ul>
    </div>
    <div ref="productsSection" class="filter__item filter-element non-selected">
      <h4 class="filter-element__title">Бренд</h4>
      <div class="filter-element__input">
        <input v-model="searchedBrand" type="search" placeholder="Пошук" />
      </div>
      <ul class="filter-element__list">
        <li v-for="(brand, index) in filteredBrandsList" :key="index" class="filter-element__item">
          <label>
            <input v-model="selectedBrandStatus" type="checkbox" :value="brand" @change="$emit('selectBrand', brand)" />
            {{ brand }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsFilter',
  props: {
    sellers: {
      type: Array,
      default: () => [],
    },
    brands: {
      type: Array,
      default: () => [],
    },
    sellerStatus: {
      type: Array,
      default: () => [],
    },
    sellerStatusModifiers: {
      type: Object,
      default: () => ({}),
    },
    brandStatus: {
      type: Array,
      default: () => [],
    },
    brandStatusModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['selectBrand', 'selectSeller', 'update:sellerStatus', 'update:brandStatus'],
  data() {
    return {
      searchedBrand: null,
    }
  },
  computed: {
    filteredBrandsList() {
      const filteredBrands = this.brands.filter((brand) => {
        if (brand && this.searchedBrand) return brand.toLowerCase().includes(this.searchedBrand.toLowerCase())
        else return false
      })
      return filteredBrands.length ? filteredBrands : this.brands
    },
    selectedSellerStatus: {
      get() {
        return this.sellerStatus
      },
      set(newSellers) {
        if (this.sellerStatusModifiers.check) {
          if (newSellers.length !== 0) this.$refs.sellersSection.classList.remove('non-selected')
          else this.$refs.sellersSection.classList.add('non-selected')
        }
        this.$emit('update:sellerStatus', newSellers)
      },
    },
    selectedBrandStatus: {
      get() {
        return this.brandStatus
      },
      set(newBrands) {
        if (this.brandStatusModifiers.check) {
          if (newBrands.length !== 0) this.$refs.productsSection.classList.remove('non-selected')
          else this.$refs.productsSection.classList.add('non-selected')
        }
        this.$emit('update:brandStatus', newBrands)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  // .filter__item
  &__item {
    padding: 0.9375em;
    border: 1px solid #000;
    border-radius: 5px;
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  }
}
.filter-element {
  // .filter-element__title
  &__title {
    font-size: 1.125em;
    &:not(:last-child) {
      margin: 0 0 0.625em 0;
    }
  }
  // .filter-element__list
  &__list {
    margin: 0;
    padding: 0;
  }
  // .filter-element__item
  &__item {
    list-style: none;
  }
  // .filter-element__input
  &__input {
    &:not(:last-child) {
      margin-bottom: 0.625em;
    }
  }
}
.non-selected {
  border-color: green;
}
</style>
