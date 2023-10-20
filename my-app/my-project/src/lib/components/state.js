import { writable } from 'svelte/store';

export const count = writable(20000);
export const color = writable('#ffffff');
export const innerRadius = writable(250);
export const outerRadius = writable(375);
export const starScale = writable(0.5);
