<script setup lang="ts">
import BillingPanel from './components/BillingPanel.vue';
import Products from './components/Products.vue';

</script>

<template>
  <div id="app-grid">
    <header class=" bg-blue-700 text-white font-bold text-xl flex items-center px-8 py-4">
      Tiny Resto
    </header>
    <BillingPanel products-class="products" />
    <!-- <Products class="products"/> -->
    <footer class=" bg-gray-100 flex items-center py-4 justify-center text-gray-500">
      &copy; Tiny Resto 2024
    </footer>
  </div>
</template>

<style>
#app-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 40%;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

header {
  grid-column: 1 / -1;
}

.products {
  grid-column: 1 / -2;
  align-self: top;
}

#bill {
  grid-column: 4;
}

footer {
  grid-column: 1 / -1;
}
</style>
