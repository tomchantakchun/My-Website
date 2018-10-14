var turnCounter = 0
var player1array = []
var player2array = []


$("td").click(function () {
    var id = $(this).attr('id');
    if ($(`#${id}`).is(":empty") && turnCounter % 2 == 0) {
        $(`#${id}`).slideDown(0, function () {
            $(`#${id}`).append(`<p>O<p>`);
            $("h5").replaceWith("<h5><span>Player 2's turn</span></h5>")
            player1array.push(Number(id))
            turnCounter++;
            checkWinner()
        })
    } else if ($(`#${id}`).is(":empty") && turnCounter % 2 != 0) {
        $(`#${id}`).slideDown(0, function () {
            $(`#${id}`).append(`<p>X<p>`);
            $("h5").replaceWith("<h5><span>Player 1's turn</span></h5>")
            player2array.push(Number(id))
            turnCounter++;
            checkWinner()
        })
    } else {
        alert("Occupied Cell")
    }
}
)


var winning = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]
]


var checkWinner = (num) => {
    for (i = 0; i < 8; i++) {
        winner1 = winning[i].every(function (val) {    
            return player1array.indexOf(val) !== -1;
        })
        winner2 = winning[i].every(function (val) {    
            return player2array.indexOf(val) !== -1;
        })

        if (turnCounter == 9 && winner1 == false && winner2 == false){
            alert("Draw!");
            break;
        }

        if (winner1 || winner2){
            if (winner1){alert("Player 1 Wins!");}
            else {alert("Player 2 Wins")}}
    }

    console.log(winner1)
    console.log(winner2)

}





