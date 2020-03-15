import React, { Component } from 'react';
import {connect} from 'react-redux';
import './course-item.css';
import {Link} from "react-router-dom";

class CourseItem extends Component {

    render() {
        const course = this.props.course;
        return (
            <div className='course-item-wrap'>
                <div className='date-title-wrap'>
                <p>{course.date}</p>
                <h3>{course.title}</h3>
                </div>
                <div className='description-wrap'>
                <p>{course.description}</p>
                </div>
                <div className='duration-button-wrap'>
                <p>{course.duration.slice(0,2)}h {course.duration.slice(3,5)}min</p>
                    <div className='list-button-icon'><b>...</b>
                            <Link to='/add-edit-form'><button onClick={()=>this.props.dispatch({type:'EDIT_COURSE',id:course.id})}> Edit </button></Link>

                        <button onClick={()=>this.props.dispatch({type:'DELETE_COURSE',id:course.id})}>
                            Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(CourseItem);