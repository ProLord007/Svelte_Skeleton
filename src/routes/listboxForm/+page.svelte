<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeSingle: Writable<string> = writable('');

	const submitWithListBoxSelection: SubmitFunction = ({ data}) => {
		data.append("selectedRegion", $storeSingle)
	
		return async ({ update }) => {
		  update();
		};
	  }
</script>

<div class="flex justify-center mt-4">
	<form method="POST" use:enhance={submitWithListBoxSelection}>
			<div class="max-w-prose flex flex-col">
			<label>
			  Email
			  <input name="email" type="email">
			</label>
			<label>
			  Password
			  <input name="password" type="password">
			</label>
			<div class="card p-4 mt-2">
				<ListBox selected="{storeSingle}" label="Region:">
					<ListBoxItem value={"EU West"}>EU West</ListBoxItem>
					<ListBoxItem value={"US East"}>US East</ListBoxItem>
				</ListBox>
			</div>
			<button class="btn btn-filled-primary btn-base mt-3">Log in</button>
		</div>
	</form>
</div>
