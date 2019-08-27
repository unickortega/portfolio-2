import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <section id="about" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center mb-5">
                            <img className="rounded-circle" style={{maxWidth: '200px'}} alt="profile" src="/assets/img/profilepic.jpeg"/>
                        </div>
                        <div className="col-md">
                            <h5 className="mt-0">Introduction</h5>
                            <p>
                                Hi, my name is Uelmar. I am a Laravel and Vue.js developer.
                            </p>
                            <h5 className="mt-0">Work Experience</h5>
                            <ul>
                                <li>Nexseed Inc.</li>
                                <li>AguyIknow Ph</li>
                            </ul>
                            <h5 className="mt-0">Education</h5>
                            <ul>
                                <li>Bachelor of Science in Information Technology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About