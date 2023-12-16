
<center>
    <h2>Your Name</h2>
    <input bind:value={name}  />
    <button class="button" onclick="{submitName(name)}"> Next</button>
</center>

<script>
    let name = '';

    let submitName = (name) => {
        window.localStorage.setItem('sh-playerName', name );
    }
</script>
