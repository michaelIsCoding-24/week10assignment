//adding event listener to the button
document.getElementById('submit').addEventListener('click', () => {
    //making variables to call in the future, for the sake of simplicity
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    let gameTitle = document.getElementById('game-title').value;
    let releaseDate = document.getElementById('release-date').value;
    let developer = document.getElementById('developer').value

    //Adds a new row with whatever the user input is!
    row.insertCell(0).innerHTML = gameTitle;
    row.insertCell(1).innerHTML = releaseDate;
    row.insertCell(2).innerHTML = developer;
    
    // Clears the input boxes for ease of access
    gameTitle = '';
    releaseDate = '';
    developer = '';
});

