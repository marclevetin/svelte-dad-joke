<script>
  import { onMount } from "svelte";
  import Joke from "./Joke.svelte";
  let joke;
  let gettingJoke = false;
  onMount(async () => {
    joke = getNewJoke();
  });

  async function getNewJoke() {
    const newJoke = await fetchRandomJoke();

    joke = newJoke;
  }

  async function fetchRandomJoke() {
    gettingJoke = true;
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    const json = await res.json();
    const joke = json.joke;
    gettingJoke = false;

    return joke;
  }
</script>

<style>

</style>

<h2>Your Random Dad Joke</h2>
<p>Click the button and get a joke!</p>
<button on:click={getNewJoke}>Get a new joke!</button>
<Joke text={joke} />
