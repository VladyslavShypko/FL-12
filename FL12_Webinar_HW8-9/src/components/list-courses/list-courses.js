import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseItem from '../course-item/course-item.js';
import Header from '../header/header';
import './list-courses.css';

class ListCourses extends Component {
        render() {
                return (
                    <div className='list-wrap'>
                        <Header/>
                        {this.props.courses.map((course) => (
                            <div key={course.id}>
                                    <CourseItem key={course.id} course={course} />
                            </div>
                        ))}
                    </div>
                );
        }
}
const mapStateToProps = (state) => {
    return {
        courses: state
    }
}
export default connect(mapStateToProps)(ListCourses);

