<script>
  export let url = '';
  import Search from "./Search.svelte";
  import Random from "./Random.svelte";
  import { Router, Link, Route } from "svelte-routing";
</script>

<style>

</style>

<main>
  <header>
    <h1>Dad Jokes</h1>
    <p>Now in Svelte.js</p>
  </header>
  <Router url="{url}">
    <nav>
        <Link to='/'>Random</Link>
        <Link to='search'>Search</Link>
    </nav>
    <section>
        <Route path='search' component="{Search}"></Route>
        <Route path='/'><Random /></Route>
    </section>
  </Router>
  <footer>
    <p>This is the footer</p>
  </footer>
</main>
