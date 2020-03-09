import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import dataList from '../../FlatListJson'
import { setHomeList } from '../../../action/home'

class HomeTop extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      const { setHomeList } = this.props
      setHomeList({
        list: dataList,
        isLoading: false
      })
    }, 1000)
  }

  render() {
    // const { state: { params }, navigate } = this.props.navigation
    const { navigate } = this.props.navigation
    const { list, isLoading } = this.props
    console.log('List', list)
    console.log('isLoading', isLoading)
    return (
      <View style={{flex: 1, backgroundColor: '#9cdcfe'}}>
        <Text>HomeTop</Text>
        {/* <Text>{params.username}</Text>
        <Text>{params.title}</Text> */}
        <Button title="去详情页child" onPress={() => {
          navigate('HomeChild')
        }}/>
        {isLoading ? <ActivityIndicator/> : 
          <FlatList
            data={list}
            renderItem={({item}) => (
              <View style={{margin: 10}}>
                <Text style={{fontSize: 15}}>{item.name}</Text>
              </View>
            )}
          />
        }
      </View>
    )
  }
}

export default connect(state => {
  return {
    list: state.home.list,
    isLoading: state.home.isLoading
  }
}, {
  setHomeList
})(HomeTop)