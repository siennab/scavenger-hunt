<h2>Riddles</h2>
{#each riddles as item}
<center>
    <button class="button" on:click="{() => {window.location.href = `${base}/riddle?q=${item.id}`}}">{item.copy}</button>
</center>
{/each}


<script>
    import { base } from "$app/paths";
    import riddles from "../../config/riddles.js";

</script>

<style>
    .button {
        max-width: 100%;
        width: 100%;
    }
</style>