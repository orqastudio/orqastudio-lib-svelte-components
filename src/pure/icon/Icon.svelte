<script lang="ts">
	import type { Component } from "svelte";
	import { resolveIcon } from "./icon-utils.js";
	import { cn } from "../../utils/cn.js";

	let {
		name,
		registry,
		class: className = "h-4 w-4",
	}: {
		/** Icon key to resolve (e.g. "target", "circle-dot", "shield") */
		name: string;
		/** Optional custom icon registry to check before defaults */
		registry?: Record<string, Component>;
		class?: string;
	} = $props();

	const IconComponent = $derived(resolveIcon(name, registry));
</script>

<IconComponent class={cn("shrink-0", className)} />
