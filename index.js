document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get the parameters from the current URL
    // If URL is: site.com/page?id=1822
    const urlParams = new URLSearchParams(window.location.search);
    
    // 2. Pull the specific parameter named "id"
    const gameId = urlParams.get('id');

    if (gameId) {
        console.log(`Found Game ID: ${gameId}. Sending join request...`);

        const url = 'https://polytoria.com/api/places/join';
        const payload = { placeID: parseInt(gameId) }; // Convert to number just in case

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
        console.error("No 'id' found in the URL parameters!");
    }
});
