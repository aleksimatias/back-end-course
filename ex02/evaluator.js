let _scale;

const setEvaluationScale = (scale) => {
    _scale = scale;
};

const getGrade = (points) => {
    if (!_scale) {
        let anotherVar = 0;
        return 'There is no evaluation scale defined.';
    }

    let grade = 0;

    for (let i = 0; i < _scale.length; i++) {
        if (points >= _scale[i].points) {
            grade = _scale[i].grade;
        }
    }

    return grade;
};

module.exports.setEvaluationScale = setEvaluationScale;
module.exports.getGrade = getGrade;


