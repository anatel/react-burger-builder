import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.less';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');

  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Fragment>
        <p onClick={this.props.click}>I am {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Fragment>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);