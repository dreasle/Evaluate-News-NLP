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
                    document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
                    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
                    document.getElementById('text').innerHTML = `Text: <br>${res.text}`
                })
            } catch(error) {
                console.log("ERROR: ", error);
            }
        }
        getSentiment('http://localhost:8081/sentiment', {'sentmturl': inputUrl});
    } else {
        // Log error and raise alert
        console.log("ERROR: URL invalid")
        alert("Please use a valid URL")

        // Change color of input box to red
        document.getElementById('url').style.borderColor = 'red'
    }
}

export { handleSubmit }
