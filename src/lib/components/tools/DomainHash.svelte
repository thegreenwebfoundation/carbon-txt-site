<script>
	import { enhance } from '$app/forms'
</script>

<form class="form" action="?/domainHash" method="POST" use:enhance>
	<fieldset class="border pl-4 pr-4 pb-4 rounded-md mb-[1rem]">
		<legend class="text-2xl pl-2 pr-2">Green Web Foundation credentials:</legend>
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Username</label>
			<div class="flex gap-3 flex-wrap">
				<input class="form-input flex-none lg:max-w-[80%]" type="text" id="gwf-username" name="gwf-username" required />
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<label for="carbon-txt-url">Password</label>
			<div class="flex gap-3 flex-wrap">
				<input class="form-input flex-none lg:max-w-[80%]" type="password" id="gwf-password" name="gwf-password" required />
			</div>
		</div>
	</fieldset>
	<div class="flex flex-col gap-1">
		<label for="carbon-txt-url">Domain</label>
		<div class="flex gap-3 flex-wrap">
			<input class="form-input flex-none lg:max-w-[80%]" type="text" id="carbon-txt-domain" name="carbon-txt-domain" required placeholder="example.com" />
			<button type="submit" class="btn" on:click|once>Submit</button>
		</div>
	</div>
</form>
