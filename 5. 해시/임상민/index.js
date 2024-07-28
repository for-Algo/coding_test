function generateCombinations(str, combinationLength, startIndex = 0, currentCombination = [], result = []) {
    // 기저 사례: 현재 조합의 길이가 목표 길이와 같으면 결과에 추가
    if (currentCombination.length === combinationLength) {
        result.push(currentCombination.join(''));
    }

    // 문자열의 각 문자에 대해 조합을 생성
    for (let i = startIndex; i < str.length; i++) {
        currentCombination.push(str[i]); // 현재 문자를 추가
        generateCombinations(str, combinationLength, i + 1, currentCombination, result); // 재귀 호출
        currentCombination.pop(); // 백트래킹: 현재 문자 제거
    }

    return result;
}

// 사용 예
const str = 'abcde';
const combinationLength = 3; // 원하는 조합 길이
const combinations = generateCombinations(str, combinationLength);

console.log(combinations);
