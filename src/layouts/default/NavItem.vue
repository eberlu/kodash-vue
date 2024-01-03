<script setup lang="ts">

import { type NavigationItem } from '@/types'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<NavigationItem>()

const emit = defineEmits([
	'toggle-submenu'
])

// getters

const getNameFontWeight:ComputedRef<string> = computed(() => {
	return useRoute().name === props.to ? 'font-semibold' : 'font-regular'
})

// methods

function handleClick(event: Event) {
	event.preventDefault()
	emit('toggle-submenu', !props.children ? null : props.name)
}	

</script>

<template>
	
	<RouterLink
		class="flex items-center flex-col gap-2 p-3"
		:to="{ name: to }"
		@click="handleClick">

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