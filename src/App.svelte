<script lang="ts">
	import { Router, Route, Link } from "svelte-routing";

	import JustSidebar from "./components/Common/JustSidebar.svelte";
	import Login from './views/Login.svelte';
	import Shortener from './views/Shorten/Shortener.svelte';

	export let url = ''; //This property is necessary declare to avoid ignore the Router

	export let name;
</script>

<JustSidebar />

<style>
	@import './scss/main';
	@import './scss/variable';
</style>