<script setup lang="ts">

import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

// state

const sidebarIsOpen = ref(false)

const isDark = useDark()

// events

function onSidebarOpen() {
	sidebarIsOpen.value = true
}

function onSidebarClose() {
	sidebarIsOpen.value = false
}

const onToggleDark = useToggle(isDark)

</script>

<template>

	<header class="fixed top-0 left-0 flex items-center justify-between w-full h-[4rem] z-[999] px-3 xl:px-6 xl:w-[calc(100%-10rem)] xl:translate-x-[10rem] shadow bg-white dark:bg-gray-800">

		<button
			class="xl:hidden"
			@click="onSidebarOpen">

			open
		</button>

		<button @click="onToggleDark()">
			toggle dark
		</button>

	</header>

	<aside 
		class="fixed top-0 left-0 w-[7rem] p-3 h-full z-[1000] xl:w-[10rem] xl:translate-x-0 transition-transform bg-primary-700"
		:class="{ '-translate-x-40': !sidebarIsOpen }">

		<button 
			class="xl:hidden" 
			@click="onSidebarClose">

			close
		</button>

	</aside>

	<main class="relative top-[4rem] p-3 xl:left-[10rem] xl:w-[calc(100%-10rem)] xl:py-6 xl:px-6">

		<slot />
	</main>

</template>