import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform, Image
} from "react-native";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCQIPzgIzRvN8490_whiSfo12_lNZgX9P8",
  authDomain: "taller-aseis.firebaseapp.com",
  databaseURL: "https://taller-aseis.firebaseio.com",
  projectId: "taller-aseis",
  storageBucket: "taller-aseis.appspot.com",
  messagingSenderId: "449460574512",
  appId: "1:449460574512:web:12771b54eadb5031"
};
firebase.initializeApp(firebaseConfig);
// galio component
import { Block, Button, Input, NavBar, Text } from "galio-framework";
import theme from "./theme";

const { height, width } = Dimensions.get("window");

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  SignIn = () => {
    try {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('logeado');
          this.props.navigation.navigate("Dashboard");
        }
      });
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  render() {
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Block
            flex
            center
            style={{
              marginTop: theme.SIZES.BASE * 1.875,
              marginBottom: height * 0.1
            }}
          >
            <Block
              row
              center
              space="between"
              style={{ marginVertical: theme.SIZES.BASE * 1.875 }}
            >
              <Block flex middle center>
                <Image
                  shadowColor={theme.COLORS.FACEBOOK}
                  source={require('../assets/icon.png')}
                />
              </Block>
            </Block>
            <Text muted center size={theme.SIZES.FONT * 0.675}>
              Introduce el usuario y contraseña para iniciar sesión
            </Text>
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Correo electronico"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Input
                rounded
                password
                viewPass
                autoCapitalize="none"
                placeholder="Contraseña"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.setState({ password: text })}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                color={theme.COLORS.ASEIS}
                onPress={() => this.SignIn()}
              >
                Iniciar
              </Button>
              <Button
                color="transparent"
                shadowless
                onPress={() => this.props.navigation.navigate('Profile')}

              >
                <Text
                  center
                  color={theme.COLORS.ASEIS1}
                  size={theme.SIZES.FONT * 0.75}
                >
                  {"No tienes una cuenta? Regístrate"}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  }
});
