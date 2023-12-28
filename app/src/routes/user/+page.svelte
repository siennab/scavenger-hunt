
<center>
    <h2>Your Name</h2>
    <input type="text" bind:value={name}  />
    <a class="button" on:click="{submitName(name)}"> Next</a>
</center>

<script>
    import { onMount } from "svelte";
    import { browser } from '$app/environment'

    let name = '';

    let submitName = (name) => {
        if(browser) {
            window?.localStorage.setItem('sh-playerName', name );
            window.location.href='/riddles';
        }
    }

    onMount(() => {
        let playerName = window.localStorage.getItem('sh-playerName');
        if (playerName) {
            name = playerName;
        }
    });
</script>
