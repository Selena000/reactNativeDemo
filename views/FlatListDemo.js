import React, { Component } from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  RefreshControl,
  Alert,
  TouchableOpacity
} from 'react-native'
import jsonData from './FlatListJson'

export default class FlatListDemo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isRefresh: false,
      isLoading: true,
      loadMore: false
    }
    this.fetchData()
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data: jsonData
      })
    }, 800)
  }

  render() {
    if (this.state.isLoading) {
      return this._renderLoading()
    }
    return this._renderFlatList()
  }

  _renderLoading() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    )
  }

  _renderFlatList() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.name + index}
          ListHeaderComponent={this._renderHeader}
          ListFooterComponent={this._renderFooter}
          refreshControl={
            <RefreshControl
              title="loading....."
              refreshing={this.state.isRefresh}
              onRefresh={this._onRefresh}
            />
          }
          onEndReached={this._loadMore}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => {
            return <View style={{margin: 10, height: 1, backgroundColor: '#ccc'}}></View>
          }}
        />
      </SafeAreaView>
    )
  }

  _loadMore = () => {
    console.log('loadmore')
    this.setState({
      loadMore: true
    })
    setTimeout(() => {
      this.setState({
        loadMore: false
      })
    }, 2000)
  }

  _renderItem({item}) {
    return (
      <TouchableOpacity onPress={() => {
        Alert.alert('点击了item')
      }}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  _renderHeader() {
    return  (
      <View style={styles.header}>
        <Text style={{color: 'white'}}>列表头部</Text>
      </View>
    )
  }

  _renderFooter = () => {
    return  (
      <View style={styles.footer}>
        {this.state.loadMore && <ActivityIndicator/>}
        <Text style={{color: 'white'}}>{this.state.loadMore ? '加载中....' : '我是有底线的'}</Text>
      </View>
    )
  }

  _onRefresh = () => {
    this.setState({
      isRefresh: true
    })

    setTimeout(() => {
      this.setState({
        isRefresh: false
      })
    }, 800)
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: 'white',
  }, 
  item: {
    margin: 20,
    fontSize: 16
  },
  header: {
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})