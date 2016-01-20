// Alt.js FLUX implementation
var alt = new Alt();


// --- FLUX ACTIONS ---
function NameActions () {}
NameActions.prototype.updateName = function(name) {
	return name;
};
NameActions = alt.createActions(NameActions);


// --- FLUX STORE ---
function NameStore () {
	this.name = 'Brev';
  this.bindListeners({
    handleUpdateName: NameActions.UPDATE_NAME
  });
}
NameStore.prototype.handleUpdateName = function(name) {
	this.name = name;
};
NameStore = alt.createStore(NameStore, 'NameStore');


// --- FLUX VIEW (React Component) ---
var Hello = React.createClass({
  _styles: { color: '#29aae2' },

	_changeName: function (event) {
		let newName = event.target.value;
		NameActions.updateName(newName);
	},

	_onChange: function (state) {
    this.setState(state);
  },

	getInitialState: function () {
		return NameStore.getState();
  },

	componentDidMount() {
  	NameStore.listen(this._onChange);
	},

  render: function () {
    return (
    	<div style={this._styles}>
       	<p>
	        Hello <strong>{this.state.name}</strong>
        </p>
			  <input
    			onChange={this._changeName}
      		placeholder="Enter name"
       		type="text"
        	value={this.state.name}
        	/>
			</div>
 		);
  }
});
ReactDOM.render(<Hello />, document.getElementById('container'));


// simulate network input
setTimeout(function() {
	NameActions.updateName('Anonymous');
}, 8 * 1000);
