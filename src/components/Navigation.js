import React, { Component } from 'react'

class Navigation extends Component {
    render() {

        let sections = [
            { text: "Home", link: '#home', className: "active"},
            { text: "About", link: '#about'},
            { text: "Skills", link: '#skills'},
        ];
        sections = sections.map((item)=>{
            return <li key={item.link} className={item.className}><a href={item.link} data-toggle="tooltip" data-placement="right" title={item.text}><span>{item.text}</span></a></li>
        })

        return (
            <nav className="side-navigation" id="nav">
                <ul className="dot-edicator">
                    {sections}
                </ul>
            </nav>
        )
        
    }
}

export default Navigation