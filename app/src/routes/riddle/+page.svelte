<script>
    import { page } from '$app/stores';
    import { beforeUpdate, onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, addDoc, collection } from "firebase/firestore";
    import { base } from "$app/paths";
    import riddles from "../../config/riddles.js";

    let rdls = riddles;
    let activeRiddle = null;
    let db = null;
    let answer = null;
    let query = null;
    let error = null;

    onMount(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyDPp3Yxy7rQNCy10DcMR8wY2227HoU_tyg",
            authDomain: "nye-scavenger-hunt.firebaseapp.com",
            projectId: "nye-scavenger-hunt",
            storageBucket: "nye-scavenger-hunt.appspot.com",
            messagingSenderId: "471479988691",
            appId: "1:471479988691:web:21e77b6bd4348bbc31bf26",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        activeRiddle = rdls.find((r) => r.id == query);
    });

    beforeUpdate(() => {
        query = $page.url.searchParams.get('q');
    });

    async function updateAnswer() {
        if(!activeRiddle.valid_ids.includes(answer)) {
            error = "That's not a valid number! Try again.";
            return;
        }
        await addDoc(collection(db, "user-answers"), {
            name: window.localStorage.getItem("sh-playerName"),
            answerId: answer,
            questionId: query,
        });

        window.location.href = `${base}/riddles/`;
    }
</script>

{#if activeRiddle}
<center>   
     <h2>{activeRiddle.copy}</h2>
    <label for="answer">Enter the number of the label on the item you found</label><br /><br />
    <input type="number" bind:value={answer} />
    {#if error}
    <br />
    <small><br />{error}</small>
    {/if}
    <button class="button" on:click={updateAnswer}>&check;</button>
</center>
{/if}