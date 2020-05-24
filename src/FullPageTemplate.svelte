<script>
    import { fly, fade } from 'svelte/transition';
</script>
<style>
    main {
        background: red;
    }
</style>

<!-- Fade is not working -->
<main transition:fade="{{ duration: 2000 }}">
    <slot>Something went wrong</slot>
</main>