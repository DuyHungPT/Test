import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const Add = () => {

   const [tenSP, settenSP] = useState('')
   const [gia, setgia] = useState(0)

   const SavePro = () => {
    let objSP = {name : tenSP, gia: gia}
    let url_api = 'https://65bba22852189914b5bcb4f3.mockapi.io/datadayroi'
   
    fetch(url_api, {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify( objSP )
    })
    .then ( (res)=> {
    if(res.status == 201)
    Alert.alert("Them Thanh Cong")
    })
    .catch ((ex)=>{
    console.log(ex);
    })
    
    }
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize:18, marginTop: 50,}}>Add</Text>
      <TextInput style={styles.input} placeholder='Ten Sp' onChangeText={ (txt)=>{ settenSP (txt) }} />
      <TextInput style={styles.input} placeholder='Gia' onChangeText={ (txt)=>{ setgia (txt) }} />
      <Button title='Save' onPress={SavePro} />
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
       
    },
    input:{
      width: 350,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      margin: 10,
      alignContent: 'center',
      alignSelf: 'center'
  },
})