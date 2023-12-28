<h2>Riddles</h2>
{#each riddles as item}
<center>
    <button class="button" on:click="{() => {window.location.href = `riddle/&q=${item.id}`}}">{item.copy}</button>
</center>
{/each}


<script>
    import { onMount } from "svelte";

    let riddles =  [
        {
            "copy": "They just wanna have fun",
            "id": 1
        },
        {
            "copy": "Treasure in treasure boxes",
            "id": 2
        },
        {
            "copy": "Where secrets are shared, and drinks are poured",
            "id": 3
        },
        {
            "copy": "Knock three times, and whisper the password",
            "id": 4
        },
        {
            "copy": "A box of surprises",
            "id": 5
        }
    ]
</script>

<style>
    .button {
        max-width: 100%;
        width: 100%;
        margin-bottom: 2rem;
    }
</style>