
<center>
    <h2>Your Name</h2>
    <input type="text" bind:value={name}  />
    <button class="button" on:click="{submitName(name)}">Next</button>
</center>

<script>
    import { onMount } from "svelte";
    import { browser } from '$app/environment'
    import { base } from "$app/paths";


    let name = '';

    let submitName = (name) => {
        if(browser) {
            window?.localStorage.setItem('sh-playerName', name );
            window.location.href= `${base}/riddles`;
        }
    }

    onMount(() => {
        let playerName = window.localStorage.getItem('sh-playerName');
        if (playerName) {
            name = playerName;
        }
    });
</script>
