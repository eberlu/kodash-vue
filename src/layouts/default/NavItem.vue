<script setup lang="ts">

import { type NavigationItem } from '@/types'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<NavigationItem>()

// getters

const getNameFontWeight:ComputedRef<string> = computed(() => {
	return useRoute().name === props.to ? 'font-semibold' : 'font-regular'
})

</script>

<template>

	<RouterLink
		class="flex items-center flex-col gap-2 p-3"
		:to="{ name: to }">

		<FtIcon 
			:type="icon" 
			size="2.8rem" 
			stroke-width="1" />

		<span 
			class="text-sm text-gray-50"
			:class="[ getNameFontWeight ]">
			{{ name }}
		</span>

	</RouterLink>

</template>