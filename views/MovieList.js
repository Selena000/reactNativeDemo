import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Platform
} from 'react-native'

export default class MovieList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      version: ''
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()

    this.setState({
      version: Platform.Version
    })
  }

  fetchData() {
    fetch('http://localhost:9090/api/react/getMovieList')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.code === 0) {
          this.setState({
            movies: responseJson.list
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {

    if (!this.state.movies) {
      return this.renderLoadingView()
    }

    const { movies } = this.state

    return (
      <SafeAreaView>
        <FlatList
          style={styles.list}
          data={movies}
          renderItem={this.renderMovie}
          keyExtractor={(item) => item.title}
        />
      </SafeAreaView>
    )
    
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正加载在电影数据……</Text>
      </View>
    )
  }

  renderMovie({item}) {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: item.posters.thumbnail}}></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      }
    })
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});