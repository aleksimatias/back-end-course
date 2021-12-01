const evaluator = require('./evaluator')

let myScale = [
    { grade: 1, points: 20},
    { grade: 2, points: 35},
    { grade: 3, points: 50},
    { grade: 4, points: 65},
    { grade: 5, points: 80}
];

evaluator.setEvaluationScale(myScale);

/* console.log('The grade is: ' + evaluator.getGrade(80)); */


