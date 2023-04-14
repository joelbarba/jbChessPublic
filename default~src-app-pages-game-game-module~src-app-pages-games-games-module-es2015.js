(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-pages-game-game-module~src-app-pages-games-games-module"],{

/***/ "7w41":
/*!*********************************************!*\
  !*** ./src/app/core/store/store.service.ts ***!
  \*********************************************/
/*! exports provided: EGameStatus, EPiece, StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGameStatus", function() { return EGameStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPiece", function() { return EPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _core_core_lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core-lib/helpers */ "SUed");
/* harmony import */ var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/common/jb-profile.service */ "i0JM");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");








var EGameStatus;
(function (EGameStatus) {
    EGameStatus["REQUESTED"] = "REQUESTED";
    EGameStatus["WHITE"] = "WHITE";
    EGameStatus["BLACK"] = "BLACK";
    EGameStatus["DRAW"] = "DRAW";
    EGameStatus["WHITE_WON_BY_MATE"] = "WHITE WON BY MATE";
    EGameStatus["BLACK_WON_BY_MATE"] = "BLACK WON BY MATE";
    EGameStatus["WHITE_WON_BY_TIMEOUT"] = "WHITE WON BY TIMEOUT";
    EGameStatus["BLACK_WON_BY_TIMEOUT"] = "BLACK WON BY TIMEOUT";
    EGameStatus["WHITE_WON_BY_RESIGN"] = "WHITE WON BY RESIGN";
    EGameStatus["BLACK_WON_BY_RESIGN"] = "BLACK WON BY RESIGN";
})(EGameStatus || (EGameStatus = {}));
var EPiece;
(function (EPiece) {
    EPiece[EPiece["BRook1"] = 25] = "BRook1";
    EPiece[EPiece["BKnight1"] = 26] = "BKnight1";
    EPiece[EPiece["BBishop1"] = 27] = "BBishop1";
    EPiece[EPiece["BQueen"] = 28] = "BQueen";
    EPiece[EPiece["BKing"] = 29] = "BKing";
    EPiece[EPiece["BBishop2"] = 30] = "BBishop2";
    EPiece[EPiece["BKnight2"] = 31] = "BKnight2";
    EPiece[EPiece["BRook2"] = 32] = "BRook2";
    EPiece[EPiece["BPawn1"] = 17] = "BPawn1";
    EPiece[EPiece["BPawn2"] = 18] = "BPawn2";
    EPiece[EPiece["BPawn3"] = 19] = "BPawn3";
    EPiece[EPiece["BPawn4"] = 20] = "BPawn4";
    EPiece[EPiece["BPawn5"] = 21] = "BPawn5";
    EPiece[EPiece["BPawn6"] = 22] = "BPawn6";
    EPiece[EPiece["BPawn7"] = 23] = "BPawn7";
    EPiece[EPiece["BPawn8"] = 24] = "BPawn8";
    EPiece[EPiece["WPawn1"] = 1] = "WPawn1";
    EPiece[EPiece["WPawn2"] = 2] = "WPawn2";
    EPiece[EPiece["WPawn3"] = 3] = "WPawn3";
    EPiece[EPiece["WPawn4"] = 4] = "WPawn4";
    EPiece[EPiece["WPawn5"] = 5] = "WPawn5";
    EPiece[EPiece["WPawn6"] = 6] = "WPawn6";
    EPiece[EPiece["WPawn7"] = 7] = "WPawn7";
    EPiece[EPiece["WPawn8"] = 8] = "WPawn8";
    EPiece[EPiece["WRook1"] = 9] = "WRook1";
    EPiece[EPiece["WKnight1"] = 10] = "WKnight1";
    EPiece[EPiece["WBishop1"] = 11] = "WBishop1";
    EPiece[EPiece["WQueen"] = 12] = "WQueen";
    EPiece[EPiece["WKing"] = 13] = "WKing";
    EPiece[EPiece["WBishop2"] = 14] = "WBishop2";
    EPiece[EPiece["WKnight2"] = 15] = "WKnight2";
    EPiece[EPiece["WRook2"] = 16] = "WRook2";
})(EPiece || (EPiece = {}));
const W_KING = 13;
const B_KING = 29;
const emptyBoard = [
    25, 26, 27, 28, 29, 30, 31, 32,
    17, 18, 19, 20, 21, 22, 23, 24,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
];
//   R   Kn  B   Q   K   B   Kn  R            R   Kn  B   Q   K   B   Kn  R
//   ----------------------------------------------------------------------
//   25, 26, 27, 28, 29, 30, 31, 32,  | 0 |  00  01  02  03  04  05  06  07
//   17, 18, 19, 20, 21, 22, 23, 24,  | 1 |  08  09  10  11  12  13  14  15
//   0,  0,  0,  0,  0,  0,  0,  0,   | 2 |  16  17  18  19  20  21  22  23
//   0,  0,  0,  0,  0,  0,  0,  0,   | 3 |  24  25  26  27  28  29  30  31
//   0,  0,  0,  0,  0,  0,  0,  0,   | 4 |  32  33  34  35  36  37  38  39
//   0,  0,  0,  0,  0,  0,  0,  0,   | 5 |  40  41  42  43  44  45  46  47
//   1,  2,  3,  4,  5,  6,  7,  8,   | 6 |  48  49  50  51  52  53  54  55
//   9, 10, 11, 12, 13, 14, 15, 16,   | 7 |  56  57  58  59  60  61  62  63
//   ----------------------------------------------------------------------
//   R  Kn   B   Q   K   B  Kn   R            R  Kn   B   Q   K   B  Kn   R
class StoreService {
    constructor(profile, afAuth, afs) {
        this.profile = profile;
        this.afAuth = afAuth;
        this.afs = afs;
        this.getGames = () => this.games$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).toPromise();
        this.getGame$ = gameId => this.afs.doc('/games/' + gameId).valueChanges();
        this.getGame = gameId => this.getGame$(gameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).toPromise();
        this.resetGame = (game) => {
            game.history = [];
            game.status = EGameStatus.WHITE;
            game.board = [...emptyBoard];
            game.startTime = (new Date()).toString();
        };
        this.canPlayGame = game => game.status === EGameStatus.WHITE || game.status === EGameStatus.BLACK;
        this.squareRow = num => Math.floor(num / 8);
        this.square2D = num => [num % 8, this.squareRow(num)]; // row = [0, ... 7]
        this.squareColor = num => (num + (this.squareRow(num) % 2)) % 2 === 0 ? 'white' : 'black';
        this.getPiece = (code) => {
            const pType = { code, name: '', color: '', img: '' };
            if ([1, 2, 3, 4, 5, 6, 7, 8].includes(code)) {
                pType.name = 'pawn';
                pType.color = 'WHITE';
            }
            if ([EPiece.WRook1, EPiece.WRook2].includes(code)) {
                pType.name = 'rook';
                pType.color = 'WHITE';
            }
            if ([EPiece.WKnight1, EPiece.WKnight2].includes(code)) {
                pType.name = 'knight';
                pType.color = 'WHITE';
            }
            if ([EPiece.WBishop1, EPiece.WBishop2].includes(code)) {
                pType.name = 'bishop';
                pType.color = 'WHITE';
            }
            if (code === EPiece.WQueen) {
                pType.name = 'queen';
                pType.color = 'WHITE';
            }
            if (code === EPiece.WKing) {
                pType.name = 'king';
                pType.color = 'WHITE';
            }
            if ([17, 18, 19, 20, 21, 22, 23, 24].includes(code)) {
                pType.name = 'pawn';
                pType.color = 'BLACK';
            }
            if ([EPiece.BRook1, EPiece.BRook2].includes(code)) {
                pType.name = 'rook';
                pType.color = 'BLACK';
            }
            if ([EPiece.BKnight1, EPiece.BKnight2].includes(code)) {
                pType.name = 'knight';
                pType.color = 'BLACK';
            }
            if ([EPiece.BBishop1, EPiece.BBishop2].includes(code)) {
                pType.name = 'bishop';
                pType.color = 'BLACK';
            }
            if (code === EPiece.BQueen) {
                pType.name = 'queen';
                pType.color = 'BLACK';
            }
            if (code === EPiece.BKing) {
                pType.name = 'king';
                pType.color = 'BLACK';
            }
            if (pType.name) {
                pType.img = `assets/${pType.color[0].toLowerCase()}-${pType.name}.png`;
            }
            return pType;
        };
        // It returns all valid moves every piece can make in the current turn
        this.getAllValidMoves = (game) => {
            if (game.status !== EGameStatus.WHITE && game.status !== EGameStatus.BLACK) {
                return [];
            }
            let moves = [];
            this.playerPieces(game.status, game.board).forEach(piece => {
                moves = [...moves, ...this.getValidMoves(game, piece.pos)];
            });
            return moves;
        };
        // Returns an array with the (color) players pieces and their positions
        this.playerPieces = (color, board) => {
            return board.map((code, pos) => (Object.assign(Object.assign({}, this.getPiece(code)), { pos }))).filter(p => p.color === color);
        };
        // It returns an array with all possible moves a single piece can make at the current state
        // Every move contains: {
        //    posOri --> original position of the moving piece
        //    posDes --> destination position of the moving piece
        //    piece ---> object with the moving piece ({ code, color, name })
        //    takes ---> the piece that is being taken (if any. if none, 0)
        //    note ----> official notation text for the move
        //    nextBoard --> The game.board[] array after the move
        // }
        this.getValidMoves = (game, posOri, fullCheck = true) => {
            const board = game.board;
            const piece = this.getPiece(board[posOri]);
            const [col, row] = this.square2D(posOri);
            const validMoves = [];
            const yourColor = piece.color;
            const otherColor = piece.color === 'WHITE' ? 'BLACK' : 'WHITE';
            // Returns an object with the piece at that position + helpers
            const pieceAt = (col, row) => {
                const isIn = row >= 0 && row <= 7 && col >= 0 && col <= 7;
                const pos = (row * 8) + col;
                const code = board[pos];
                const piece = this.getPiece(code);
                return { pos, code, piece,
                    isEmpty: () => isIn && code === 0, isYours: () => isIn && (piece === null || piece === void 0 ? void 0 : piece.color) === yourColor,
                    isOther: () => isIn && (piece === null || piece === void 0 ? void 0 : piece.color) === otherColor, is: (values) => {
                        if (!isIn) {
                            return false;
                        }
                        if (values.includes('empty') && code === 0) {
                            return true;
                        }
                        if (values.includes(piece.color)) {
                            return true;
                        }
                        return false;
                    } };
            };
            // Adds a move to the validMoves[] array
            const addMove = (col, row) => {
                if (row >= 0 && row <= 7 && col >= 0 && col <= 7) {
                    const posDes = (row * 8) + col;
                    const nextMove = { posOri, posDes, takes: game.board[posDes], nextBoard: Object(jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["dCopy"])(game.board) };
                    nextMove.nextBoard[posDes] = nextMove.nextBoard[posOri];
                    nextMove.nextBoard[posOri] = 0;
                    nextMove.piece = piece.keyFilter('code,color,name');
                    nextMove.note = ''; // will be calculated later
                    validMoves.push(nextMove);
                    return nextMove;
                }
            };
            // If the given position is valid (has any of the values[]) add the move. Return the piece at that position
            const addMoveIf = (col, row, values) => {
                const piece = pieceAt(col, row);
                if (piece.is(values)) {
                    addMove(col, row);
                }
                return piece;
            };
            if (piece.name === 'knight' && piece.color === yourColor) {
                addMoveIf(col - 1, row - 2, ['empty', otherColor]);
                addMoveIf(col + 1, row - 2, ['empty', otherColor]);
                addMoveIf(col - 2, row - 1, ['empty', otherColor]);
                addMoveIf(col + 2, row - 1, ['empty', otherColor]);
                addMoveIf(col - 2, row + 1, ['empty', otherColor]);
                addMoveIf(col - 1, row + 2, ['empty', otherColor]);
                addMoveIf(col + 2, row + 1, ['empty', otherColor]);
                addMoveIf(col + 1, row + 2, ['empty', otherColor]);
            }
            if ((piece.name === 'queen' || piece.name === 'rook') && piece.color === yourColor) {
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col, row - t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col, row + t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col - t, row, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col + t, row, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
            }
            if ((piece.name === 'queen' || piece.name === 'bishop') && piece.color === yourColor) {
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col - t, row - t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col - t, row + t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col + t, row - t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
                for (let t = 1; t <= 8; t++) {
                    if (!addMoveIf(col + t, row + t, ['empty', otherColor]).isEmpty()) {
                        break;
                    }
                }
            }
            if (piece.name === 'king' && piece.color === yourColor) {
                addMoveIf(col - 1, row - 1, ['empty', otherColor]);
                addMoveIf(col, row - 1, ['empty', otherColor]);
                addMoveIf(col + 1, row - 1, ['empty', otherColor]);
                addMoveIf(col - 1, row, ['empty', otherColor]);
                addMoveIf(col + 1, row, ['empty', otherColor]);
                addMoveIf(col - 1, row + 1, ['empty', otherColor]);
                addMoveIf(col, row + 1, ['empty', otherColor]);
                addMoveIf(col + 1, row + 1, ['empty', otherColor]);
            }
            // En Passant (Pawn takes pawn next to it moving in diagonal, after opponent's pawn moved 2 positions opening)
            // - The capturing pawn must have advanced exactly three ranks to perform this move.
            // - The captured pawn must have moved two squares in one move, landing right next to the capturing pawn.
            // - The en passant capture must be performed on the turn immediately after the pawn being captured moves.
            const checkEnPassant = (color) => {
                if (!game.history.length) {
                    return;
                }
                const lastMove = game.history.getLast();
                const [lastDesCol, lastDesRow] = this.square2D(lastMove.posDes);
                const lastPiece = pieceAt(lastDesCol, lastDesRow);
                const row1 = color === 'WHITE' ? -1 : 1;
                const row16 = row1 * 16;
                if (lastPiece.piece.name === 'pawn' && lastMove.posOri === lastMove.posDes + row16 && row === lastDesRow) {
                    if (lastDesCol === col - 1) {
                        const move = addMove(col - 1, row + row1);
                        move.takes = move.nextBoard[lastMove.posDes];
                        move.nextBoard[lastMove.posDes] = 0;
                    }
                    if (lastDesCol === col + 1) {
                        const move = addMove(col + 1, row + row1);
                        move.takes = move.nextBoard[lastMove.posDes];
                        move.nextBoard[lastMove.posDes] = 0;
                    }
                }
            };
            if (piece.name === 'pawn' && piece.color === 'WHITE') {
                if (row === 6 && pieceAt(col, row - 1).isEmpty() && pieceAt(col, row - 2).isEmpty()) {
                    addMove(col, row - 2);
                } // Advance 2
                addMoveIf(col, row - 1, ['empty']); // Advance 1
                addMoveIf(col - 1, row - 1, [otherColor]); // Kill left
                addMoveIf(col + 1, row - 1, [otherColor]); // Kill right
                checkEnPassant(piece.color);
            }
            if (piece.name === 'pawn' && piece.color === 'BLACK') {
                if (row === 1 && pieceAt(col, row + 1).isEmpty() && pieceAt(col, row + 2).isEmpty()) {
                    addMove(col, row + 2);
                } // Advance 2
                addMoveIf(col, row + 1, ['empty']); // Advance 1
                addMoveIf(col - 1, row + 1, [otherColor]); // Kill left
                addMoveIf(col + 1, row + 1, [otherColor]); // Kill right
                checkEnPassant(piece.color);
            }
            // Checks if the given position is being attacked by an opponent's piece. If so, it returns the attacker piece
            const isPosAttacked = (pos) => {
                if (!fullCheck) {
                    return false;
                } // avoid recursivity
                for (const otherPiece of this.playerPieces(otherColor, board)) {
                    const attackMoves = this.getValidMoves(game, otherPiece.pos, false).filter(move => move.posDes === pos);
                    if (attackMoves.length > 0) {
                        return otherPiece;
                    }
                }
            };
            // Castling
            // - The king and the rook may not have moved from their starting squares if you want to castle.
            // - All spaces between the king and the rook must be empty.
            // - The king cannot be in check.
            // - The squares that the king passes over must not be under attack, nor the square where it lands on.
            if (piece.code === W_KING && piece.color === yourColor && game.history.every(m => m.piece.code !== W_KING)) { // white king
                if (game.history.every(m => m.piece !== 16)) { // King <-> Right Rook
                    if (pieceAt(5, 7).isEmpty() && pieceAt(6, 7).isEmpty()) {
                        if (!isPosAttacked(60) && !isPosAttacked(61) && !isPosAttacked(62)) {
                            const move = addMove(6, 7);
                            move.nextBoard[63] = 0;
                            move.nextBoard[61] = 16;
                        }
                    }
                }
                if (game.history.every(m => m.piece.code !== 9)) { // Left Rook <-> King
                    if (pieceAt(1, 7).isEmpty() && pieceAt(2, 7).isEmpty() && pieceAt(3, 7).isEmpty()) {
                        if (!isPosAttacked(60) && !isPosAttacked(59) && !isPosAttacked(58)) {
                            const move = addMove(2, 7);
                            move.nextBoard[56] = 0;
                            move.nextBoard[59] = 9;
                        }
                    }
                }
            }
            if (piece.code === B_KING && piece.color === yourColor && game.history.every(m => m.piece.code !== B_KING)) { // black king
                if (game.history.every(m => m.piece.code !== 32)) { // Right Rook
                    if (pieceAt(5, 0).isEmpty() && pieceAt(6, 0).isEmpty()) {
                        if (!isPosAttacked(4) && !isPosAttacked(5) && !isPosAttacked(6)) {
                            const move = addMove(6, 0);
                            move.nextBoard[7] = 0;
                            move.nextBoard[5] = 32;
                        }
                    }
                }
                if (game.history.every(m => m.piece.code !== 25)) { // Left Rook
                    if (pieceAt(1, 0).isEmpty() && pieceAt(2, 0).isEmpty() && pieceAt(3, 0).isEmpty()) {
                        if (!isPosAttacked(4) && !isPosAttacked(3) && !isPosAttacked(2)) {
                            const move = addMove(2, 0);
                            move.nextBoard[0] = 0;
                            move.nextBoard[3] = 25;
                        }
                    }
                }
            }
            if (!fullCheck) {
                return validMoves;
            } // exclude moves that would cause mate (to avoid recursivity)
            // Invalidate mate moves:
            // If a move puts the king in a position that can be taken at the next move, remove it because it is not valid
            return validMoves.filter(move => {
                const nextGame = Object(jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["dCopy"])(game);
                nextGame.board = move.nextBoard;
                nextGame.history.push(move);
                // Filter opponent's pieces and calculate all opponent's valid moves after move.
                // If any of these calculated valid moves takes the king, invalidate the current move.
                return !this.playerPieces(otherColor, board).some(piece => {
                    const killMoves = this.getValidMoves(nextGame, piece.pos, false).filter(nextMove => {
                        return yourColor === 'WHITE' && nextMove.takes === W_KING
                            || yourColor === 'BLACK' && nextMove.takes === B_KING;
                    });
                    // if (killMoves.length > 0) { console.log('Killing moves', piece, killMoves); }
                    return killMoves.length > 0;
                });
            });
        };
        // Check if the move is a Pawn reaching the other side of the board
        this.isPawnFinished = (posOri, posDes, piece) => {
            if (piece.name === 'pawn') {
                if (piece.color === 'WHITE' && [0, 1, 2, 3, 4, 5, 6, 7].includes(posDes)) {
                    return true;
                }
                if (piece.color === 'BLACK' && [56, 57, 58, 59, 60, 61, 62, 63].includes(posDes)) {
                    return true;
                }
            }
            return false;
        };
        // Check if the current game is in check.
        // If the last color plays again, and there is a valid move that kills the king, it's check.
        this.isCheck = (game) => {
            var _a, _b;
            const lastMoveColor = (_b = (_a = game.history.getLast()) === null || _a === void 0 ? void 0 : _a.piece) === null || _b === void 0 ? void 0 : _b.color;
            for (const piece of this.playerPieces(lastMoveColor, game.board)) {
                for (const move of this.getValidMoves(game, piece.pos, false)) {
                    if (lastMoveColor === 'WHITE' && move.takes === B_KING) {
                        return true;
                    }
                    if (lastMoveColor === 'BLACK' && move.takes === W_KING) {
                        return true;
                    }
                }
            }
            return false;
        };
        // Check if the current game is in check mate. Calculate all next valid moves. If none, it's mate
        this.isCheckMate = (game) => {
            var _a, _b;
            const nextMoveColor = ((_b = (_a = game.history.getLast()) === null || _a === void 0 ? void 0 : _a.piece) === null || _b === void 0 ? void 0 : _b.color) === 'WHITE' ? 'BLACK' : 'WHITE';
            const pieces = this.playerPieces(nextMoveColor, game.board);
            for (const piece of pieces) { // If there is a valid move, it's not mate
                if (this.getValidMoves(game, piece.pos).length) {
                    return false;
                }
            }
            return true;
        };
        this.getMoveNote = (game, posOri, posDes, promotedPieceCode) => {
            // Return the move notation string https://en.wikipedia.org/wiki/Algebraic_notation_(chess)#Notation_for_moves
            const getNonUniqueNote = (move, oriFile = false, oriRank = false) => {
                let mLetter = false; // format[0]
                // let oriFile = false; // format[1]
                // let oriRank = false; // format[2]
                let xTaking = false; // format[3]
                let desFile = true; // format[4]
                let desRank = true; // format[5]
                let promote = false; // format[6]
                let note = '';
                if (move.piece.name !== 'pawn') {
                    mLetter = true;
                } // Piece letter (except pawn)
                if (move.piece.name === 'pawn' && move.takes) {
                    oriFile = true;
                } // When pawn takes, add origin file
                if (move.takes) {
                    xTaking = true;
                } // When taking, add the 'x' between origin / dest
                if (promotedPieceCode) {
                    promote = true;
                } // If a pawn is being promoted
                // Each position indicates whether to leave it empty (false) or to add the value (true)
                note = (!mLetter ? '' : move.piece.name[0].toUpperCase()) // 0 - Letter of the moving piece
                    + (!oriFile ? '' : 'abcdefgh'[move.posOri % 8]) // 1 - Original file of the moving piece (oriFile)
                    + (!oriRank ? '' : (8 - Math.floor(move.posOri / 8)) + '') // 2 - Original rank of the moving piece (oriRank)
                    + (!xTaking ? '' : 'x') // 3 - Whether it takes another piece (x)
                    + (!desFile ? '' : 'abcdefgh'[move.posDes % 8]) // 4 - Destination file of the moving piece (desFile)
                    + (!desRank ? '' : (8 - Math.floor(move.posDes / 8)) + '') // 5 - Destination rank of the moving piece (desRank)
                    + (!promote ? '' : ('=' + this.getPiece(promotedPieceCode).name[0].toUpperCase())); // 6 - Letter of the promoted piece
                return note;
            };
            // Disambiguating moves
            // When two (or more) identical pieces can move to the same square, the moving piece is uniquely identified
            // by specifying the piece's letter, followed by (in descending order of preference):
            //  1. the file of departure (if they differ); or
            //  2. the rank of departure (if the files are the same but the ranks differ); or
            //  3. both the file and rank of departure (if neither alone is sufficient to identify the piece
            const allMoves = this.getAllValidMoves(game).map(move => {
                return [
                    Object.assign(Object.assign({}, move), { note: getNonUniqueNote(move, false, false) }),
                    Object.assign(Object.assign({}, move), { note: getNonUniqueNote(move, true, false) }),
                    Object.assign(Object.assign({}, move), { note: getNonUniqueNote(move, false, true) }),
                    Object.assign(Object.assign({}, move), { note: getNonUniqueNote(move, true, true) }),
                ];
            });
            const moves = allMoves.map(move => {
                if (allMoves.filter(m => m[0].note === move[0].note).length < 2) {
                    return move[0];
                }
                if (allMoves.filter(m => m[1].note === move[1].note).length < 2) {
                    return move[1];
                }
                if (allMoves.filter(m => m[2].note === move[2].note).length < 2) {
                    return move[2];
                }
                if (allMoves.filter(m => m[3].note === move[3].note).length < 2) {
                    return move[3];
                }
                console.error('Ambiguity with the move notation!');
                return move[0];
            });
            const move = moves.find(move => move.posOri === posOri && move.posDes === posDes);
            // Castling move
            if (move.piece.code === W_KING && move.posOri === 60 && move.posDes === 62) {
                move.note = 'O-O';
            } // Kingside castling
            if (move.piece.code === W_KING && move.posOri === 60 && move.posDes === 58) {
                move.note = 'O-O-O';
            } // Queenside castling
            if (move.piece.code === B_KING && move.posOri === 4 && move.posDes === 2) {
                move.note = 'O-O-O';
            } // Kingside castling
            if (move.piece.code === B_KING && move.posOri === 4 && move.posDes === 6) {
                move.note = 'O-O';
            } // Queenside castling
            // Check if the status after the move is a check mate
            const nextGame = Object(jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["dCopy"])(Object.assign(Object.assign({}, game), { board: move.nextBoard, history: [...game.history, move] }));
            if (this.isCheckMate(nextGame)) {
                move.note += '#';
            } // Add a check mate mark '#'
            else if (this.isCheck(nextGame)) {
                move.note += '+';
            } // Add a check mark '+'
            return move === null || move === void 0 ? void 0 : move.note;
        };
        this.gamesCol = this.afs.collection('games');
        this.games$ = this.gamesCol.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    newGame(nextMoveMinutes = 1000) {
        // return this.getGames().then(games => { // Find a requested game to join as player 2
        //   const game = games.find(g => this.canJoinGame(g));
        //   if (game) { return this.joinGame(game); }
        //   return this.requestGame(); // If none, create a new game
        // });
        const newGame = {
            requestDate: Object(_core_core_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["dateToStr"])(new Date()),
            startTime: null,
            player1: this.profile.user.id,
            player2: null,
            playerName1: this.profile.user.displayName,
            playerName2: 'Guest',
            token1: this.afs.createId(),
            token2: this.afs.createId(),
            status: EGameStatus.REQUESTED,
            history: [],
            board: [...emptyBoard],
            lastPing1: null,
            lastPing2: null,
            chat: [],
            videoStatus: '',
            offerSDP: null,
            answerSDP: null,
            videoConfig: { cam1On: true, mic1On: true, cam2On: true, mic2On: true },
            nextMoveMinutes,
        };
        console.log('newGame', newGame);
        return this.gamesCol.add(newGame).then(game => {
            return Object.assign(Object.assign({}, newGame), { id: game.id });
        });
    }
    joinGame(game) {
        const gameDoc = this.afs.doc('games/' + game.id);
        return gameDoc.update(Object.assign(Object.assign({}, game), { startTime: (new Date()).toString(), player2: this.profile.user.id, playerName2: this.profile.user.displayName, status: EGameStatus.WHITE, history: [], board: [...emptyBoard] }));
    }
    updateGamePlayer(game) {
        const gameDoc = this.afs.doc('games/' + game.id);
        return gameDoc.update({
            player2: this.profile.user.id,
            playerName2: this.profile.user.displayName,
        });
    }
    endGame(game, loserId) {
        let status = EGameStatus.DRAW;
        if (game.player1 === loserId) {
            status = EGameStatus.BLACK_WON_BY_RESIGN;
        }
        if (game.player2 === loserId) {
            status = EGameStatus.WHITE_WON_BY_RESIGN;
        }
        const gameDoc = this.afs.doc('games/' + game.id);
        return gameDoc.update(Object.assign(Object.assign({}, game), { status }));
    }
    deleteGame(gameId) {
        return this.afs.doc('games/' + gameId).delete();
    }
    // public joinGame(game) {
    //   const gameDoc = this.afs.doc<IGameDoc>('games/' + game.id);
    //   const joinGame = {
    //     requestDate : game.requestDate,
    //     startTime   : (new Date()).toString(),
    //     player1     : game.player1,
    //     player2     : this.profile.user.id,
    //     playerName1 : game.playerName1,
    //     playerName2 : this.profile.user.displayName,
    //     status      : EGameStatus.WHITE,
    //     history     : [],
    //     board       : [...emptyBoard],
    //   };
    //   return gameDoc.update(joinGame);
    // }
    commitMove(game, posOri, posDes, promotedPieceCode) {
        this.makeMove(game, posOri, posDes, promotedPieceCode);
        return this.updateGame(game);
    }
    makeMove(game, posOri, posDes, promotedPieceCode) {
        const validMoves = this.getValidMoves(game, posOri);
        const move = validMoves.find(move => move.posOri === posOri && move.posDes === posDes);
        if (!move) {
            return null;
        }
        move.note = this.getMoveNote(game, posOri, posDes, promotedPieceCode);
        move.timeStamp = (new Date()).toString();
        if (promotedPieceCode) {
            move.promotedTo = promotedPieceCode;
            move.nextBoard[posDes] = promotedPieceCode;
        }
        game.history.push(move);
        game.board = [...move.nextBoard];
        game.status = game.status === EGameStatus.WHITE ? EGameStatus.BLACK : EGameStatus.WHITE;
        if (this.isCheckMate(game)) {
            game.status = move.piece.color === 'WHITE' ? EGameStatus.WHITE_WON_BY_MATE : EGameStatus.BLACK_WON_BY_MATE;
        }
        console.log(game.board.slice(0, 8).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(8, 16).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(16, 24).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(24, 32).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(32, 40).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(40, 48).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(48, 56).map(v => ('' + v).pad(5, ' ')).join()
            + '\n' + game.board.slice(56, 64).map(v => ('' + v).pad(5, ' ')).join());
        return move;
    }
    // TODO: This should trigger a cloud function that validates the move
    updateGame(game) {
        const gameDoc = this.afs.doc('games/' + game.id);
        return gameDoc.update(game);
    }
    // --------------- Helpers ---------------
    canJoinGame(game) {
        return game.status === EGameStatus.REQUESTED
            && game.player1 !== this.profile.user.id
            && game.player2 === null;
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"])); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root', }]
    }], function () { return [{ type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "SUed":
/*!******************************************!*\
  !*** ./src/app/core/core-lib/helpers.ts ***!
  \******************************************/
/*! exports provided: dateToStr, strToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToStr", function() { return dateToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToDate", function() { return strToDate; });
const dateToStr = (dateVal) => {
    let res = '';
    res += (dateVal.getDate() + '').pad(2);
    res += '-' + ((dateVal.getMonth() + 1) + '').pad(2);
    res += '-' + (dateVal.getFullYear() + '').pad(4);
    res += ' ' + (dateVal.getHours() + '').pad(2);
    res += ':' + (dateVal.getMinutes() + '').pad(2);
    res += ':' + (dateVal.getSeconds() + '').pad(2);
    return res;
};
const strToDate = (dateVal) => {
    const day = dateVal.slice(0, 2);
    const month = dateVal.slice(3, 5);
    const rest = dateVal.slice(6);
    return new Date(`${month}-${day}-${rest}`);
};


/***/ })

}]);
//# sourceMappingURL=default~src-app-pages-game-game-module~src-app-pages-games-games-module-es2015.js.map