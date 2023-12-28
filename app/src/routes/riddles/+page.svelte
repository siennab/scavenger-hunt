<h2>Riddles</h2>
{#each riddles as item}
<center>
    <button class="button" on:click="{() => {window.location.href = `riddle/&q=${item.id}`}}">{item.copy}</button>
</center>
{/each}


<script>
    import { onMount } from "svelte";

    let riddles = [];

    onMount(() => {
        fetch('/riddles.json')
            .then(r => r.json())
            .then(data => {
                riddles = data.riddles;
            });
    });

</script>

<style>
    .button {
        max-width: 100%;
        width: 100%;
        margin-bottom: 2rem;
    }
</style>