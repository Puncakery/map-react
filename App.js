import React, {Component} from 'react';
import { StyleSheet, Text, Image,  View, TouchableOpacity} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

export default class App extends Component {

	
	
	state = {
		location: null,
		lat: null,
		long: null
	}

	getLocation = () => {
		//alert("test");
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position.coords);
				this.setState({location});

				const lat = JSON.stringify(position.coords.latitude);
				this.setState({lat});

				const long = JSON.stringify(position.coords.longitude);
				this.setState({long});
			}
		);
	}

	render(){
		return(

			<View style={styles.container}>

				<TouchableOpacity on onPress={this.getLocation}>
					<Text style={styles.header}>Get My Location</Text>
				</TouchableOpacity>

				<MapView
					style={styles.map}
					InitialRegion={{
						latitude: 41.233560,
						longitude: -77.022700,
						latitudeDelta: 0.5,
						longitudeDelta: 0.5,
					}}
				>
					<Marker 
					coordinate={{
						latitude: '41.233560',
						longitude: '-77.022700',
					}}
					title="you are here"
					description=" i hope youre here"
					>
						<Callout tooltip>
					<View>
						<View style={styles.bubble}>
							<Text style={styles.name}>Penn College</Text>
							<Text>Education center</Text>
							<Image 
							style={styles.imgStyle}
							source={require('../spyke/assets/marker.webp')}
							/>
						</View>
						<View style={styles.arrowBorder}/>
						<View style={styles.arrow}/>
					</View>
					
						</Callout>
					</Marker>
					
				</MapView>



				{/*
				<Text>Location: {this.state.location}</Text>
				<Text>Latitude: {this.state.lat}</Text>
				<Text>longitude: {this.state.long}</Text>
				*/}

				

			</View>

		)
	}
  
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 24,
		textAlign: 'center',
		margin: 10
	},
	map:{
		width: '100%',
		height: 300,
	},
	bubble: {
		flexDirection:'column',
		alignSelf:'flex-start',
		backgroundColor: '#fff',
		borderRadius: 6,
		borderColor: '#ccc',
		borderWidth:0.5,
		padding:15,
		width:150,
	},
	arrow:{
		backgroundColor: 'transparent',
		borderColor:'transparent',
		borderTopColor:'#fff',
		borderWidth:16,
		alignSelf: 'center',
		marginTop:-32,
	},
	arrowBorder:{
		backgroundColor: 'transparent',
		borderColor:'transparent',
		borderTopColor:'#007a87',
		borderWidth: 16,
		alignSelf:'center',
		marginTop:-0.5,
	},
	name:{
		fontSize:16,
		marginBottom:5
	},
	imgStyle:{
		width:20,
		height:12,
	}
});
