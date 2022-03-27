
<template lang="pug">
  JustSidebar(
    routes="{routeItems}"
  )
  Router(url="{url}")
    Route(path="/")
    Route(path="login")
      Login
</template>

<script lang="ts">
import { Router, Route, Link } from "svelte-routing";

import Login from './views/Login.svelte';
import Shortener from './views/Shorten/Shortener.svelte';

import JustSidebar from "./components/JustSidebar.svelte";

export let url = ''; //This property is necessary declare to avoid ignore the Router

export let name: string = '';

export const routeItems = [
  {
    name: 'Login',
    path: 'login',
  },
]
</script>
