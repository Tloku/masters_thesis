<script setup lang="ts">
import { ref } from 'vue';

    const numbers = ref<number[]>([])

    for (let i = 0; i < 100_000; i++) {
        numbers.value.push(i);
    }
</script>

<template>
    <div class="wrapper">
        Długość tablicy: {{ numbers.length }}
        <div v-for="i in numbers">
            <div class="row" :key="i">
                <span>This is input nr {{ i }}</span>
                <input/>    
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .row {
        display: flex;
        gap: 10px;
    }
}
</style>
