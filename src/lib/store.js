// Svelte store
import { writable } from 'svelte/store';

export const count = writable(0);
export const builderUpstream = writable([]);
export const builderOrg = writable([]);
export const evidenceTypes = writable([]);