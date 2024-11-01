<script setup lang="ts">
import { formatCurrency } from '../utils';


const { items } = defineProps<{
    items: {
        id: number,
        name: string,
        quantity: number,
        unitPrice: number,
        price: number,
    }[],
    totalAmount: number
}>();
</script>

<template>
    <div class="p-4 flex flex-col">
        <div class="flex-grow">
            <table class="w-full text-lg">
                <thead>
                    <tr>
                        <th class="text-left">Item</th>
                        <th class="text-right">U.Price</th>
                        <th class="text-right">Qty</th>
                        <th class="text-right">Price</th>
                    </tr>
                </thead>
                <tr class="hover:bg-gray-100 rounded" v-for="item in items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td class="text-right p-1">{{ item.unitPrice.toFixed(2) }}</td>
                    <td class="text-right p-1">{{ item.quantity }}</td>
                    <td class="text-right p-1">{{ item.price.toFixed(2) }}</td>
                </tr>
            </table>
        </div>
        <div class="flex flex-col items-end p-2">
            <p class="text-xl font-semibold">Total</p>
            <p class="text-4xl font-semibold">{{ formatCurrency(totalAmount) }}</p>
        </div>
        <button
            class="bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-500 text-xl p-4 text-white rounded"
            :disabled="items.length < 1">
            Submit
        </button>
    </div>
</template>