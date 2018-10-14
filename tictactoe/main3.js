var turnCounter = 0
var player1array = []
var player2array = []
var remainarray = [1,2,3,4,5,6,7,8,9]

$("td").click(function () {
    var id = $(this).attr('id');    
        if ($(`#${id} p`).is(":hidden") && turnCounter % 2 === 0) {
            console.log(turnCounter)
            turnCounter++;
        $(`#${id} p`).replaceWith(`<p>O</p>`);
        $(`#${id} p`).slideDown("fast", function () {
            $("h2").replaceWith("<h2><span>Player 2's turn</span></h2>")
            player1array.push(Number(id));
            remainarray = remainarray.filter(e => e !== Number(id)); 
            checkWinner();
            $.when(checkWinner()).done(aiTom())
        })
    } else if ($(`#${id} p`).is(":hidden") && turnCounter % 2 != 0) {
        console.log(turnCounter)
        turnCounter++;
         $(`#${id} p`).replaceWith(`<p>X</p>`);
        $(`#${id} p`).slideDown("fast", function () {
            $("h2").replaceWith("<h2><span>Player 1's turn</span></h2>")
            player2array.push(Number(id))
            remainarray = remainarray.filter(e => e !== Number(id)); 
            checkWinner()
            
        })
    } else {
        alert("Occupied Cell")
    };
    console.log(turnCounter)
}
)


var winning = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
]


var checkWinner = () => {
    for (i = 0; i < 8; i++) {
        winner1 = winning[i].every(function (val) {
            return player1array.indexOf(val) !== -1;
        });
        winner2 = winning[i].every(function (val) {
            return player2array.indexOf(val) !== -1;
        })

        if (winner1 || winner2) {
            if (winner1) {
                alert("Player 1 Wins!");
                $("h2").replaceWith("<h2><span>Player 1 Won!</span></h2>");
                $("p").hide()
                turnCounter = 0
                winner1 = false
                winner2 = false
                player1array = []
                player2array = []
                remainarray = [1,2,3,4,5,6,7,8,9]
                console.log('win')
            } else if (winner2) {
                alert("Player 2 Wins");
                $("h2").replaceWith("<h2><span>Player 2 Won!</span></h2>");
                $("p").hide()
                turnCounter = 0
                winner1 = false
                winner2 = false
                player1array = []
                player2array = []
                remainarray = [1,2,3,4,5,6,7,8,9]
                console.log('win')
            }
        }
    }

    if (turnCounter == 9 && winner1 === false && winner2 === false) {
        alert("Draw!");
        $("h2").replaceWith("<h2><span>Draw Game!</span></h2>");
        $("p").hide()
                turnCounter = 0
                winner1 = false
                winner2 = false
                player1array = []
                player2array = []
                remainarray = [1,2,3,4,5,6,7,8,9]
    }
}

//AI Tom//

aiTom = () =>{
    if (turnCounter % 2 != 0 && turnCounter != 0){
    stupidChoice = remainarray[Math.floor(Math.random()*(remainarray.length - 1) + 1)]
    $(`#${stupidChoice}`).trigger('click')}}


// var winning = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
// var aiTom = () => {
//     if (turnCounter % 2 != 0 && turnCounter != 0){
//         winner9 = winning.filter(function() {
//             return !player1array.includes(); 
//           })
    
//     console.log(winner9)

// }}
