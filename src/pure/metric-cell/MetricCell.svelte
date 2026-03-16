<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import { formatTrend, trendArrow, trendColorClass } from "../sparkline/sparkline-utils.js";

	let {
		label,
		value,
		trend,
		lowerIsBetter = true,
		icon: Icon,
		valueClass,
		children,
		class: className = "",
	}: {
		/** Metric label text */
		label: string;
		/** Primary metric value (displayed large) */
		value: string | number;
		/** Trend percentage — shows arrow + percentage change */
		trend?: number | null;
		/** If true, negative trend is good (green). Default true. */
		lowerIsBetter?: boolean;
		/** Optional icon displayed with the label */
		icon?: Component;
		/** Custom class for the value text */
		valueClass?: string;
		/** Optional content below the value (e.g. a Sparkline) */
		children?: Snippet;
		class?: string;
	} = $props();

	const trendClass = $derived(trendColorClass(trend ?? null, lowerIsBetter));
</script>

<div class="space-y-1 {className}">
	<div class="flex items-baseline justify-between">
		<span class="flex items-center gap-1 text-xs text-muted-foreground">
			{#if Icon}
				<Icon class="h-3.5 w-3.5" />
			{/if}
			{label}
		</span>
		<div class="flex items-center gap-1.5">
			<span class="text-lg font-semibold tabular-nums {valueClass ?? 'text-foreground'}">
				{value}
			</span>
			{#if trend !== undefined && trend !== null}
				<span class="text-xs font-medium {trendClass}">
					{trendArrow(trend)} {formatTrend(trend)}
				</span>
			{/if}
		</div>
	</div>
	{#if children}
		{@render children()}
	{/if}
</div>
