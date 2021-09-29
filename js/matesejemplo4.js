$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "8/8/8/4k3/8/8/8/4K2Q"
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "8/8/8/4k3/8/8/8/4K2Q",
        "8/8/2Q5/4k3/8/8/8/4K3",
        "8/8/2Q5/8/3k4/8/8/4K3",
        "8/8/2Q5/8/3k4/8/3K4/8",
        "8/8/2Q5/4k3/8/8/3K4/8",
        "8/8/2Q5/4k3/8/4K3/8/8",
        "8/8/2Q5/5k2/8/4K3/8/8",
        "8/8/3Q4/5k2/8/4K3/8/8",
        "8/8/3Q4/6k1/8/4K3/8/8",
        "8/8/4Q3/6k1/8/4K3/8/8",
        "8/8/4Q3/8/7k/4K3/8/8",
        "8/8/6Q1/8/7k/4K3/8/8",
        "8/8/6Q1/8/8/4K2k/8/8",
        "8/8/6Q1/8/8/5K1k/8/8",
        "8/8/6Q1/8/7k/5K2/8/8",
        "8/8/8/8/6Qk/5K2/8/8"
    ];

    function clickInitialPositionBtn() {
        board.position("8/8/8/4k3/8/8/8/4K2Q")
        indice = 0;
    }

    $("#initialPositionBtn").on("click", clickInitialPositionBtn);
    $("#antMovimiento").on("click", clickantMovimiento);
    $("#flipOrientationBtn").on("click", board.flip);

    function clicksigMovimiento() {
        if (indice < 15) {
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
