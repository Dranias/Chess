$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "7k/8/8/8/8/8/8/R6K"
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "7k/8/8/8/8/8/8/R6K",
        "7k/R7/8/8/8/8/8/7K",
        "6k1/R7/8/8/8/8/8/7K",
        "6k1/R7/8/8/8/8/6K1/8",
        "5k2/R7/8/8/8/8/6K1/8",
        "5k2/R7/8/8/8/5K2/8/8",
        "4k3/R7/8/8/8/5K2/8/8",
        "4k3/R7/8/8/4K3/8/8/8",
        "3k4/R7/8/8/4K3/8/8/8",
        "3k4/R7/8/3K4/8/8/8/8",
        "2k5/R7/8/3K4/8/8/8/8",
        "2k5/R7/3K4/8/8/8/8/8",
        "1k6/R7/3K4/8/8/8/8/8",
        "1k6/2R5/3K4/8/8/8/8/8",
        "k7/2R5/3K4/8/8/8/8/8",
        "k7/2R5/2K5/8/8/8/8/8",
        "1k6/2R5/2K5/8/8/8/8/8",
        "1k6/2R5/1K6/8/8/8/8/8",
        "k7/2R5/1K6/8/8/8/8/8",
        "k1R5/8/1K6/8/8/8/8/8",
    ];

    function clickInitialPositionBtn() {
        board.position("7k/8/8/8/8/8/8/R6K")
        indice = 0;
    }

    $("#initialPositionBtn").on("click", clickInitialPositionBtn);
    $("#antMovimiento").on("click", clickantMovimiento);
    $("#flipOrientationBtn").on("click", board.flip);

    function clicksigMovimiento() {
        if (indice < 19) {
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
