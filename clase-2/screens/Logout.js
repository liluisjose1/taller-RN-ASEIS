import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform, Image
} from "react-native";
import * as firebase from "firebase";
// galio component
import { Block, Button, Input, NavBar, Text } from "galio-framework";
import theme from "./theme";

const { height, width } = Dimensions.get("window");

export default class Logout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: "",
      accessToken: ""
    };
  }
  SignUp = () => {
    console.log(this.state.email.toString()+' '+ this.state.password.toString());

    try {
      if (this.state.password===this.state.password2) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      }else{
        Alert.alert("Error","Las contraseñas no coinciden");
      }
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
              Rellena los campos requeridos
            </Text>
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                returnKeyType="next"
                type="email-address"
                placeholder="Correo electrónico"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.setState({email: text})}
                />
              <Input
                rounded
                password
                viewPass
                autoCapitalize="none"
                placeholder="Contraseña"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.setState({password: text})}
                />
              <Input
                rounded
                password
                viewPass
                autoCapitalize="none"
                placeholder="Repite Contraseña"
                style={{ width: width * 0.9 }}
                onChangeText={(text) => this.setState({password2: text})}
                />
            </Block>

          </Block>
          <Block flex middle>
              <Button
                round
                color={theme.COLORS.ASEIS}
                onPress={() => this.SignUp()}
              >
                Registrar
              </Button>
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
