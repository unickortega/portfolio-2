import React, {Component} from 'react'
import SkillTable from './SkillTable'

class Skills extends Component {
    render() {
        return (
            <section id="skills" className="pt-5 pb-5">
                <div className="container">
                    <h3>Skills</h3>
                    <div className="mt-5">
                        <SkillTable/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills