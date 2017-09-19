var SkillsModel = {
    getSkill: function (skill) {
        var skills = {
            html: '90%',
            css: '85%',
            js: '84%',
            php: '73%',
            typescript: '79%',
            sql: '67%',
            python: '38%'
        };

        return skills[skill];
    }
};