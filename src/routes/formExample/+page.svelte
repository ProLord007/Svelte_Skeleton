<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { InputChip, ListBox, ListBoxItem, RangeSlider } from '@skeletonlabs/skeleton';

	const defaultRegion = '';
	const defaultNewsCategories = ['technology', 'food', 'business'];

	let region = defaultRegion;
	let interestedInCategories = defaultNewsCategories;
	let frequency = 50;

	const submitWithListBoxSelection: SubmitFunction = () => {
		region = defaultRegion;
		interestedInCategories = defaultNewsCategories;
		return async ({ update }) => {
			update();
		};
	};
</script>

<div class="mt-4 flex justify-center">
	<form method="POST" use:enhance={submitWithListBoxSelection}>
		<div class="flex max-w-prose flex-col">
			<label>
				Name
				<input class="input" name="name" type="text" />
			</label>
			<label>
				Email
				<input class="input" name="email" type="email" />
			</label>
			<div class="card mt-2 p-4">
				<ListBox label="Region:">
					<ListBoxItem bind:group={region} value="EU West" name="region">EU West</ListBoxItem>
					<ListBoxItem bind:group={region} value="US East" name="region">US East</ListBoxItem>
				</ListBox>
			</div>
			<InputChip
				name="interestedInCategory"
				bind:value={interestedInCategories}
				placeholder="Add news categories that interest you"
			/>
			<RangeSlider name="frequency" bind:value={frequency} max={100} step={5} ticked
				>Contact frequency</RangeSlider
			>
			<button class="btn-filled-primary btn mt-3">Sign up</button>
		</div>
	</form>
</div>
