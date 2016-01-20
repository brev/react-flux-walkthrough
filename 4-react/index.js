var Hello = React.createClass({
  render: function () {
    return (
    	<div>
       	<p>
	        Hello <strong>Brev</strong>
        </p>
			  <input placeholder="Enter name" type="text" />
			</div>
 		);
  }
});

ReactDOM.render(<Hello />, document.getElementById('container'));
