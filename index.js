let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScoreCount= 0
let guestScoreCount= 0

function homeAddOne(){
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function homeAddTwo(){
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function homeAddThree(){
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function guestAddOne(){
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function guestAddTwo(){
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function guestAddThree(){
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeScoreCount= 0
    guestScoreCount= 0
}