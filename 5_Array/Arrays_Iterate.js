let tests = ['test1', 'test2', 'test3', 'test4', 'test5']

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i])
}

for (let test of tests) {
    console.log(test)
}   

for (let test in tests) {
    console.log(tests[test])
}   

for (let test of tests.entries()) {
    console.log(test)
}

for (let [index, test] of tests.entries()) {
    console.log(index, test)
}
