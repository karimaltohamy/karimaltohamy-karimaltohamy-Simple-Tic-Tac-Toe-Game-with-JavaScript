let items = document.querySelectorAll(".item");
let restart = document.querySelector("button");
let title = document.querySelector("h1");
let itemsContainer = document.querySelector(".items")

let xText = "X";
let oText = "O";
let currentPlayer = xText;
let spaces = Array(9).fill(null);



items.forEach((item) => {
    item.addEventListener("click",function () {
        let id = item.attributes.id.value
        item.innerHTML = currentPlayer;
        spaces[id] = currentPlayer;

        

        if (playerHasWon() !== false) {
            title.innerHTML = `${currentPlayer} has won!`
            let nums = playerHasWon();
            nums.map((num) => items[num].style.backgroundColor = "#2d414b");
            itemsContainer.style.pointerEvents = "none";
        }else {
            currentPlayer = currentPlayer == xText ? oText : xText
            title.innerHTML = currentPlayer
        }
    })
});

let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a,b,c] = condition;
        if ((spaces[a] == spaces[b] && spaces[a] == spaces[c]) && spaces[a] != null) {
            return [a,b,c]
        }
    }
    return false 
}

// funcyion restart 

restart.addEventListener("click", restartfun);

function restartfun() {
    title.innerHTML = "TIC TAC TOE";
    currentPlayer = xText;
    spaces.fill(null);

    items.forEach((item) => {
        item.innerHTML = ""
        item.style.backgroundColor = ""
    })
    itemsContainer.style.pointerEvents = "none";
}
