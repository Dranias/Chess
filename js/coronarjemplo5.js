$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "8/8/8/8/4k3/8/3KP3/8"
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "8/8/8/8/4k3/8/3KP3/8",
        "8/8/8/8/4k3/4P3/3K4/8",
        "8/8/8/4k3/8/4P3/3K4/8",
        "8/8/8/4k3/8/3KP3/8/8",
        "8/8/8/3k4/8/3KP3/8/8",
        "8/8/8/3k4/4P3/3K4/8/8",
        "8/8/8/4k3/4P3/3K4/8/8",
        "8/8/8/4k3/4P3/4K3/8/8",
        "8/8/4k3/8/4P3/4K3/8/8",
        "8/8/4k3/8/4PK2/8/8/8",
        "8/8/5k2/8/4PK2/8/8/8",
        "8/8/5k2/4P3/5K2/8/8/8",
        "8/8/4k3/4P3/5K2/8/8/8",
        "8/8/4k3/4P3/4K3/8/8/8",
        "8/4k3/8/4P3/4K3/8/8/8",
        "8/4k3/8/3KP3/8/8/8/8",
        "8/3k4/8/3KP3/8/8/8/8",
        "8/3k4/4P3/3K4/8/8/8/8",
        "8/4k3/4P3/3K4/8/8/8/8",
        "8/4k3/4P3/4K3/8/8/8/8",
        "4k3/8/4P3/4K3/8/8/8/8",
        "4k3/8/3KP3/8/8/8/8/8",
        "3k4/8/3KP3/8/8/8/8/8"
    ];

    function clickInitialPositionBtn() {
        board.position("8/8/8/8/4k3/8/3KP3/8")
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
