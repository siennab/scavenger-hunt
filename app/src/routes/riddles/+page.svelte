<script>
    import { base } from "$app/paths";
    import riddles from "../../config/riddles.js";
</script>

<div class="fade-in">
<h1><center>The Forgotten Speakeasy </center></h1>
{#each riddles as item}
    <center>
        <button
            class="button"
            on:click={() => {
                window.location.href = `${base}/riddle?q=${item.id}`;
            }}>{item.copy}</button
        >
    </center>
{/each}
</div>

<style>
    .button {
        max-width: 100%;
        width: 100%;
    }
</style>
