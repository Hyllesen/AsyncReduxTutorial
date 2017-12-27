import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      errorMessage: "",
      isFetching: true
    };
  }

  async fetchRandomPeopleAPI() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      this.setState({ items: json.results, isFetching: false });
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  }

  componentDidMount() {
    this.fetchRandomPeopleAPI();
  }
  render() {
    let content = <PeopleList items={this.state.items} />;
    if (this.state.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});
