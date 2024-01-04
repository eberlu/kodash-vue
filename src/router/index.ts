import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/forms',
			name: 'forms',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/components',
			name: 'components',
			children: [
				{
					path: 'box',
					name: 'components.box',
					component: () => import('../views/ComponentBox.vue')
				},
				{
					path: 'buttons',
					name: 'components.buttons',
					component: () => import('../views/ComponentButtons.vue')
				},
			]
		},
	]
})

export default router
