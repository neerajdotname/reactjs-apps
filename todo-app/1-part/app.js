var React = require('react');

var HelloMessage = React.createClass({
  render () {
    return  (
        <div>Hello {this.props.name}</div>
    );
  }
});

React.render(<HelloMessage name="John6" />, document.body);

