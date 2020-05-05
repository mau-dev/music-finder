import React from 'react';
import TrackItem from './TrackItem';

class Tracks extends React.Component {
	state = {
		tracks: [
			{
				id: 1,
				name: 'Disorder',
				artists: [ ' Void', ' Materia' ],
				album: 'Momentum',
				label: 'Alexandar',
				image: 'https://f4.bcbits.com/img/a2957982992_16.jpg'
			},
			{
				id: 1,
				name: 'Constant Craving',
				artists: [ 'Sæbius' ],
				album: 'Lifeform',
				label: 'Alexandar',
				image: 'https://f4.bcbits.com/img/a3249980813_2.jpg'
			},
			{
				id: 1,
				name: 'Symbiosis',
				artists: [ ' Void' ],
				album: 'Momentum',
				label: 'Alexandar',
				image: 'https://f4.bcbits.com/img/a2973844540_2.jpg'
			}
		]
	};

	render() {
		return (
			<div style={trackStyle}>{this.state.tracks.map((track) => <TrackItem key={track.id} track={track} />)}</div>
		);
	}
}
const trackStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Tracks;
