var sudokuArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function solveSudoku(gameArr) {
    var emptySpot = nextEmptySpot(gameArr);
    var r = emptySpot[0];
    var c = emptySpot[1];
    if (!isValidSudoku(gameArr)) return gameArr;
    if (r === -1) {
        return gameArr;
    };

    var possArr = possiblities(r, c, gameArr);

    for (var k = 0; k < possArr.length && nextEmptySpot(gameArr)[0] !== -1; k++) {
        gameArr[r][c] = possArr[k];
        solveSudoku(gameArr);
    }
    if (nextEmptySpot(gameArr)[0] !== -1) gameArr[r][c] = 0;

    return gameArr;
}

function nextEmptySpot(gameArr) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (gameArr[i][j] === 0) return [i, j];
        }
    }
    return [-1, -1];
}

function possiblities(r, c, gameArr) {
    var possArr = [];
    var row = [];
    var col = [];
    var quad = [];
    var k = 0;
    var l = 0;
    if (r <= 2) k = 0; else if (r <= 5) k = 3; else k = 6;
    if (c <= 2) l = 0; else if (c <= 5) l = 3; else l = 6;

    for (var i = 0; i < 9; i++) {
        row.push(gameArr[i][c]);
    }
    for (var j = 0; j < 9; j++) {
        col.push(gameArr[r][j]);
    }
    for (var i = k; i < k + 3; i++) {
        for (var j = l; j < l + 3; j++) {
            quad.push(gameArr[i][j]);
        }
    }

    for (var n = 1; n < 10; n++) {
        if (row.indexOf(n) === -1 && col.indexOf(n) === -1 && quad.indexOf(n) === -1) {
            possArr.push(n);
        }
    }
    return possArr;
}
function checkQuadrant(r, c, gameArr) {
    var qudarantArr = [];
    for (var i = r; i < r + 3; i++) {
        for (var j = c; j < c + 3; j++) {
            if (qudarantArr.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
                qudarantArr.push(gameArr[i][j]);
            } else {
                return false;
            }
        }
    }
    return true;
}
function isValidSudoku(gameArr) {
    if (!checkQuadrant(0, 0, gameArr)) return false;
    if (!checkQuadrant(0, 3, gameArr)) return false;
    if (!checkQuadrant(0, 6, gameArr)) return false;

    if (!checkQuadrant(3, 0, gameArr)) return false;
    if (!checkQuadrant(3, 3, gameArr)) return false;
    if (!checkQuadrant(3, 6, gameArr)) return false;

    if (!checkQuadrant(6, 0, gameArr)) return false;
    if (!checkQuadrant(6, 3, gameArr)) return false;
    if (!checkQuadrant(6, 6, gameArr)) return false;

    for (var i = 0; i < gameArr.length; i++) {
        var rowNumbers = [];
        for (var j = 0; j < gameArr.length; j++) {
            if (rowNumbers.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
                rowNumbers.push(gameArr[i][j]);
            } else {
                return false;
            }
        }
    }

    for (var i = 0; i < gameArr.length; i++) {
        var colNumbers = [];
        for (var j = 0; j < gameArr.length; j++) {
            if (colNumbers.indexOf(gameArr[j][i]) === -1 || gameArr[j][i] === 0) {
                colNumbers.push(gameArr[j][i]);
            } else {
                return false;
            }
        }
    }
    return true;
}


function solveit()
{
    sudokuArr[0][0] = Number(document.getElementById("num00").value);
    sudokuArr[0][1] = Number(document.getElementById("num01").value);
    sudokuArr[0][2] = Number(document.getElementById("num02").value);
    sudokuArr[0][3] = Number(document.getElementById("num03").value);
    sudokuArr[0][4] = Number(document.getElementById("num04").value);
    sudokuArr[0][5] = Number(document.getElementById("num05").value);
    sudokuArr[0][6] = Number(document.getElementById("num06").value);
    sudokuArr[0][7] = Number(document.getElementById("num07").value);
    sudokuArr[0][8] = Number(document.getElementById("num08").value);

    sudokuArr[1][0] = Number(document.getElementById("num10").value);
    sudokuArr[1][1] = Number(document.getElementById("num11").value);
    sudokuArr[1][2] = Number(document.getElementById("num12").value);
    sudokuArr[1][3] = Number(document.getElementById("num13").value);
    sudokuArr[1][4] = Number(document.getElementById("num14").value);
    sudokuArr[1][5] = Number(document.getElementById("num15").value);
    sudokuArr[1][6] = Number(document.getElementById("num16").value);
    sudokuArr[1][7] = Number(document.getElementById("num17").value);
    sudokuArr[1][8] = Number(document.getElementById("num18").value);

    sudokuArr[2][0] = Number(document.getElementById("num20").value);
    sudokuArr[2][1] = Number(document.getElementById("num21").value);
    sudokuArr[2][2] = Number(document.getElementById("num22").value);
    sudokuArr[2][3] = Number(document.getElementById("num23").value);
    sudokuArr[2][4] = Number(document.getElementById("num24").value);
    sudokuArr[2][5] = Number(document.getElementById("num25").value);
    sudokuArr[2][6] = Number(document.getElementById("num26").value);
    sudokuArr[2][7] = Number(document.getElementById("num27").value);
    sudokuArr[2][8] = Number(document.getElementById("num28").value);
    
    sudokuArr[3][0] = Number(document.getElementById("num30").value);
    sudokuArr[3][1] = Number(document.getElementById("num31").value);
    sudokuArr[3][2] = Number(document.getElementById("num32").value);
    sudokuArr[3][3] = Number(document.getElementById("num33").value);
    sudokuArr[3][4] = Number(document.getElementById("num34").value);
    sudokuArr[3][5] = Number(document.getElementById("num35").value);
    sudokuArr[3][6] = Number(document.getElementById("num36").value);
    sudokuArr[3][7] = Number(document.getElementById("num37").value);
    sudokuArr[3][8] = Number(document.getElementById("num38").value);

    sudokuArr[4][0] = Number(document.getElementById("num40").value);
    sudokuArr[4][1] = Number(document.getElementById("num41").value);
    sudokuArr[4][2] = Number(document.getElementById("num42").value);
    sudokuArr[4][3] = Number(document.getElementById("num43").value);
    sudokuArr[4][4] = Number(document.getElementById("num44").value);
    sudokuArr[4][5] = Number(document.getElementById("num45").value);
    sudokuArr[4][6] = Number(document.getElementById("num46").value);
    sudokuArr[4][7] = Number(document.getElementById("num47").value);
    sudokuArr[4][8] = Number(document.getElementById("num48").value);

    sudokuArr[5][0] = Number(document.getElementById("num50").value);
    sudokuArr[5][1] = Number(document.getElementById("num51").value);
    sudokuArr[5][2] = Number(document.getElementById("num52").value);
    sudokuArr[5][3] = Number(document.getElementById("num53").value);
    sudokuArr[5][4] = Number(document.getElementById("num54").value);
    sudokuArr[5][5] = Number(document.getElementById("num55").value);
    sudokuArr[5][6] = Number(document.getElementById("num56").value);
    sudokuArr[5][7] = Number(document.getElementById("num57").value);
    sudokuArr[5][8] = Number(document.getElementById("num58").value);

    sudokuArr[6][0] = Number(document.getElementById("num60").value);
    sudokuArr[6][1] = Number(document.getElementById("num61").value);
    sudokuArr[6][2] = Number(document.getElementById("num62").value);
    sudokuArr[6][3] = Number(document.getElementById("num63").value);
    sudokuArr[6][4] = Number(document.getElementById("num64").value);
    sudokuArr[6][5] = Number(document.getElementById("num65").value);
    sudokuArr[6][6] = Number(document.getElementById("num66").value);
    sudokuArr[6][7] = Number(document.getElementById("num67").value);
    sudokuArr[6][8] = Number(document.getElementById("num68").value);

    sudokuArr[7][0] = Number(document.getElementById("num70").value);
    sudokuArr[7][1] = Number(document.getElementById("num71").value);
    sudokuArr[7][2] = Number(document.getElementById("num72").value);
    sudokuArr[7][3] = Number(document.getElementById("num73").value);
    sudokuArr[7][4] = Number(document.getElementById("num74").value);
    sudokuArr[7][5] = Number(document.getElementById("num75").value);
    sudokuArr[7][6] = Number(document.getElementById("num76").value);
    sudokuArr[7][7] = Number(document.getElementById("num77").value);
    sudokuArr[7][8] = Number(document.getElementById("num78").value);

    sudokuArr[8][0] = Number(document.getElementById("num80").value);
    sudokuArr[8][1] = Number(document.getElementById("num81").value);
    sudokuArr[8][2] = Number(document.getElementById("num82").value);
    sudokuArr[8][3] = Number(document.getElementById("num83").value);
    sudokuArr[8][4] = Number(document.getElementById("num84").value);
    sudokuArr[8][5] = Number(document.getElementById("num85").value);
    sudokuArr[8][6] = Number(document.getElementById("num86").value);
    sudokuArr[8][7] = Number(document.getElementById("num87").value);
    sudokuArr[8][8] = Number(document.getElementById("num88").value);

    if(isValidSudoku(sudokuArr)){
        solveSudoku(sudokuArr);
        
        document.getElementById("res00").textContent = sudokuArr[0][0];
        document.getElementById("res01").textContent = sudokuArr[0][1];
        document.getElementById("res02").textContent = sudokuArr[0][2];
        document.getElementById("res03").textContent = sudokuArr[0][3];
        document.getElementById("res04").textContent = sudokuArr[0][4];
        document.getElementById("res05").textContent = sudokuArr[0][5];
        document.getElementById("res06").textContent = sudokuArr[0][6];
        document.getElementById("res07").textContent = sudokuArr[0][7];
        document.getElementById("res08").textContent = sudokuArr[0][8];

        document.getElementById("res10").textContent = sudokuArr[1][0];
        document.getElementById("res11").textContent = sudokuArr[1][1];
        document.getElementById("res12").textContent = sudokuArr[1][2];
        document.getElementById("res13").textContent = sudokuArr[1][3];
        document.getElementById("res14").textContent = sudokuArr[1][4];
        document.getElementById("res15").textContent = sudokuArr[1][5];
        document.getElementById("res16").textContent = sudokuArr[1][6];
        document.getElementById("res17").textContent = sudokuArr[1][7];
        document.getElementById("res18").textContent = sudokuArr[1][8];
           

        document.getElementById("res20").textContent = sudokuArr[2][0];
        document.getElementById("res21").textContent = sudokuArr[2][1];
        document.getElementById("res22").textContent = sudokuArr[2][2];
        document.getElementById("res23").textContent = sudokuArr[2][3];
        document.getElementById("res24").textContent = sudokuArr[2][4];
        document.getElementById("res25").textContent = sudokuArr[2][5];
        document.getElementById("res26").textContent = sudokuArr[2][6];
        document.getElementById("res27").textContent = sudokuArr[2][7];
        document.getElementById("res28").textContent = sudokuArr[2][8];
           

        document.getElementById("res30").textContent = sudokuArr[3][0];
        document.getElementById("res31").textContent = sudokuArr[3][1];
        document.getElementById("res32").textContent = sudokuArr[3][2];
        document.getElementById("res33").textContent = sudokuArr[3][3];
        document.getElementById("res34").textContent = sudokuArr[3][4];
        document.getElementById("res35").textContent = sudokuArr[3][5];
        document.getElementById("res36").textContent = sudokuArr[3][6];
        document.getElementById("res37").textContent = sudokuArr[3][7];
        document.getElementById("res38").textContent = sudokuArr[3][8];
           

        document.getElementById("res40").textContent = sudokuArr[4][0];
        document.getElementById("res41").textContent = sudokuArr[4][1];
        document.getElementById("res42").textContent = sudokuArr[4][2];
        document.getElementById("res43").textContent = sudokuArr[4][3];
        document.getElementById("res44").textContent = sudokuArr[4][4];
        document.getElementById("res45").textContent = sudokuArr[4][5];
        document.getElementById("res46").textContent = sudokuArr[4][6];
        document.getElementById("res47").textContent = sudokuArr[4][7];
        document.getElementById("res48").textContent = sudokuArr[4][8];
           

        document.getElementById("res50").textContent = sudokuArr[5][0];
        document.getElementById("res51").textContent = sudokuArr[5][1];
        document.getElementById("res52").textContent = sudokuArr[5][2];
        document.getElementById("res53").textContent = sudokuArr[5][3];
        document.getElementById("res54").textContent = sudokuArr[5][4];
        document.getElementById("res55").textContent = sudokuArr[5][5];
        document.getElementById("res56").textContent = sudokuArr[5][6];
        document.getElementById("res57").textContent = sudokuArr[5][7];
        document.getElementById("res58").textContent = sudokuArr[5][8];
           


        document.getElementById("res60").textContent = sudokuArr[6][0];
        document.getElementById("res61").textContent = sudokuArr[6][1];
        document.getElementById("res62").textContent = sudokuArr[6][2];
        document.getElementById("res63").textContent = sudokuArr[6][3];
        document.getElementById("res64").textContent = sudokuArr[6][4];
        document.getElementById("res65").textContent = sudokuArr[6][5];
        document.getElementById("res66").textContent = sudokuArr[6][6];
        document.getElementById("res67").textContent = sudokuArr[6][7];
        document.getElementById("res68").textContent = sudokuArr[6][8];
           

        document.getElementById("res70").textContent = sudokuArr[7][0];
        document.getElementById("res71").textContent = sudokuArr[7][1];
        document.getElementById("res72").textContent = sudokuArr[7][2];
        document.getElementById("res73").textContent = sudokuArr[7][3];
        document.getElementById("res74").textContent = sudokuArr[7][4];
        document.getElementById("res75").textContent = sudokuArr[7][5];
        document.getElementById("res76").textContent = sudokuArr[7][6];
        document.getElementById("res77").textContent = sudokuArr[7][7];
        document.getElementById("res78").textContent = sudokuArr[7][8];

        document.getElementById("res80").textContent = sudokuArr[8][0];
        document.getElementById("res81").textContent = sudokuArr[8][1];
        document.getElementById("res82").textContent = sudokuArr[8][2];
        document.getElementById("res83").textContent = sudokuArr[8][3];
        document.getElementById("res84").textContent = sudokuArr[8][4];
        document.getElementById("res85").textContent = sudokuArr[8][5];
        document.getElementById("res86").textContent = sudokuArr[8][6];
        document.getElementById("res87").textContent = sudokuArr[8][7];
        document.getElementById("res88").textContent = sudokuArr[8][8];
           
           
           
     

    }
    else{
        alert("please enter valid Numbers");
    }
}

