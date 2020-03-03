import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  Alert
} from 'react-native'

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

class PizzaTranslator extends Component {

  // render() {
  //   return (
  //     <View style={{padding: 10}}>
  //       <TextInput
  //         style={{height: 40}}
  //         placeholder="Type here to translate!"
  //         onChangeText={(text) => this.setState({text})}
  //         value={this.state.text}
  //       />
  //       <Text style={{padding: 10, fontSize: 42}}>
  //         {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
  //       </Text>
  //     </View>
  //   );
  // }

  state = {
    text: ''
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput 
          style={{height: 40}} 
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
        />  
        <TextInput style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
        </TextInput>
      </View>
    )
  }
}

class ButtonBasics extends Component {

  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }

  _onPressButton() {
    Alert.alert('Tapped Button!!!!!!!')
  }

  render() {
    return (
      <View style={styles2.container}>
        <View style={styles2.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press me"></Button>
        </View>
      </View>
    )
  }
  
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.buttonContainer}>
  //         <Button
  //           onPress={this._onPressButton}
  //           title="Press Me"
  //         />
  //       </View>
  //       <View style={styles.buttonContainer}>
  //         <Button
  //           onPress={this._onPressButton}
  //           title="Press Me"
  //           color="#841584"
  //         />
  //       </View>
  //       <View style={styles.alternativeLayoutButtonContainer}>
  //         <Button
  //           onPress={this._onPressButton}
  //           title="This looks great!"
  //         />
  //         <Button
  //           onPress={this._onPressButton}
  //           title="OK!"
  //           color="#841584"
  //         />
  //       </View>
  //     </View>
  //   );
  // }
}

const styles2 = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default class HelloWorld extends Component {
  
  state = {
    isShowText: false
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShowText: !this.state.isShowText
      })
    }, 3000)
  }

  render() {
    // if (!this.state.isShowText) {
    //   return null
    // }
    return (
      <SafeAreaView>
        {/* <View style={styles.hello}>
        {/* <Text>Hello world....</Text> */}
        {/* <Greeting  name="name1"/> */}
        {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
        {/* <View style={{flex: 2, backgroundColor: 'yellowgreen'}}></View> */}
        {/* <View style={{flex: 3, backgroundColor: 'blue'}}></View> */}
      {/* </View> */}
      {/* <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}> */}
        {/* <View style={{flex: 1,width: 50, backgroundColor: 'powderblue'}} /> */}
        {/* <View style={{flex: 2,width: 60, backgroundColor: 'skyblue'}} /> */}
        {/* <View style={{flex: 3,width: 70, backgroundColor: 'steelblue'}} /> */}
      {/* </View> */}
        <View>
          {/* <PizzaTranslator/> */}
          <ButtonBasics/>
        </View>
      </SafeAreaView>
    )
  }

  // render() {
  //   let pic = {
  //     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  //   }
  //   return (
  //     <Image source={pic} style={styles.image} />
  //   )
  // }
}

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100
  }
})