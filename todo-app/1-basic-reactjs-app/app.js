var React = require('react');

var HelloMessage = React.createClass({


  render () {
    greeting = 'Hello';
    msg = `${greeting} ${this.props.name}`
    console.log(msg);

    return  (
        <div> { msg } </div>
    );
  }
});

React.render(<HelloMessage name="John7" />, document.body);
