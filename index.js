<script src="https://js.puter.com/v2/"></script>

<script>
    (async () => {
        await puter.ready();
        const params = new URLSearchParams(window.location.search);
        const gameId = params.get('id');
        
        if (!gameId) {
            console.error("No Game ID found in URL.");
            return;
        }
        try {
            const response = await puter.net.fetch('https://polytoria.com/api/places/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    placeID: parseInt(gameId)
                })
            });

            const result = await response.json();
            console.log('Join successful:', result);            
        } catch (error) {
            console.error('CORS-free request failed:', error);
        }
    })();
</script>
