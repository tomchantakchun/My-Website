var turnCounter = 0
var player1array = []
var player2array = []


$("td").click(function () {
    var id = $(this).attr('id');
    turnCounter++;
        if ($(`#${id} p`).is(":hidden") && turnCounter % 2 == 1) {
        $(`#${id} p`).slideDown("fast", function () {
            $("h2").replaceWith("<h2><span>Player 2's turn</span></h2>")
            player1array.push(Number(id))
            checkWinner()
        })
    } else if ($(`#${id} p`).is(":hidden") && turnCounter % 2 == 0) {
         $(`#${id} p`).replaceWith(`<p>X</p>`);
        $(`#${id} p`).slideDown("fast", function () {
            $("h2").replaceWith("<h2><span>Player 1's turn</span></h2>")
            player2array.push(Number(id))
            checkWinner()
        })
    } else {
        alert("Occupied Cell")
    };
    console.log(turnCounter)
    console.log(player1array)
    console.log(player2array)
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

            } else if (winner2) {
                alert("Player 2 Wins");
                $("h2").replaceWith("<h2><span>Player 2 Won!</span></h2>");
                $("p").hide()
                turnCounter = 0
                winner1 = false
                winner2 = false
                player1array = []
                player2array = []
            }
        }
    }

    if (turnCounter == 9 && winner1 === false && winner2 === false) {
        console.log(winner1)
        console.log(winner2)
        alert("Draw!");
        $("h2").replaceWith("<h2><span>Draw Game!</span></h2>");
        $("p").hide()
                turnCounter = 0
                winner1 = false
                winner2 = false
                player1array = []
                player2array = []
    }
}




