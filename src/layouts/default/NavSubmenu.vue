<script setup lang="ts">

import { type ComputedRef, computed } from 'vue'

const props = defineProps<{
	name: string,
	current: string | null,
}>()

// getters

const isCurrentOpenClass:ComputedRef<string> = computed(() => {
	return props.name === props.current ? 'translate-x-0' : '-translate-x-[999px]'
})

</script>

<template>

	<div 
		class="fixed top-[4rem] left-[7rem] h-[calc(100%-4rem)] p-5 bg-primary-800 xl:left-[9rem] overflow-y-auto transition-transform ease-in-out duration-500"
		:class="[ isCurrentOpenClass ]">

		{{ name }}

	</div>

</template>