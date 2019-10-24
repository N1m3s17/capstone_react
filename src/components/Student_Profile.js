import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile_image from '../profile_image.jpg';
import './Student_Profile.css';

class Student_Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="top_section">
                <div className="student_image">
                    <img src={profile_image} alt="Profile image" />
                </div>
                </div>
                <div className="student_name">
                    <p>Welcome, Semin Patel</p>
                </div>
                <div className="student_description">
                    <p>Level of Education: University
                        <br></br>
                       Email: seminspatel@gmail.com
                    </p>
                </div>
                <hr className="style1" />
                <div className="student_body">
                    <div className="student_body_header">
                        <p>Bio:</p>
                    </div>
                    <div className="student_body_para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan erat non sapien eleifend, vel dignissim dui accumsan. Nunc molestie cursus augue, et euismod diam. Aliquam tortor tellus, consequat sit amet tellus ut, consequat consectetur enim. Sed faucibus placerat velit. Etiam eget tortor vitae felis mattis imperdiet quis auctor magna. Mauris aliquet sapien eu pulvinar vestibulum. Duis in dapibus libero, eu tempor massa. Donec varius tristique enim, vel luctus magna. Nam venenatis sagittis ultrices. Nulla sit amet dapibus libero. Aliquam egestas mollis neque.</p>
                    </div>

                    <div className="student_body_header">
                        <p>Hobbies:</p>
                    </div>
                    <div className="student_body_para">
                            <ul>Playing video games</ul>
                            <ul>Basketball</ul>
                            <ul>Football</ul>
                            <ul>Coding</ul>
                    </div>
                </div>

                <div className="student_footer btn-toolbar">
                    <button type="button" className="btn btn-secondary btn-space">Edit</button>
                    <span></span>
                    <button type="button" className="btn btn-secondary btn-space">Delete</button>   
                </div>   
            </div>
        );
    }
}

export default Student_Profile;