<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { html } from '@codemirror/lang-html';
	import { exercises } from './data.js';
	let curExercise = -1;
	let input;
	const setExercise = function (exercise, i) {
		curExercise = i;
		input = exercise.code;
	};
	$: {
		if ((input || input === '') && curExercise + 1) {
			exercises[curExercise].code = input;
		}
	}
</script>

<nav class="nav">
	<ul class="list_exercises">
		{#each exercises as exercise, i}
			<li class="item_exercise">
				<button class="btn_exercise" on:click={() => setExercise(exercise, i)}
					>{exercise.name}</button
				>
			</li>
		{/each}
	</ul>

	<h1 class="name_exercise">
		{exercises[curExercise]?.name ? exercises[curExercise]?.name : ''}
	</h1>
	<div class="container_btn-clear">
		<button
			class="btn_exercise btn_exercise-clear"
			on:click={() => {
				curExercise = -1;
				input = '';
			}}>Clear</button
		>
	</div>
</nav>
<div class="container_main">
	<div class="container_editor">
		<div class="container_codemirror">
			<CodeMirror
				bind:value={input}
				lang={html()}
				styles={{
					'&': {
						width: '100%',
						height: '100%'
					}
				}}
			/>
		</div>
	</div>
	<div class="container_output">
		<iframe class="iframe" title="Output" srcdoc={input} sandbox></iframe>
	</div>
</div>
<footer class="footer">
	<span class="footer_text"
		>Created by <a target="_blank" href="https://github.com/NMilutin">NMilutin</a> with
		<a target="_blank" href="https://svelte.dev">Svelte</a></span
	>
</footer>

<!-- TODO Vezbe (Box Model, Flexbox * n, Tranzicije) -->
<style>
	.nav {
		min-height: 10vh;
		display: flex;
		align-items: center;
		padding: 0 40px;
		justify-content: space-between;
	}
	.list_exercises {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		gap: 10px;
		align-items: center;
		flex: 2;
	}
	.item_exercise {
		flex: 1;
	}
	.btn_exercise {
		border: 2px solid #3e3e3e;
		background-color: #f1f1f1;
		border-radius: 4px;
		height: 30px;
		width: 100%;
		transition: all 0.2s ease-out;
	}
	.btn_exercise:hover {
		background-color: #e3e3e3;
		transform: translateY(5px);
	}
	.name_exercise {
		text-align: center;
		flex: 1;
	}
	.container_btn-clear {
		flex: 2;
		display: flex;
		justify-content: end;
	}
	.btn_exercise-clear {
		width: revert;
	}
	.container_main {
		width: 100%;
		display: flex;
		min-height: 80vh;
		max-height: 80vh;
		padding: 16px 32px;
	}
	.container_editor,
	.container_output {
		flex: 1;
		max-height: 100%;
		max-width: 50%;
		border: 2px solid #3e3e3e;
		border-radius: 8px;
		padding: 8px 16px;
	}
	.container_editor {
		display: flex;
		flex-direction: column;
		padding: 8px 0;
		border-right: none;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		gap: 16px;
	}
	.container_output {
		border-left: none;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
	.container_codemirror {
		flex: 1;
		border: 1px solid #ddd;
		border-left: none;
		max-height: 100%;
	}
	:global(.container_codemirror > :only-child) {
		height: 100%;
		max-height: 100%;
	}

	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 4vh;
		border-top: 1px solid #3e3e3e;
		justify-content: center;
		align-items: center;
		font-size: small;
	}
	.footer_text a:link {
		color: #4d4d4d;
	}
	.footer_text a:visited {
		color: #2a2a2a;
	}
	.footer_text a:hover {
		color: #8e8e8e;
	}
	.footer_text a:active {
		color: #5e5e5e;
	}

	:global(body) {
		margin: 0;
	}
	* {
		box-sizing: border-box;
		font-family: monospace;
		outline: none;
	}
</style>
