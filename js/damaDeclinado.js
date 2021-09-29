$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var indice = 0;

    var config = {
        position: "start",
    };
    var board = Chessboard("myBoard", config);

    let posiciones = [
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
        "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR",
        "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR",
        "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR", 
        "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        "rnbqkbnr/pp2pppp/8/2pp4/2PP4/8/PP2PPPP/RNBQKBNR",
        "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR", 
        "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR",
        "rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR", 
        "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR", 
        "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR"
    ];

    function clickInitialPositionBtn() {
        board.position("start");
        indice = 0;
    }

    $("#initialPositionBtn").on("click", clickInitialPositionBtn);
    $("#antMovimiento").on("click", clickantMovimiento);
    $("#flipOrientationBtn").on("click", board.flip);

    function clicksigMovimiento() {
        if (indice < 3) {
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
