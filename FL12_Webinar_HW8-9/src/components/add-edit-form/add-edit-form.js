import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './add-edit-form.css';

class addEditForm extends Component {
     newId = this.props.courses.length + 1;
    editCourse = {};

    takeDataCourse = () => {
        this.props.courses.map((course) => {
            if (course.editing) {
                for (let i in course){
                    this.editCourse[i] = course[i];
                }
            }})
    }
    addCourse = () => {
        const title = this.getTitle.value;
        const description =  this.getDescription.value;
        const duration = this.getDuration.value;
        const author = this.getAuthor.value;
        const date = this.getDate.value;
        const data = {
            id: this.newId++,
            title,
            description,
            duration,
            author,
            date,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_COURSE',
            data});
        this.clearInput();
    }
    edCourse = () => {
        const newTitle = this.getTitle.value;
        const newDescription = this.getDescription.value;
        const newDuration = this.getDuration.value;
        const newAuthor = this.getAuthor.value;
        const newDate = this.getDate.value;
        const data = {
            newTitle,
            newDescription,
            newDuration,
            newAuthor,
            newDate
        }

        this.props.dispatch({ type: 'UPDATE', id: this.editCourse.id, data: data })
        this.clearInput();
    }
    clearInput = () => {
        this.getTitle.value = '';
        this.getDescription.value = '';
        this.getDuration.value = '';
        this.getAuthor.value = '';
        this.getDate.value = '';
    }

    render() {
        this.takeDataCourse();

        return (
            <div className='form'>
                   <div>
                       <h2>{this.editCourse.editing ? 'Edit':'New course'}</h2>
                     <p>Title*</p>
                    <input required type="text" ref={(input)=>this.getTitle = input}
                           defaultValue={this.editCourse.title || ''}
                       />
                   </div>
                <div>
                    <p>Description*</p>
                    <textarea required rows="5" ref={(input)=>this.getDescription = input} cols="28"
                              defaultValue={this.editCourse.description || ''}
                    />
                </div>
                <div>
                     <p>Duration*</p>
                     <input required type="time" ref={(input)=>this.getDuration = input}
                            defaultValue={this.editCourse.duration || ''}
                    />
                </div>
                <div>
                     <p>Author*</p>
                     <input required type="text" ref={(input)=>this.getAuthor = input}
                            defaultValue={this.editCourse.author || ''}
                    />
                </div>
                <div>
                     <p>Date*</p>
                     <input required type="date" ref={(input)=>this.getDate = input}
                            defaultValue={this.editCourse.date || ''}
                    />
                </div>
               <div className='buttons-wrap'>
                <Link to='/'><button onClick={this.editCourse.editing ? this.edCourse : this.addCourse}>POST</button></Link>
                <button  onClick={this.clearInput}>Cancel</button>
               </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state
    }
}

export default connect(mapStateToProps)(addEditForm);