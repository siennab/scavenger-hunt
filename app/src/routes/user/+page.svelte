
<center>
    <h2>Your Name</h2>
    <input type="text" bind:value={name}  />
    <button class="button" onclick="{submitName(name)}"> Next</button>
</center>

<script>
    import { onMount } from "svelte";

    let name = '';

    let submitName = (name) => {
       // window.localStorage.setItem('sh-playerName', name );
    }

    onMount(() => {
        let playerName = window.localStorage.getItem('sh-playerName');
        if (playerName) {
            name = playerName;
        }
    });
</script>
