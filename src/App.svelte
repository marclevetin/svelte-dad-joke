<script>
  export let url = '';
  import Search from "./Search.svelte";
  import Random from "./Random.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import FullPageTemplate from './FullPageTemplate.svelte';

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<style>

</style>

<header>
  <h1>Dad Jokes</h1>
  <p>Now in Svelte.js</p>
</header>
<Router url="{url}">
  <nav>
      <Link to='/' getProps="{getProps}">Random</Link>
      <Link to='search' getProps="{getProps}">Search</Link>
  </nav>
  <FullPageTemplate>
      <Route path='search' component="{Search}"></Route>
      <Route path='/'><Random /></Route>
  </FullPageTemplate>
</Router>
<footer>
  <p>This is the footer</p>
</footer>
