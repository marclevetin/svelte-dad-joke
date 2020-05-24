<script>
import { onMount } from 'svelte';
// async getAllJokes({ commit }, term) {
//       try {
//         let response = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
//           headers: { Accept: "application/json"} 
//         }).then(data => data.json()).then(response => response.results);
//         commit("setAllJokes", response)
//       } catch {
//         commit("setAllJokes", [])
//       }
//     }

onMount(async () => {
    getAllJokes();
})

async function getAllJokes(term) {
    debugger;
    const res = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, { headers: { Accept: 'application/json' } });
    const json = await res.json();
    const allTheJokes = json.results || [];
}
</script>
<style></style>

<p>This is the Search component</p>
