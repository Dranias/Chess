$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "8/8/8/4k3/8/8/8/4K2R"
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "8/8/8/4k3/8/8/8/4K2R",
        "8/8/8/4k3/8/8/4K3/7R",
        "8/8/8/3k4/8/8/4K3/7R",
        "8/8/8/3k4/8/4K3/8/7R",
        "8/8/8/8/2k5/4K3/8/7R",
        "8/8/8/7R/2k5/4K3/8/8",
        "8/8/8/7R/8/2k1K3/8/8",
        "8/8/8/8/7R/2k1K3/8/8",
        "8/8/8/8/7R/4K3/2k5/8",
        "8/8/8/8/2R5/4K3/2k5/8",
        "8/8/8/8/2R5/1k2K3/8/8",
        "8/8/8/8/2R5/1k1K4/8/8",
        "8/8/8/8/2R5/3K4/1k6/8",
        "8/8/8/8/1R6/3K4/1k6/8",
        "8/8/8/8/1R6/k2K4/8/8",
        "8/8/8/8/1R6/k1K5/8/8",
        "8/8/8/8/1R6/2K5/k7/8",
        "8/8/8/8/R7/2K5/k7/8",
        "8/8/8/8/R7/2K5/8/1k6",
        "R7/8/8/8/8/2K5/8/1k6",
        "R7/8/8/8/8/2K5/8/2k5",
        "8/8/8/8/8/2K5/8/R1k5"
    ];

    function clickInitialPositionBtn() {
        board.position("8/8/8/4k3/8/8/8/4K2R")
        indice = 0;
    }

    $("#initialPositionBtn").on("click", clickInitialPositionBtn);
    $("#antMovimiento").on("click", clickantMovimiento);
    $("#flipOrientationBtn").on("click", board.flip);

    function clicksigMovimiento() {
        if (indice < 21) {
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
