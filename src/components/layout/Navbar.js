import React, {Component} from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar bg-light'>
				<h4>{this.props.title}</h4>
			</div>
		);
	}
}

export default Navbar;
