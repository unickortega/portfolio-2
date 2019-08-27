import React, {Component} from 'react'

class SkillTable extends Component {
    render() {

        let skills = [
            {
                name: 'Laravel',
                mastery: '90',
            },
            {
                name: 'Vue.js',
                mastery: '95',
            },
            {
                name: 'Php',
                mastery: '80',
            },
            {
                name: 'Javascript',
                mastery: '90',
            },
            {
                name: 'HTML',
                mastery: '95',
            },
            {
                name: 'React.js',
                mastery: '60',
            }
        ]

        skills = skills.map((skill, index) => {
            var paddingBottom = {paddingBottom: (index === skills.length -1 ? '100px' : '')}
            return (
                <div key={skill.name} className="skill-row">
                    <div style={{...paddingBottom}} className="skill-cell border-right border-secondary pl-5 pr-2 text-right">
                        {skill.name}
                    </div>
                    <div className="skill-cell w-100 pl-2">
                        <div style={{...paddingBottom}}>
                            <div className="skill-mastery mt-3 mb-3" style={{width: skill.mastery+'%'}}></div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="skill-table w-100">
                {skills}
            </div>
        )
    }
}

export default SkillTable