import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <section id="footer" className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <h6>Social Media</h6>
                            <a href="#">
                                <div className="rounded-circle media-icon bg-secondary text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md">
                            <h6>Contact Details</h6>
                            <ul className="list-unstyled">
                                <li className="pt-1 pb-1">Cebu City Philippines, 6000</li>
                                <li className="pt-1 pb-1">uelmarortega@gmail.com</li>
                                <li className="pt-1 pb-1">09280918167</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5"><small>Developed with <i className="fab fa-2x fa-react text-primary"></i> React.js</small></p>
                </div>
            </section>
        )
    }
}

export default Footer