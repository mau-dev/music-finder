import React, {Component} from 'react';

class TrackItem extends Component {
	render() {
		// const {id, name, artists, album, label, image} = this.state; //this to be changed to this.props
		const {id, name, artists, album, label, image} = this.props.track;

		return (
			<div className=' card text-center'>
				<img src={image} style={{width: '100px'}} />
				{/* {this.state.artists.map((artist) => <p>{artist}</p>)} */}
				<h3>{name}</h3>
				<h4>by{artists} </h4>
				{'  '}
			</div>
		);
	}
}

export default TrackItem;
