function findDuplicates(array) {
    const seen = new Set(); // 이미 본 요소를 추적하는 Set
    const duplicates = new Set(); // 중복된 요소를 추적하는 Set

    // 배열의 각 요소를 순회
    array.forEach((item) => {
        // 요소가 이미 본 요소의 Set에 있으면
        if (seen.has(item)) {
            // 중복 요소의 Set에 추가
            duplicates.add(item);
        } else {
            // 처음 본 요소를 Set에 추가
            seen.add(item);
        }
    });

    // 중복 요소를 배열로 변환하여 반환
    return [...duplicates];
}

function loopFor(word, wordNum, startIndex = 0, menuArray = [], result = []) {
    if (menuArray.length === wordNum) {
        result.push(menuArray.join(''));
        return;
    }

    for (let i = startIndex; i < word.length; i++) {
        menuArray.push(word[i]);
        loopFor(word, wordNum, i + 1, menuArray, result);
        menuArray.pop();
    }
    return result;
}

function solution(orders, course) {
    let everyMenuArray = [];
    const result = {};
    let courseMenu = [];
    for (const courseNum of course) {
        const allCombinations = [];

        for (const order of orders) {
            // 현재 주문에서 courseNum 길이의 모든 조합을 생성
            const combinations = loopFor(order, courseNum);
            // 생성된 조합들을 allCombinations에 추가
            allCombinations.push(...combinations);
        }

        // 중복된 조합을 찾기
        const duplicates = findDuplicates(allCombinations);

        // 결과에 저장
        result[courseNum] = duplicates;
    }
    return result;
}
console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
console.log(loopFor('AC', 2));
