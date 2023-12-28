<script>
    export let data;

    import { onMount } from "svelte";
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore, addDoc, collection } from "firebase/firestore";

    let riddles = [];
    let activeRiddle = null;
    let db = null;
    let answer = null;

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

        fetch("/riddles.json")
            .then((r) => r.json())
            .then((res) => {
                riddles = res.riddles;
                activeRiddle = riddles.find((r) => r.id == data.slug);
            });
    });

    async function updateAnswer() {
        await addDoc(collection(db, "user-answers"), {
            name: window.localStorage.getItem("sh-playerName"),
            answerId: answer,
            questionId: data.slug,
        });
    }
</script>

{#if activeRiddle}
    <h2>{activeRiddle.copy}</h2>

    <input type="number" bind:value={answer} />
    <button class="button" on:click={updateAnswer()}> Submit</button>
{/if}
