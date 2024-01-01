<script>
    import { page } from '$app/stores';
    import { beforeUpdate, onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, addDoc, getDocs, collection, where, query, updateDoc, doc } from "firebase/firestore";
    import { base } from "$app/paths";
    import riddles from "../../config/riddles.js";

    let rdls = riddles;
    let activeRiddle = null;
    let db = null;
    let answer = null;
    let queryParam = null;
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
        activeRiddle = rdls.find((r) => r.id == queryParam);
    });

    beforeUpdate(() => {
        queryParam = $page.url.searchParams.get('q');
    });

    async function getSameAnswers(answer) {
        const queryParamSnapshot = await getDocs(query(collection(db, "user-answers"), where("answerId", "==", answer), where("questionId", "==", queryParam)));
        return queryParamSnapshot.docs;
    }

    async function updateAnswer() {
        if(!activeRiddle.valid_ids.includes(answer)) {
            error = "That's not a valid number! Try again.";
            return;
        }

        const answers = await getSameAnswers(answer);
        
        // Loop through all the answers and update their point values
        for (let i = 0; i < answers.length; i++) {
            const points = calculatePoints(answers.length + 1);
            await updateDoc(doc(db, "user-answers", answers[i].id), {
                points: points
            });
        }    
        
        const points = calculatePoints(answers.length);

        await addDoc(collection(db, "user-answers"), {
            name: window.localStorage.getItem("sh-playerName"),
            answerId: answer,
            questionId: queryParam,
            points: points,
        });

        window.location.href = `${base}/riddles/`;
    }

    function calculatePoints(answerCount) {
        let points = 100;
        if ( answerCount > 0 ) {
            points = 60;
            points = points - ((answerCount - 1) * 10);
        }
        return points;
    }
</script>

{#if activeRiddle}
<center class="fade-in">   
    <h1>The Forgotten Speakeasy</h1>
    <a class="inline" href={`${base}/riddles/`}>&lt; Go Back</a>
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