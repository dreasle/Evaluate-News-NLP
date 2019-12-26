function handleSubmit(event) {
    console.log("::: Running handleSubmit :::")

    event.preventDefault()

    // Get url string
    let inputUrl = document.getElementById('url').value
    console.log(`Input URL: ${inputUrl}`)
    
    // Verify url before getting sentiment
    if (Client.verifyUrl(inputUrl)) {
        // Change color of input box to green
        document.getElementById('url').style.borderColor = 'green'

        // Async POST request to get sentiment from valid url
        const getSentiment = async ( url = '', data = {})=>{
            try {
                const response = await fetch(url, {
                    method: 'POST', 
                    credentials: 'same-origin', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(function(res) {
                    document.getElementById('results').innerHTML = `Polarity: ${res.polarity}<br> Subjectivity: ${res.subjectivity}<br>Text: ${res.text}`
                })
            } catch(error) {
                console.log("ERROR: ", error);
            }
        }
        getSentiment('/sentiment', {'sentmturl': inputUrl});
    } else {
        // Log error and raise alert
        console.log("ERROR: URL invalid")
        alert("Please use a valid URL")

        // Change color of input box to red
        document.getElementById('url').style.borderColor = 'red'
    }
}

export { handleSubmit }
