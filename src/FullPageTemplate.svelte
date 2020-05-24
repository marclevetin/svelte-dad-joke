<script>
    import { fly, fade } from 'svelte/transition';
</script>
<style>
    main {
        background: red;
    }
</style>

<!-- Fade is not working -->
<!-- See https://github.com/EmilTholin/svelte-routing/issues/66 -->
<main transition:fade="{{ duration: 2000 }}">
    <slot>Something went wrong</slot>
</main>