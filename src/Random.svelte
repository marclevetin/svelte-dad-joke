<script>
  import { onMount } from "svelte";
  import Joke from "./Joke.svelte";
  let joke;
  let isLoading = false;

  onMount(async () => {
    joke = getNewJoke();
  });

  async function getNewJoke() {
    const newJoke = await fetchRandomJoke();

    joke = newJoke;
  }

  async function fetchRandomJoke() {
    isLoading = true;
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    const json = await res.json();
    const joke = json.joke;
    isLoading = false;

    return joke;
  }
</script>

<style>

</style>

<h2>Your Random Dad Joke</h2>
<p>Click the button and get a joke!</p>
<button on:click={getNewJoke}>Get a new joke!</button>
{#if !isLoading}
    <Joke text={joke} />
{:else}
    <p>Loading</p>
{/if}
