<template>
    <div :class="clsses">
        ttt
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@jon-ui/components/_utils/hooks/useBem';
import { computed } from 'vue';

const bem = useBem("button")

const clsses = computed(() => {
    return {
        [bem.b()]: true,
    }
})
</script>