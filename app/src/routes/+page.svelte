<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    let showContent = false;

    onMount(() => {
        const username = localStorage.getItem("sh-playerName");
        if (username) {
            window.location.href = `${base}/riddles`;
        }

        setTimeout(() => {
            showContent = true;
        }, 500)

    });
</script>

{#if showContent}
<div class="fade-in">
<h1>The Forgotten Speakeasy</h1>

<p>
    Welcome, intrepid explorers, to a once lively speakeasy turned silent
    sanctuary. The challenge? Find unique treasures hidden within these walls,
    but here's the twist – you must be the sole discoverer of each prize.
</p>

<p>
    Amidst the echoes of a bygone era, your mission is clear. Navigate the
    shadows, sift through forgotten corners, and uncover treasures others may
    overlook. It's a race against your fellow seekers, a test of cunning and
    observation.
</p>

<p>
    No ordinary scavenger hunt, this clandestine quest demands subtlety and
    strategy. The artifacts are numerous, but victory lies in singularity. Will
    you unravel the secrets left behind in this clandestine haven? The stage is
    set; let the silent hunt begin.
</p>
<br />

<center>
    <a href="{base}/user" class="button">Get Started</a>
</center>
</div>
{/if}