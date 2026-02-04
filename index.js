document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const gameId = urlParams.get('id');

    if (gameId) {
        const url = 'https://polytoria.com/api/places/join';
        const payload = { placeID: parseInt(gameId) };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            console.log('Join Success:', result);
        } catch (error) {
            console.error('Join failed:', error);
        }
    } else {
        console.error("no id found");
    }
});
