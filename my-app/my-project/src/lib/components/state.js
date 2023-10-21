import { writable } from 'svelte/store';

export const count = writable(20000);
export const color = writable('#ffffff');
export const innerRadius = writable(150);
export const outerRadius = writable(25);
export const starScale = writable(0.2);
