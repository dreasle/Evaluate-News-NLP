function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputUrl = document.getElementById('url').value
    console.log(`Input URL: ${inputUrl}`)
    // Client.checkForName(inputUrl)

    // Async POST request to update Url on server
    const updateData = async ( url = '', data = {})=>{
        try {
            const response = await fetch(url, {
                method: 'POST', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
                // body: data
            });
        } catch(error) {
            console.log("error", error);
        }
    }

    // Post URL on server
    console.log("About to call updateData")
    updateData('/update', {'u': inputUrl});
    console.log("After calling updateData")

    // fetch('http://localhost:8081/aylien')
    fetch('/aylien')
    .then(res => res.json())
    .then(function(res) {

        document.getElementById('results').innerHTML = `Polarity: ${res.polarity}<br> Subjectivity: ${res.subjectivity}<br>Text: ${res.text}`
    })
}

export { handleSubmit }
