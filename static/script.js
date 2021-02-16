//alert("Hello World!");

window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        // Everything you want to do when button is clicked below
        console.log('Button was clicked!'); // console.log is like printing in JS!
        
        const element = document.getElementById("new");       //getting the div
        element.innerHTML = ""                              //removing all the content in div(will be adding new)

        const userText = document.getElementById('userInput').value;

        const topic = document.getElementById("topic");
        topic.innerHTML = userText

        const url = '/search/' + userText; // This should remind you of APIs in Python!
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
            .then(data => { // .then will only run the function *once* the data is fetched from the internet
                console.log(data); // See what this logs!
                
                for (let i = 0; i < 10; i++) {

                    //creating new div
                    const newDiv = document.createElement('div');
                    newDiv.classList.add("item")
                    
                    //heading of the article
                    const header = document.createElement("p")
                    const hText = document.createTextNode(data['headlines'][i])
                    header.appendChild(hText)
                    header.style.fontWeight = "bold"
    
                    
                    //article snippets
                    const info = document.createElement("p")
                    const infoText = document.createTextNode(data['snippets'][i])
                    info.appendChild(infoText)
    
                    
                    //append heading and text to the div
                    newDiv.appendChild(header)
                    newDiv.appendChild(info)

                    element.appendChild(newDiv) // appending div 
                }
                
                
        }); // end of window.fetch
        
        
    
    }); //end of coolButton

}; //end of window.onload
