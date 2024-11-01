<script setup lang="ts">
import ProductButton from './ProductButton.vue';
import { useProducts } from '../composables/useProducts';

const { products } = useProducts();

const emit = defineEmits<{
    add: [id: number]
}>()

const handleClick = (id: number) => {
    emit('add', id);
} 

</script>

<template>
    <div class="bg-gray-50">
        <div class="gap-2 p-2 grid md:grid-cols-4 grid-cols-3">
            <ProductButton v-for="product in products" :key="product.id" :id="product.id" :label="product.name"
                :price="product.price" @click="handleClick"/>
        </div>
    </div>
</template>

<style scoped>
#products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
}
</style>