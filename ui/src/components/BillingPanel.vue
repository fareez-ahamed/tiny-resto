<script setup lang="ts">
import Products from './Products.vue';
import Bill from './Bill.vue';
import { computed, ref } from 'vue';
import { useProducts } from '../composables/useProducts';

const {
    productsClass
} = defineProps<{ productsClass: string }>()

const items = ref<{ id: number; quantity: number }[]>([]);
const { findById } = useProducts();

const handleAdd = (productId: number) => {
    const existingItem = items.value.find(item => item.id === productId);
    if(existingItem) {
        existingItem.quantity++;
        return;
    }
    items.value = [...items.value, { id: productId, quantity: 1 }]
}

const billItems = computed(() =>
    items.value.map(item => {
        const product = findById(item.id);
        return {
            id: item.id,
            name: product?.name ?? '',
            unitPrice: product?.price ?? 0,
            quantity: item.quantity, 
            price: item.quantity * (product?.price ?? 0)
        }
    })
)

const totalAmount = computed(() => billItems.value.reduce((previous, current) => previous + current.price , 0))

</script>

<template>
    <Products :class="productsClass" @add="handleAdd" />
    <Bill :items="billItems" :total-amount="totalAmount" />
</template>