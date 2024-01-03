<script setup lang="ts">

import { ref, type Ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import AppBrand from '@/components/AppBrand.vue'
import layout from '@/data/layout.json'
import { type NavigationItem } from '@/types'
import NavItem from './default/NavItem.vue'
import NavSubmenu from './default/NavSubmenu.vue'

// state

const sidebarIsOpen:Ref<boolean> = ref(false)

const isDark = useDark()

const navigation:NavigationItem[] = layout.navigation

const currentSubmenu:Ref<string | null> = ref(null)

// events

function onSidebarOpen():void {
	sidebarIsOpen.value = true
}

function onSidebarClose():void {
	sidebarIsOpen.value = false
}

const onToggleDark:Function = useToggle(isDark)

function onToggleSubmenu(name:string):void {
	currentSubmenu.value = currentSubmenu.value === name 
		? null 
		: name
}

</script>

<template>

	<header class="fixed top-0 left-0 flex items-center justify-between w-full h-[4rem] z-[999] px-3 xl:px-6 xl:w-[calc(100%-9rem)] xl:translate-x-[9rem] shadow bg-white dark:bg-gray-800">

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
		class="fixed top-0 left-0 w-[7rem] p-3 flex items-center flex-col gap-16 h-full z-[1000] xl:w-[9rem] xl:translate-x-0 transition-transform bg-primary-700 text-primary-200"
		:class="{ '-translate-x-40': !sidebarIsOpen }">

		<button 
			class="xl:hidden" 
			@click="onSidebarClose">

			close
		</button>

		<AppBrand 
			width="50" 
			height="50" />

		<nav class="flex items-center flex-col gap-8">

			<NavItem 
				v-for="item in navigation" 
				:name="item.name"
				:to="item.to"
				:icon="item.icon" 
				:children="item?.children"
				@toggle-submenu="onToggleSubmenu" />

			<teleport to="body">

				<div 
					v-for="item in navigation" 
					:key="item.name">
					
					<NavSubmenu
						v-if="item.children"
						:current="currentSubmenu"	
						:name="item.name" />

				</div>

			</teleport>

		</nav>

	</aside>

	<main class="relative top-[4rem] p-3 xl:left-[9rem] xl:w-[calc(100%-9rem)] xl:py-6 xl:px-6">

		<slot />
	</main>

</template>