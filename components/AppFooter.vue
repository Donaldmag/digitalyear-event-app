<template>
    <div>
        <div class="flex items-center xs:justify-center justify-start px-4 h-10 border-t border-gray-200"> © <span>{{ dateFunction.year }}&nbsp;</span> Digital Year 2025 - All Rights Reserved  </div>
    </div>
</template>

<script setup>
import useDate from '../composables/useDate'
const dateFunction = useDate()
</script>