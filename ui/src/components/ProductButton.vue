<script setup lang="ts">
import { formatCurrency } from '../utils';

const { label } = defineProps<{ id: number; label: string; price: number }>();

const emit = defineEmits<{ click: [id: number] }>()
</script>

<template>
    <button class="rounded bg-white h-30 shadow flex flex-col p-4 items-stretch hover:shadow-md active:shadow-sm"
        @click="emit('click', id)">
        <h4 class="text-2xl text-gray-900 flex-grow self-start">{{ label }}</h4>
        <p class="self-end text-gray-500">{{ formatCurrency(price) }}</p>
    </button>
</template>