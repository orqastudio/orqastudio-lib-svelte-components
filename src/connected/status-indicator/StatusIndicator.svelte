<script lang="ts" module>
	import CircleIcon from "@lucide/svelte/icons/circle";
	import CompassIcon from "@lucide/svelte/icons/compass";
	import CircleDotIcon from "@lucide/svelte/icons/circle-dot";
	import CircleDotDashedIcon from "@lucide/svelte/icons/circle-dot-dashed";
	import CircleStarIcon from "@lucide/svelte/icons/circle-star";
	import CircleUserRoundIcon from "@lucide/svelte/icons/circle-user-round";
	import CircleCheckBigIcon from "@lucide/svelte/icons/circle-check-big";
	import CirclePauseIcon from "@lucide/svelte/icons/circle-pause";
	import CircleStopIcon from "@lucide/svelte/icons/circle-stop";
	import CircleMinusIcon from "@lucide/svelte/icons/circle-minus";
	import CircleFadingArrowUpIcon from "@lucide/svelte/icons/circle-fading-arrow-up";
	import type { Component } from "svelte";

	/** Map from icon name (as stored in project config) to Lucide component. */
	const ICON_MAP: Record<string, Component> = {
		circle: CircleIcon,
		compass: CompassIcon,
		"circle-dot": CircleDotIcon,
		"circle-dot-dashed": CircleDotDashedIcon,
		"circle-star": CircleStarIcon,
		"circle-user-round": CircleUserRoundIcon,
		"circle-check-big": CircleCheckBigIcon,
		"circle-pause": CirclePauseIcon,
		"circle-stop": CircleStopIcon,
		"circle-minus": CircleMinusIcon,
		"circle-fading-arrow-up": CircleFadingArrowUpIcon,
	};

	interface StatusDefinition {
		key: string;
		label: string;
		icon: string;
		spin?: boolean;
	}

	/** Fallback definitions used when project config hasn't loaded yet. */
	const FALLBACK_STATUSES: StatusDefinition[] = [
		{ key: "captured", label: "Captured", icon: "circle" },
		{ key: "exploring", label: "Exploring", icon: "compass" },
		{ key: "ready", label: "Ready", icon: "circle-dot" },
		{ key: "prioritised", label: "Prioritised", icon: "circle-star" },
		{ key: "active", label: "Active", icon: "circle-dot-dashed", spin: true },
		{ key: "hold", label: "On Hold", icon: "circle-pause" },
		{ key: "blocked", label: "Blocked", icon: "circle-stop" },
		{ key: "review", label: "Review", icon: "circle-user-round" },
		{ key: "completed", label: "Completed", icon: "circle-check-big" },
		{ key: "surpassed", label: "Surpassed", icon: "circle-minus" },
		{ key: "recurring", label: "Recurring", icon: "circle-fading-arrow-up" },
	];

	/** Returns the Lucide icon component for the given status string. */
	export function statusIcon(status: string): Component {
		const def = resolveStatusFromFallback(status);
		return ICON_MAP[def.icon] ?? CircleIcon;
	}

	/** Returns the display label for the given status string. */
	export function statusLabel(status: string): string {
		return resolveStatusFromFallback(status).label;
	}

	function resolveStatusFromFallback(status: string): StatusDefinition {
		const key = status.toLowerCase();
		return FALLBACK_STATUSES.find((s) => s.key === key) ?? { key, label: status, icon: "circle" };
	}
</script>

<script lang="ts">
	import { cn } from "../../utils/cn.js";
	import { getStores } from "../../testing/mock-stores.js";

	let {
		status,
		mode = "badge",
	}: {
		status: string;
		mode?: "badge" | "dot" | "inline";
	} = $props();

	function resolveStatus(statusKey: string): StatusDefinition {
		const stores = getStores();
		const statuses = stores.projectStore?.settings?.statuses ?? FALLBACK_STATUSES;
		const key = statusKey.toLowerCase();
		const found = statuses.find((s: { key: string }) => s.key === key);
		return found ? { key: found.key, label: found.label, icon: found.icon ?? "circle" } : { key, label: statusKey, icon: "circle" };
	}

	const def = $derived(resolveStatus(status));
	const Icon = $derived(ICON_MAP[def.icon] ?? CircleIcon);
	const isSpinning = $derived(def.spin === true);
</script>

{#if mode === "dot"}
	<Icon class={cn("inline-block h-3.5 w-3.5 shrink-0 text-muted-foreground", isSpinning && "status-spin")} />
{:else if mode === "inline"}
	<span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
		<Icon class={cn("h-3.5 w-3.5 shrink-0", isSpinning && "status-spin")} />
		<span>{def.label}</span>
	</span>
{:else}
	<span class="inline-flex items-center gap-1.5 rounded border border-border bg-muted/30 px-1.5 py-0.5 text-xs text-muted-foreground">
		<Icon class={cn("h-3 w-3 shrink-0", isSpinning && "status-spin")} />{def.label}
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
