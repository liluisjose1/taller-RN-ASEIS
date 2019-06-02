import React, { Component } from "react";
//npm i react-native-gifted-chat
//npm i react-native-dialogflow-text
import { View, KeyboardAvoidingView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  avatar: "http://pngimg.com/uploads/android_logo/android_logo_PNG34.png"

};
export default class App extends Component {
  constructor(props) {
    super(props);

    let primerMsj = {
      _id: 1,
      text: "Hola Bienvenido al ChatBot ASEIS",
      createdAt: new Date(),
      user: BOT_USER
    }

    this.state = {
      mensaje: [primerMsj]
    }
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "dialogflow-auhcbm@prueba-chat-aseis-xavopu.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCs/C4CZQWDAli\nw5goZjq1KO1F/dxOEyYVuDlLRioZaRmmjqx6dtVJ16qfa2QTLjE82RylqtcY+M8O\nZLFrpr2CiFAMSz9oLPxOzLAU/DyVmThEAuo2Gd8nw9IJc6pyJ3U59KM8K1Jm1tCj\nPPGkAInQN31mEnA9rbU06PEDWFa2tT73W8abJgANsFNQ0iCVEPdbRMirwGY9Liru\nD/CqrMfcBEW0j2Iiwwj7YyjCW82MgETFhwpY+OGuBcFnw8H7eZERBQybzHNo0Ke/\nhpIY1VnWxb+U1ah6zaOVon/2Ewrxiepb/0RIYFIU8ECZyfnMuPbQ5UeawsSAprLT\n7LCpUyDdAgMBAAECgf96Jvh7mmpcFU2VRXawxXJk/QE1EuUWT3tqszfpgfEEHKUJ\nWetqPwc8IgQUjq8sPPluQaviCz6SemqJjvgyg5R+Qj/2WiLRRy8EQRGM/HoifX5P\nZfaK+rBNpfDZNhuOu8DeVFYVBjVlT7WyQl9XzFP/XCZCDk9c1KzM6K1pJLvtHM1H\nuffVDz1yqj4+1Kxhx2dkk7xJ05C0xj7wRq6j75WVQMOAR2Xu86lIzg8dA9TiGdHl\nrhDEVDrGmwXBBX7XauPDfrXMi8hrjGF/P3ttAWKcolldmyHfT2tsdFCJx3VPOGoF\nHqCjCkGfLGpNJeMLF1aNGWP2QLX+F/zRyGAgEPsCgYEA4oF3NDs3GyF+uBIGjxQe\nfX1vGf4aPqI6k0zzh8rD6wPWooLRpqVd46/kbaJ8NUeB2qzy3mLPzNbFmsOmRFB+\nYY6dE6ls9WJTjE65D4u4jUrvO1Pk947nvHPxY8+ewf1DWGeaqTKQuiLuqyViROJH\n5URU36YmbCp+2+uy1nOVE0MCgYEA3A5U/VbEt6lP8MA6HtiC460pgyYRW3GtRWFo\ndZT8EwHhG7/iuuLCU8MA+RArqLmiWij1/bv5RQW8ntniS62ZaU9Rsw3yWxoPzHg2\necX7XMkVidUoNzLrMX7e9CMd9CiXD32XuuimDm8QIrutGJWlJfRbXmIYv7oWKTh2\n/u2T6V8CgYEA3eDAqnOPKY6IGTvfHO0yaO8klCur/crg4kYxEMX5YRAjgpHvWPUI\noe89LoBKd86ST2m3h0z4DcodS9t31deb1WjkScxfpYgqG3lKIwZVRGMxMcaetjpQ\nmvRgc8t/0ruK6uCiSjf0OcHaVeCLALtAfj+PfH2/iZmfJ0MdrqEOWQ0CgYEAi/UJ\nlP8kqnMjBsobrRajWM7/ggwqKfDI9UGYwH/7OtONKqsGNzqVwdRawA3K1ssKOTGo\nErMFPSMC7j1BskQ9OD9chPcv10ViGveyHg0Pa9nwuvM5WrIl6Br7DmdvW6SdPxrv\n786cHr4AkzauRt6WZOdfXU4i0341Lg5dkJHl6x0CgYAwnEH/PVwbXgSfUeqxhjML\nCnKhZG3UKFGImIDOeNCEDNsnr5MADZrw3OGOld1f1N2W4UHFGYEMyXrNLnz+orcb\ncuVn/fpAgn/J9/EoTKwaL2lZvSr01fqwpYXjh/L5P723v6IsL2Kh3FjAIq+wpFDG\nBRnHIx/C0ib8vsnTxQlD1w==\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_SPANISH,
      "prueba-chat-aseis-xavopu"
    )
  }

  sentBotResponse(text) {
    let msj = {
      _id: this.state.mensaje.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    }
    this.setState(previousState => ({ mensaje: GiftedChat.append(previousState.mensaje, [msj]) }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sentBotResponse(text);
  }

  onSend(mensaje = []) {
    this.setState(previousState => ({ mensaje: GiftedChat.append(previousState.mensaje, mensaje) }));
    let mensajes = mensaje[0].text;

    Dialogflow_V2.requestQuery(
      mensajes,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }} >
        <GiftedChat
          messages={this.state.mensaje}
          onSend={mensaje => this.onSend(mensaje)}
          user={{
            _id: 1
          }}
          placeholder='Aa'
          locale='es'
        />
      </KeyboardAvoidingView>
    );
  }

}