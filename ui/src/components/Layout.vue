<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div id="app-grid">
    <header class=" bg-blue-700 text-white flex items-center px-8 py-4">
      <p class="text-white font-bold text-xl flex-grow" @click="router.push('/')">Tiny Resto</p>
      <button class="bg-blue-700 hover:bg-blue-600 rounded px-4 py-2"
        @click="router.push('/products')">Products</button>
    </header>
    <RouterView />
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

footer {
  grid-column: 1 / -1;
}
</style>
