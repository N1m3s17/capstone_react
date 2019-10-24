import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile_image from '../profile_image.jpg';
import './Teacher_Profile.css';

class Teacher_Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="top_section">
                <div className="teacher_image">
                    <img src={profile_image} alt="Profile image" />
                </div>
                </div>
                <div className="teacher_name">
                    <p>Welcome, Ryan Legaspi</p>
                </div>
                <div className="teacher_description">
                    <p>Level of Education: University
                        <br />
                       Email: railegaspi@gmail.com
                        <br />
                        Speciality: Physics | Calculus | Computer Science
                    </p>
                </div>
                <hr className="style1" />
                <div className="teacher_body">
                    <div className="teacher_body_header">
                        <p>Bio:</p>
                    </div>
                    <div className="teacher_body_para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan erat non sapien eleifend, vel dignissim dui accumsan. Nunc molestie cursus augue, et euismod diam. Aliquam tortor tellus, consequat sit amet tellus ut, consequat consectetur enim. Sed faucibus placerat velit. Etiam eget tortor vitae felis mattis imperdiet quis auctor magna. Mauris aliquet sapien eu pulvinar vestibulum. Duis in dapibus libero, eu tempor massa. Donec varius tristique enim, vel luctus magna. Nam venenatis sagittis ultrices. Nulla sit amet dapibus libero. Aliquam egestas mollis neque.</p>
                    </div>

                    <div className="teacher_body_header">
                        <p>Hobbies:</p>
                    </div>
                    <div className="teacher_body_para">
                            <ul>Reading</ul>
                            <ul>Coding</ul>
                            <ul>Eating</ul>
                            <ul>Math</ul>
                    </div>
                    <div className="teacher_body_header">
                        <p>Teaching Skills:</p>
                    </div>
                    <div className="teacher_body_para">
                            <ul>Visual</ul>
                            <ul>Problem Solving</ul>
                            <ul>Good Listener</ul>
                    </div>
                </div>

                <div className="teacher_footer btn-toolbar">
                    <button type="button" className="btn btn-secondary btn-space">Edit</button>
                    <span></span>
                    <button type="button" className="btn btn-secondary btn-space">Delete</button>   
                </div>   
            </div>
        );
    }
}

export default Teacher_Profile;