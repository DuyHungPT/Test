import { ActivityIndicator, Alert, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const List = (props) => {

const [isLoading, setisLoading] = useState(true)
const [dssp, setdssp] = useState('')
const [modala, setmodala] = useState(null)

const getList =async () => {
 let API = 'http://192.168.0.105:3000/dulieu'

 try {
  const response = await fetch(
    API
  );
  const json = await response.json();
 setdssp(json)
} catch (error) {
  console.error(error);
}finally{
  setisLoading(false)
}
}
useEffect(() => {
  getList();
}, []);
  const confirm = (item) => {
    Alert.alert (
      "Xac Nhan Xoa ?",
      "Ban Co Muon Xoa Khong",

      [
        {
          text:"Huy",
          style: 'cancel'
        }, 
        {
          text: "Xoa",
          onPress: ()=> XoaSP(item)
        }
      ]
    )
  }
  const XoaSP = (item) => {
   let  API_del = 'http://192.168.0.105:3000/dulieu/' + item.id

    fetch(API_del, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
     
    }).then((res)=>{
      if(res.status == 200){
        Alert.alert('Xoa thanh cong')
        getList()
      }
    }).catch((ex)=>{
      console.log(ex);
    })
      }
  
const render = ({item}) => {
  return (
    <View style={{flexDirection:'row',borderWidth: 2,justifyContent:'space-around',alignItems:'center',borderRadius: 10,padding: 10}}>
      <View>
     <TouchableOpacity onPress={()=> setmodala(item)}>
      <Text>{item.name}</Text>
     </TouchableOpacity>
         
    
         <Text>{item.gioitinh}</Text>
         <Text>{item.ngaysinh}</Text>
      </View>
      <View>
        <Image source={require('../images/logo-quan-cafe-7.jpg')} style={{width: 100,height: 100}}/>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Add')}>
            <Text>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>confirm(item)}>
            <Text>    |   DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  )
}

  return (
    <View>
      <Text>List</Text>
     <Modal
     visible={modala !== null}
     transparent={true}
     animationType='slide'
     >
    <View style={styles.container}>
      <View style={styles.view}>
        {
          modala && (
            <>
            <Text>{modala.name}</Text>
            <Text>{modala.gioitinh}</Text>
            <Text>{modala.ngaysinh}</Text>
            <TouchableOpacity onPress={()=>setmodala(null)}>
              <Text>close</Text>
            </TouchableOpacity>
            </>
          )
        }
      </View>
    </View>

     </Modal>
      {
        isLoading ? (
          <ActivityIndicator/>
        )  :  (
           <FlatList
      data={dssp}
      keyExtractor={({id})=>id}
      renderItem={render}
      />
        )
      }
     
    </View>
  )
}

export default List

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)'
   },
   view: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff'
   }
})