<script>
    import { base } from "$app/paths";
    import riddles from "../../config/riddles.js";
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, addDoc, getDocs, collection, where, query } from "firebase/firestore";

    let db = null;
    let answeredRiddleIds = [];
    let loaded = false;
    let countdown = "0:0:0";
 

    onMount(() => {
        let playerName = localStorage.getItem('sh-playerName');
        const firebaseConfig = {
            apiKey: "AIzaSyDPp3Yxy7rQNCy10DcMR8wY2227HoU_tyg",
            authDomain: "nye-scavenger-hunt.firebaseapp.com",
            projectId: "nye-scavenger-hunt",
            storageBucket: "nye-scavenger-hunt.appspot.com",
            messagingSenderId: "471479988691",
            appId: "1:471479988691:web:21e77b6bd4348bbc31bf26",
        };


        if (!playerName) {
            window.location.href = `${base}/user`;
        } else {
            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);

            getUserAnswers(playerName).then((answers) => {
                answeredRiddleIds = answers.map((a) => a.questionId);
                loaded = true;
            });
        }

        countdownToMidnight();
    });

    async function getUserAnswers(userName) {
        return getDocs(query(collection(db, "user-answers"), where('name', '==', userName))).then((res) => {
            return res.docs.map((doc) => doc.data());
        });
    }

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

{#if loaded}
<center class="fade-in">
<h1><center>The Forgotten Speakeasy </center></h1>
<a class="inline" href={`${base}/leaderboard/`}>View Leaderboard &gt;</a>
{#each riddles as item}
    <center>
        <button
            disabled={answeredRiddleIds.includes(item.id.toString())}
            class="button"
            on:click={() => {
                window.location.href = `${base}/riddle?q=${item.id}`;
            }}>{item.copy}</button
        >
    </center>
{/each}
    <h4>{countdown} until midnight</h4>

</center>
{/if}   

<style>
    .button {
        max-width: 100%;
        width: 100%;

    }

    button:disabled {
            opacity: 0.5;
        }
</style>
