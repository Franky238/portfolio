var SkillsModel = {
    getSkill: function (skill) {
        var skills = {
            html: '96%',
            css: '91%',
            js: '93%',
            php: '73%',
            typescript: '92%',
            sql: '70%',
            python: '38%'
        };

        return skills[skill];
    }
};
