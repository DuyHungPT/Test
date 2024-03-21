import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Add = (props) => {

  const [name, setname] = useState('')
  const [ngaysinh, setngaysinh] = useState('')
  const [gioitinh, setgioitinh] = useState('')

  const ADDD = () => {
    let API = 'http://192.168.0.105:3000/dulieu'

    let obj = {name,gioitinh,ngaysinh}

    fetch(API, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
}).then((res)=>{
  if(res.status == 201){
    Alert.alert('them thanh cong')
    props.navigation.goBack()
  }
}).catch((ex)=>{
  console.log(ex);
})
  }

  return (
    <View>
      <Text>Add</Text>

    <TextInput placeholder='name'  onChangeText={(txt)=>{setname(txt)}}/>
    <TextInput placeholder='gioitinh'  onChangeText={(txt)=>{setgioitinh(txt)}}/>
    <TextInput placeholder='ngaysinh' onChangeText={(txt)=>{setngaysinh(txt)}} />
    <Button title='Add' onPress={ADDD} />
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})