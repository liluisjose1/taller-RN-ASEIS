import React, { Component } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import { Constants, Location, Permissions } from "expo";


export default class App extends Component {

    state = {
        localizacion: null,
        errorMenssage: null
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({ errorMenssage: 'Error, modulo no funciona en tu dispositivo' });
        } else {
            this._getLocataionAsync();
        }
    }

    _getLocataionAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({ errorMenssage: 'Exito, permisos admitidos' });
        }

        let localizacion = await Location.getCurrentPositionAsync({});
        this.setState({ localizacion });
        console.log(localizacion);
    }

    render() {
        let text = 'Cargando...';
        if (this.state.errorMenssage) {
            text = this.state.errorMenssage;
        } else {
            text = JSON.stringify(this.state.localizacion);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.paragrah}>{text}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragrah: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center'
    }
});