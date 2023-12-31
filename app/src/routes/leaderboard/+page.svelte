<script>
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, addDoc, getDocs, collection, where, query } from "firebase/firestore";
    import { base } from "$app/paths";

    let leaders = [];
    let db = null;

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
        getPlayers().then((res) => {
            console.log(res);
            leaders = res;
        })
    });


    async function getPlayers() {
        const queryParamSnapshot = await getDocs(query(collection(db, "user-answers")));
        let data =  queryParamSnapshot.docs.map((doc) => doc.data());
        console.log(data);
        // Roll up the sum of points for each user
        const rolledUpData = data.reduce((acc, curr) => {
                const existingUser = acc.find(user => user.name === curr.name);
                if (existingUser) {
                    existingUser.points += curr.points;
                } else {
                    acc.push(curr);
                }
                return acc;
            }, []);

            // Use the rolled up data
       return rolledUpData.sort((a, b) => b.points - a.points);

    }
</script>

<center class="fade-in">   
    <h1>The Forgotten Speakeasy</h1>
    <a class="inline" href={`${base}/riddles/`}>&lt; Go Back</a>
    <h2>Leaderboard</h2>
    <table>
            <tr class="odd">
                <td>Name</td>
                <td>Points</td>
            </tr>
        {#each leaders as leader, index}
            <tr class={index % 2 === 0 ? 'even' : 'odd'}>
                <td><strong>{leader.name}</strong></td>
                <td>{leader.points}</td>
            </tr>
        {/each}
    </table>

</center>
<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
    }

    td {
        padding: 0.5rem;
    }

    .odd {
        background: #77988883;
    }

    .even {
        background: rgba(255, 255, 255, 0.3);
    }
</style>