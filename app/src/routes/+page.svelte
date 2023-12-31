<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    let showContent = false;
    let countdown = "0:0:0";

    onMount(() => {
        const username = localStorage.getItem("sh-playerName");
        if (username) {
              window.location.href = `${base}/riddles`;
        }

        setTimeout(() => {
            showContent = true;
        }, 500)

        countdownToMidnight();

    });

    function countdownToMidnight() {
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        setInterval(() => {
            const now = new Date();
            const timeLeft = midnight - now;

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);

            countdown = `${hours}:${minutes}:${seconds}`;
        }, 1000);

    }

    
</script>

{#if showContent}
<div class="fade-in">
<h1>The Forgotten Speakeasy</h1>

<p>
    Welcome, intrepid explorers, to a once lively speakeasy turned silent
    sanctuary. The challenge? Find unique treasures hidden within these walls. 
</p>

<p>How to play:</p>

<ol>
    <li>Solve riddles, and find artifacts based on the answers. There will be multiple artifacts for each riddle, but you can only choose one.</li>
    <li>Artifacts will be labeled with a small numeric sticker. Enter the number you see. Make sure you are satisfied with this discovery, as you will only get one chance to enter.</li>
    <li>Scores are calculated based on how unique your discoveries are. Your score can change throughout the game as explorers make discoveries, so keep your eyes on the leaderboard and be stealthy.</li>
    <li>At midnight, the players with the three highest scores will win.</li>
        
</ol>

<center>
    <h4>{countdown} until midnight</h4>

</center>



<br />

<center>
    <a href="{base}/user" class="button">Explore</a>
</center>
</div>
{/if}