<h2>Riddles</h2>
{#each riddles as item}
<center>
    <button class="button" on:click="{() => {window.location.href = `/riddle/${item.id}`}}">{item.copy}</button>
    <br /> <br />
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