<script lang="ts">
	import * as AlertDialog from "../alert-dialog/index.js";
	import { Button } from "../button/index.js";

	let {
		open = $bindable(false),
		title = "Delete permanently?",
		description = "This action cannot be undone.",
		confirmLabel = "Delete",
		confirmVariant = "destructive",
		onConfirm,
	}: {
		open: boolean;
		title?: string;
		description?: string;
		confirmLabel?: string;
		confirmVariant?: "destructive" | "default";
		onConfirm: () => void;
	} = $props();

	function handleConfirm() {
		onConfirm();
		open = false;
	}
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>{title}</AlertDialog.Title>
			<AlertDialog.Description>{description}</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<Button variant={confirmVariant} onclick={handleConfirm}>{confirmLabel}</Button>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
