function getWeather() {
    const location = document.getElementById('location').value.trim();
    document.getElementById('locationA').innerHTML = location;
    const apiKey = "epa7izm3zn278zwee4wd3bae8pyar838l6fminlu";
    const baseUrl = "https://www.meteosource.com/";

    fetch(`${baseUrl}api/v1/free/point?place_id=${location}&sections=all&language=en&units=auto&key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.current) {
                const temperature = data.current.temperature;
                const summary = data.current.summary;
                const tomorrow = data.timezone;
                document.getElementById('temperature').innerHTML = `${temperature}`;
                document.getElementById('summary').innerHTML = `${summary}`;
                document.getElementById('tweath').innerHTML = `${tomorrow}`;
            } else {
                throw new Error('Current weather data not found');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            weatherResultDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
}


