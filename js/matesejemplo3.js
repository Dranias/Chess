$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "7k/8/8/8/8/8/8/2B1KB2"
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "7k/8/8/8/8/8/8/2B1KB2",
        "7k/8/8/8/8/3B4/8/2B1K3",
        "8/6k1/8/8/8/3B4/8/2B1K3",
        "8/6k1/8/6B1/8/3B4/8/4K3",
        "8/5k2/8/6B1/8/3B4/8/4K3",
        "8/5k2/8/5BB1/8/8/8/4K3",
        "8/6k1/8/5BB1/8/8/8/4K3",
        "8/6k1/8/5BB1/8/8/5K2/8",
        "8/5k2/8/5BB1/8/8/5K2/8",
        "8/5k2/8/5BB1/8/6K1/8/8",
        "8/6k1/8/5BB1/8/6K1/8/8",
        "8/6k1/8/5BB1/7K/8/8/8",
        "8/5k2/8/5BB1/7K/8/8/8",
        "8/5k2/8/5BBK/8/8/8/8",
        "8/6k1/8/5BBK/8/8/8/8",
        "8/6k1/6B1/6BK/8/8/8/8",
        "6k1/8/6B1/6BK/8/8/8/8",
        "6k1/8/6BK/6B1/8/8/8/8",
        "5k2/8/6BK/6B1/8/8/8/8",
        "5k2/8/7K/6BB/8/8/8/8",
        "6k1/8/7K/6BB/8/8/8/8",
        "6k1/4B3/7K/7B/8/8/8/8",
        "7k/4B3/7K/7B/8/8/8/8",
        "7k/4B3/7K/8/6B1/8/8/8",
        "6k1/4B3/7K/8/6B1/8/8/8",
        "6k1/4B3/4B2K/8/8/8/8/8",
        "7k/4B3/4B2K/8/8/8/8/8",
        "7k/8/4BB1K/8/8/8/8/8"
    ];

    function clickInitialPositionBtn() {
        board.position("7k/8/8/8/8/8/8/2B1KB2")
        indice = 0;
    }

    $("#initialPositionBtn").on("click", clickInitialPositionBtn);
    $("#antMovimiento").on("click", clickantMovimiento);
    $("#flipOrientationBtn").on("click", board.flip);

    function clicksigMovimiento() {
        if (indice < 27) {
            board.position(posiciones[indice + 1]);
            indice = indice + 1;
        }
    }
    $("#sigMovimiento").on("click", clicksigMovimiento);

    function clickantMovimiento() {
        if (indice > 0) {
            board.position(posiciones[indice - 1]);
            indice = indice - 1;
        }
    }

    function miFuncion(index) {
        board.position(posiciones[index]);
        indice = index;
    }

    var moves = 1;
    var table = document.querySelector("#table");
    
    table.querySelectorAll("td").forEach(function (b) {
        if (b.id) {
            b.setAttribute("move", moves);
            b.addEventListener("click", function () {
                let move = b.getAttribute("move");
                miFuncion(move);
            });
            moves += 1;
        }
    });
});
