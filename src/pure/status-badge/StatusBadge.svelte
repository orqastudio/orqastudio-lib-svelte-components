<script lang="ts">
	import type { Component } from "svelte";
	import { cn } from "../../utils/cn.js";

	let {
		icon: Icon,
		label,
		spinning = false,
		mode = "badge",
	}: {
		icon: Component;
		label: string;
		spinning?: boolean;
		mode?: "badge" | "dot" | "inline";
	} = $props();
</script>

{#if mode === "dot"}
	<Icon class={cn("inline-block h-3.5 w-3.5 shrink-0 text-muted-foreground", spinning && "status-spin")} />
{:else if mode === "inline"}
	<span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
		<Icon class={cn("h-3.5 w-3.5 shrink-0", spinning && "status-spin")} />
		<span>{label}</span>
	</span>
{:else}
	<span class="inline-flex items-center gap-1.5 rounded border border-border bg-muted/30 px-1.5 py-0.5 text-xs text-muted-foreground">
		<Icon class={cn("h-3 w-3 shrink-0", spinning && "status-spin")} />{label}
	</span>
{/if}

<style>
	:global(.status-spin) {
		animation: status-spin 4s linear infinite;
	}
	@keyframes status-spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
</style>
