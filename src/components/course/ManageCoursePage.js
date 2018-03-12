import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import CourseForm from "./CourseForm";


class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, this.props.course),
          errors: {},
          saving: false

        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.course.id !== nextProps.course.id) {
        // Necessary to populate form with existing course is loaded directly.
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }

    updateCourseState(event) {
      debugger;
      const field = event.target.name;
      //let course = this.state.course;
      let course = Object.assign({}, this.state.course);
      course[field] = event.target.value;

      return this.setState({course: Object.assign({}, course)});
      //return this.setState({course: course});
    }

    redirect() {
      this.setState({saving: false});
      toastr.success('Course Saved');
      this.context.router.push('/courses');
    }

    saveCourse(event) {
      event.preventDefault();
      this.setState({saving: true});
      this.props.actions.saveCourses(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });

    }

    render() {
      return (
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
        />
      );
    }

}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if(course) {
    return course[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; //from th epath /course/:id
  let course = {
    id: "",
    title: "",
    watchHref: "",
    authorId: "",
    length: "",
    category: ""
  };

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormatedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
    return {
      course: course,
      authors: authorsFormatedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
