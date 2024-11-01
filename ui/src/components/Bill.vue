<script setup lang="ts">

const { items } = defineProps<{
    items: {
        id: number,
        name: string,
        quantity: number,
        unitPrice: number,
        price: number,
    }[]
}>();
</script>

<template>
    <div class="p-4">
        <table class="w-full">
            <thead>
                <tr>
                    <th class="text-left">Item</th>
                    <th class="text-right">U.Price</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Price</th>
                </tr>
            </thead>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td class="text-right">{{ item.unitPrice }}</td>
                <td class="text-right">{{ item.quantity }}</td>
                <td class="text-right">{{ item.price }}</td>
            </tr>
        </table>
    </div>
</template>