import {writable} from 'svelte/store';

export const isHome = writable(true);
export const isProjects = writable(false);
export const isNotes = writable(false);
export const isPhotos = writable(false);
export const isBlogs = writable(false);