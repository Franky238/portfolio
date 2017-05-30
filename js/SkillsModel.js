var SkillsModel = {
    getSkill: function (skill) {
        var skills = {
            html: '90%',
            css: '85%',
            js: '82%',
            php: '73%',
            typescript: '72%',
            sql: '67%',
            python: '38%'
        };

        return skills[skill];
    }
};