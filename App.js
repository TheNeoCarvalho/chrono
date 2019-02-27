import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Filter from "./src/components/Filter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onStop = this.onStop.bind(this);
    this.timer = null;

    this.state = {
      contador: 0,
      textButton: "Start"
    };
  }

  onPress = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        textButton: "Start"
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          contador: this.state.contador + 0.1,
          textButton: "Pause"
        });
      }, 100);
    }
  };

  onStop() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      contador: 0,
      textButton: "Start"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native!</Text>
        <Text style={styles.subTitle}>Cronômetro</Text>
        <Image
          source={{
            uri:
              "https://cdn.icon-icons.com/icons2/620/PNG/512/stopwatch_icon-icons.com_56756.png"
          }}
          style={{ width: 150, height: 150 }}
        />
        <Text style={styles.contador}>{this.state.contador.toFixed(1)}</Text>

        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.btnText}>{this.state.textButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onStop}>
            <Text style={styles.btnText}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 45
  },
  subTitle: {
    fontSize: 30,
    paddingBottom: 5
  },
  contador: {
    fontSize: 55
  },
  btn: { flexDirection: "row" },
  button: { width: 150, height: 50, backgroundColor: "#000", margin: 10 },
  btnText: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    paddingTop: 10
  }
});
