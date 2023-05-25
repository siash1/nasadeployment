function clickme(){
    let loadpic = "https://www.gamespot.com/a/uploads/screen_kubrick/1603/16030002/4111613-mha-01.png"
    document.getElementById("imgclick").src = loadpic
    console.log("clicked")
    document.getElementById("btnn").innerHTML = "Here"

    let endpoint = "https://api.nasa.gov/planetary/apod?api_key=JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6"

    console.log(endpoint)
    fetch(endpoint).then(function(response){
        return response.json();

}
).then( function(json){
    console.log(json);
    document.getElementById("imgclick").src = json.url
    document.getElementById("title").innerHTML = json.title
})
}