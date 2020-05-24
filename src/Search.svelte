<script>
import { onMount } from 'svelte';

// needed to overcome console warning in routing library
// https://github.com/EmilTholin/svelte-routing/issues/122
export let location; 

let isLoading = false;
let allTheJokes = [];
let term;
let lastSearchTerm = '';

onMount(async () => {
    allTheJokes = await getAllJokes();
    document.getElementById('search-term').focus();
})

function clearForm() {
    term = null;
    document.getElementById('search-term').focus();
}

async function handleSubmit() {
    const newJokes = await getAllJokes(term);
    lastSearchTerm = term;
    allTheJokes = newJokes;
    return term = newJokes.length ? null : term;
}

async function getAllJokes(term) {
    isLoading = true;
    const res = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, { headers: { Accept: 'application/json' } });
    const json = await res.json();
    const allTheNewJokes = json.results || [];

    isLoading = false;
    return allTheNewJokes;
}
</script>
<style></style>

<h2>Search for a Joke</h2>
<form on:submit|preventDefault={handleSubmit}>
    <label>Search term
        <input type='text' id='search-term' bind:value={term}/>
    </label>
    <button>Search</button>
</form>
{#if allTheJokes.length}
    Your search for {lastSearchTerm} returned:
    <ol>
        {#each allTheJokes as joke}
            <li>{joke.joke}</li>
        {/each}
    </ol>
{:else if !allTheJokes.length && lastSearchTerm}
    <p>There are no jokes for {lastSearchTerm}.  <button on:click={clearForm}>Try again</button></p>
{:else if isLoading}
    <p>Loading</p>
{/if}
