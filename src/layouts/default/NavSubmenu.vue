<script setup lang="ts">

import { type ComputedRef, computed } from 'vue'
import { type NavigationItem } from '@/types'
import { useRoute } from 'vue-router'

const props = defineProps<{
	name: string,
	current: string | null,
	links: NavigationItem[]
}>()

defineEmits([
	'toggle-submenu'
])

// getters

const isCurrentOpenClass:ComputedRef<string> = computed(() => {
	return props.name === props.current ? 'translate-x-0' : '-translate-x-[999px]'
})

</script>

<template>

	<div 
		class="fixed top-[4rem] left-[7rem] h-[calc(100%-4rem)] p-2 xl:p-6 w-[12rem] xl:w-[14rem] bg-primary-800 xl:left-[9rem] overflow-y-auto transition-transform ease-in-out duration-500"
		:class="[ isCurrentOpenClass ]">

		<span class="text-primary-300 text-xs font-semibold text-left w-full flex py-2">
			{{ name }}
		</span>

		<nav class="py-5 text-primary-200 grid grid-cols-1 gap-2">

			<RouterLink 
				v-for="link in links"
				:to="{ name: (link.to as string) }"
				@click="$emit('toggle-submenu', null)"
				class="py-2 px-3 rounded hover:bg-primary-900 hover:text-primary-100 hover:shadow flex items-center gap-2 hover:ps-5 transition-all text-sm xl:text-[100%]">

				<FtIcon 
					type="star" 
					size="1rem"
					stroke-width="0" 
					fill="#fef08a"/>

				<span class="nav-submenu-router-link-name">
					{{ link.name }}
				</span>

			</RouterLink>

		</nav>

	</div>

</template>