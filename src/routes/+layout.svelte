<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number> = writable(1);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
		<div class="flex justify-center"><h1>Collection of Skeleton Examples</h1></div>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile label="Home" title="Home" value={1} tag="a" href="/">💀</AppRailTile>
			<AppRailTile label="Form Example" title="Form Example" value={2} tag="a" href="/formExample">📝</AppRailTile>			
		</AppRail>		
	</svelte:fragment>
	<slot />
</AppShell>