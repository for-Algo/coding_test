function findStartPoint(ladder) {
    const rows = ladder.length;
    const cols = ladder[0].length;

    let x, y;
    for (let i = 0; i < cols; i++) {
        if (ladder[rows - 1][i] === 2) {
            x = rows - 1;
            y = i;
            break;
        }
    }

    while (x > 0) {
        if (y > 0 && ladder[x][y - 1] === 1) {
            while (y > 0 && ladder[x][y - 1] === 1) {
                y--;
            }
        } else if (y < cols - 1 && ladder[x][y + 1] === 1) {
            while (y < cols - 1 && ladder[x][y + 1] === 1) {
                y++;
            }
        }

        x--;
    }
    return y;
}

// 사다리 맵 예시
const ladder = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 1, 0, 2],
];

// 시작 지점 찾기
const startPoint = findStartPoint(ladder);
console.log(`시작 지점의 y 값: ${startPoint}`);
