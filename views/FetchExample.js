import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: false}
  }

  componentDidMount(){
    return fetch('http://localhost:9090/api/course/list')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.code === 0) {
          this.setState({
            isLoading: false,
            dataSource: responseJson.list
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  }
}