import { Button, StyleSheet, Text, TextInput, View,Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Update = (props) => {
const [name, setname] = useState(props.route.params.item.name)
const [gia, setgia] = useState(props.route.params.item.price)
  

const Updatea = () => {
    let _id = props.route.params.item.id
    let objSP = {name : name, price: gia}
    let Api = 'http://192.168.0.105:3000/products/' + _id

    fetch(Api, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objSP),
    })
    .then ((res)=>{
      if(res.status == 200)
      Alert.alert('Sua thanh cong')
    })
    .catch ((ex)=>{
      console.log(ex);
    })
    
    
}

  return (

    <View>
      <Text>Update</Text>

    <TextInput placeholder='Uname' onChangeText={ (txt)=>{setname (txt)}}/>
    <TextInput placeholder='Ugia' onChangeText={ (txt)=>{setgia (txt)}}/>
    <Button title='Sua' onPress={Updatea} />
    </View>
  )
}

export default Update

const styles = StyleSheet.create({})