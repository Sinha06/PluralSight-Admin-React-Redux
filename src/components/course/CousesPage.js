import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

/*
    this.state = {
      course: {title: ''}
    };

    this.onTitleChange =  this.onTitleChange.bind(this);
    this.onClickSave =  this.onClickSave.bind(this);*/
  }

  /*onTitleChange(event) {
    const  course = this.state.course;
    course.title =  event.target.value;
    this.setState({course: course});
  }*/

  /*onClickSave() {
    //alert(`Saving ${this.state.course.title}`);
    //this.props.dispatch(courseActions.createCourse(this.state.course));

    //this.props.createCourse(this.state.course);

    this.props.actions.createCourse(this.state.course);
  }*/

  courseRow(course, index) {
    return <div key={index}> {course.title} </div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1> Courses </h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
        {/*{this.props.courses.map(this.courseRow)}*/}
        {/*<h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />*/}
      </div>
    );
  }
}

//export default CoursesPage;

/*
* CoursesPage component to work with Redux, we need to reference the connection function
* which comes with React-Redux.
* And instead of exporting a plain component, we are goiung to export a component that's decorated by the React-Redux Connect function
*
* The Connect function is what we use to create components that can interact with Redux.
* SO instead of exporting the CoursesPahe, I'm goung to export now tht CoursesPage wrapped in a call to Connect.
*
* Connect is a higher order component that's going to owrap our CoursesPage.
* And Connect takes two parameters, the first being 'mapStateToProps'and the second being "mapDispatchToProps".
* Each of these parameters is a function.
*
*
* mapStateToProps takes two parameters, the first being state and the second being ownProps.
* Inside this function we are going to define an objecr that returns the properties that we'd like to see.
* exposed on our component. So, for instance, if I say courses then. i'm saying i would like to be able to access my courses by saying this.props.courses up
* Now, what is need to define though is how to get that course data. state is function parameter represents the state that's withing our Redux store.
* So to access this state, I can say state.courses. And now I am accessing the course data that's within our Redux store(line 17 at rootReduces index.js)
*
* mapStateToProps also take another parameter, which is ownProps. This parameter let us access props that are being attached to this component.
* That's why it is called own props because it is reference to the component's own props.
* Now in this cases, it will be most useful for accessing routing related props injected by React Router.
*
*
* second parameter to connect is mapDispatchToProps.
* mapDispatchToProps: what its really for is deciding what actions you want to expose on your component.
* Now, this ia an optional parameter, and for the moment, we will delete it.
* When we omit this parameter, something interesting happens.
* Instead, our component automatically gets a dispatch property attache to it.
* And that's injected by Connect. So Connect is saying, Oh, if you don't have put this second parameter on here,
* then you'll abkle to come up here and say this.props.dispatch.
*
* now what is dispatch? : Dispatch is a function that allows you to fire off your actions. So i will be able to dispatch different actions that we've defined in our actions file over here is courseActions.
*
* import * as courseActions from '../../actions/courseActions';
* And now that we have access to our createCourse action in our component, we can go ahead and update our onClickSave function.
* this.props.dispatch(courseActions.createCourse(this.state.course));
*
* this is the function that we need to call  to be able to fire off an action that Reduc will handle. Now we need to pass it an actions.
*
*
* mapDispatchToProps: determines what actions are available in the component.
* mapDispatchToProps takes one parameter, which is dispatch. This will get injected in by thye connect function.
* This function determines what actions are in our component. So in this function, we will also wrap our action creators in a call to dispatch.
*
* The action that we want here is createCourse, so we will call it createCourse, and will call dispatch and then call courseActions.createcurse, ,and will pass course
*
*
* */

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  //createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
 return {
  // createCourse: (course) => dispatch(courseActions.createCourse(course))
   actions: bindActionCreators(courseActions, dispatch)
 };
}

//export default CoursesPage;
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
