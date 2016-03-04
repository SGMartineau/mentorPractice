var me = {
    name: 'Scott Martineau',
    location: 'Provo',
    occupations: ["Lifeguard", "Custodian", "Mentor"],
    hobbies: [{
                    "name": "climbing",
                    "type": "outdoors"
                },
                {
                    "name": "swimming",
                    "type": "watersport"
                }],
    skills: [{
        "id": "1",
        "name": "pong",
        "experience": "Expert"
    }]
    
}

module.exports = {
    
    getName: function (req, res) {
        console.log(req.query.name)
        res.status(200).send({
            "name": me.name
        });
    },

    getLocation: function (req, res) {
        res.status(200).send({
            "location": me.location
        });
    },

    getOccupations: function (req, res) {
        console.log(req.query);
        if (req.query.order === 'desc') {
            res.status(200).send({
                "occupations": me.occupations.sort().reverse()
            })
        } else if (req.query.order === 'asc') {
            res.status(200).send({
                "occupations": me.occupations.sort()
            })
        } else if (req.query.order === undefined) {
            res.status(200).send({
                "occupations": me.occupations
            })
        }
    },

    getLatest: function (req, res) {
        res.status(200).send({
            "latestOccupation": me.occupations[me.occupations.length - 1]
        })
    },

    getHobbies: function (req, res) {
        res.status(200).send({
            "hobbies": me.hobbies
        })
    },
    
    getType: function (req, res) {
        var specificHobbies = [];
        for (var i = 0; i < me.hobbies.length; i++) {
            if (req.params.type === me.hobbies[i].type) {
                specificHobbies.push(me.hobbies[i]);
            }
        }
        res.status(200).send({
            "filteredHobbies": specificHobbies
        })
    },
    
    putName: function (req, res) {
        me.name = req.body.name;
        res.status(200).send({
            "name": me.name
        })
    },
    
    putLocation: function (req, res) {
        me.location = req.body.location;
        res.status(200).send({
            "location": me.location
        });
    },
    
    postHobbie: function (req, res) {
        me.hobbies.push(req.body);
        res.status(200).send({
            "hobbies": me.hobbies
        })
    },
    
    postOccupation: function (req, res) {
        me.occupations.push(req.body.occupation);
        res.status(200).send({
            "occupations": me.occupations
        })
    },
    
    getSkills: function (req, res) {
        res.status(200).send({
            "skills": me.skills
        })
    },
    
    postSkills: function (req, res) {
        me.skills.push(req.body);
        res.status(200).send({
            "skills": me.skills
        })
    }
    

}