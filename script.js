function get_curr_time() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
   
    const now = new Date();

    let hrs = now.getHours() % 12 || 12;
    let mins = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = now.getHours() >= 12 ? "PM" : "AM";

    const time = `${hrs}:${mins}:${sec} ${ampm}`;

    // Format the date as 'Month Day, Year'
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long', // 'Monday'
        year: 'numeric', // '2025'
        month: 'long',   // 'March'
        day: 'numeric'   // '16'
    });

    timeElement.innerText = time;
    dateElement.innerText = date;

    // Fetch the random joke and display it
 
}

function get_joke() {
    const jokeElement = document.getElementById("joke");

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            console.log("API Response Status:", response.status); // Log HTTP status
            return response.json();
        })
        .then(jokeData => {
            console.log("Joke Data:", jokeData); // Log response data
            if (jokeData && jokeData.setup && jokeData.punchline) {
                jokeElement.innerText = `${jokeData.setup} - ${jokeData.punchline}`;
            } else {
                jokeElement.innerText = "Failed to load joke.";
            }
        })
        .catch(error => {
            jokeElement.innerText = "Error fetching joke.";
            console.error("Fetch error:", error);
        });
}



get_joke();
setInterval(get_curr_time, 1000);
get_curr_time();