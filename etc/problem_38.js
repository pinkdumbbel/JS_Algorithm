function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);

    for (let [a, b] of arr) {
        graph[a].push(b);
    }

    console.log(graph);

    function DFS(L) {
        if (L === n) answer++;
        else {
            for (let i = 0; i < graph[L].length; i++) {
                if (ch[graph[L][i]] === 0) {
                    ch[graph[L][i]] = 1;
                    DFS(graph[L][i]);
                    ch[graph[L][i]] = 0;
                }
            }
        }
    }

    ch[1] = 1;
    DFS(1);

    return answer;
}

const arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));