function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputUrl = document.getElementById('url').value
    console.log(`Input URL: ${inputUrl}`)
    // Client.checkForName(inputUrl)

    // Async POST request to get sentiment 
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
            console.log("error", error);
        }
    }

    // console.log("About to call getSentiment")
    getSentiment('/sentiment', {'sentmturl': inputUrl});
    // console.log("After calling getSentiment")
}

export { handleSubmit }
