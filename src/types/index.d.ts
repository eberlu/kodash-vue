export interface NavigationItem {
	name: string;
	to?: string;
	icon?: string;
	children?: Array;
}

export interface NavigationChildItem {
	name: string;
	to: string;
}