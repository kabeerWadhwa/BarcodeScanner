import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: ''
    }
  }
  getCameraPermissions = async() => {
    const{status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      getCameraPermissions: status === "granted"
    })
  }
  render(){
    const hasCameraPermissions = this.state.hasCameraPermissions
    return(
      <View>
        <Text>{hasCameraPermissions === true? this.state.scannedData: "Request Camera Permissions"}</Text>
        <TouchableOpacity onPress = {this.getCameraPermissions}>
          <Text>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    )
  }
}