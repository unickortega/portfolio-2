import React, {Component} from 'react'
import Navigation from './Navigation'

class Header extends Component {
    render() {
        var experience = this.getYearsOfExperience(new Date(2016, 6, 29), new Date())

        return (
            <div id="home">
                <header id="header">
                    <Navigation/>
                    <div className="header-text">
                        <div className="name">
                            Uelmar Ortega
                        </div>
                        <div className="divider">
                            <i className="fas fa-code fa-2x"></i>
                        </div>
                        <div className="qualifications">
                            Developer / Designer / Writter
                            <br/>
                            {experience} Experience
                        </div>
                    </div>
                </header>
            </div>
        )
    }

    getYearsOfExperience(date_1, date_2)
    {
        
        //convert to UTC
        var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
        var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));


        var yAppendix, mAppendix;


        //--------------------------------------------------------------
        var days = date2_UTC.getDate() - date1_UTC.getDate();
        if (days < 0)
        {

            date2_UTC.setMonth(date2_UTC.getMonth() - 1);
            days += this.daysInMonth(date2_UTC);
        }
        //--------------------------------------------------------------
        var months = date2_UTC.getMonth() - date1_UTC.getMonth();
        if (months < 0)
        {
            date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
            months += 12;
        }
        //--------------------------------------------------------------
        var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();



        let result;

        if (years > 1) yAppendix = " years";
        else yAppendix = " year";
        if (months > 1) mAppendix = " months";
        else mAppendix = " month";

        result = years + yAppendix

        if(months > 0){
            result = ", " + months + mAppendix
        }

        return result;
    }

    daysInMonth(date2_UTC)
    {
        var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
        var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
        var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }
}

export default Header