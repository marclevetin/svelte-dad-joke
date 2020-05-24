<script>
  let joke;
  let gettingJoke = false;
  import Joke from "./Joke.svelte";
  import { onMount } from "svelte";

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

<main>
  <header>
    <h1>Dad Jokes</h1>
    <p>Now in Svelte.js</p>
  </header>
  <nav>
    <p>Nav elements will go now</p>
  </nav>
  <section>
    <h2>Your Random Dad Joke</h2>
    <p>Click the button and get a joke!</p>
    <button on:click={getNewJoke}>Get a new joke!</button>
    <Joke text={joke}/>
  </section>
  <footer>
    <p>This is the footer</p>
  </footer>
</main>
