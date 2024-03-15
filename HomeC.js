import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View ,Modal, TouchableOpacity,Alert,TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react'

const HomeC = (props) => {
 
    const [isLoading, setisLoading] = useState(true)
    const [dssp, setdssp] = useState([])

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const getAPi = async ()=> {
        let url_api = 'https://65bba22852189914b5bcb4f3.mockapi.io/datadayroi'
        try {
            const response = await fetch(url_api);
            const data = await response.json();
            setdssp (data);
            console.log(data);
          } catch (error) {
            console.error(error);
          }finally {
            setisLoading(false);
          }
    
    }
    // modal
    const openModal = (item) => {
      setSelectedProduct(item);
      setModalVisible(true);
  };

  const closeModal = () => {
      setModalVisible(false);
  };

    const renderProduct = ({item}) => {

    // xoa sp
    const xoaSP = () => {
        let url_api_del = 'https://65bba22852189914b5bcb4f3.mockapi.io/datadayroi/'+item.id;
        fetch(url_api_del, {
            method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            }
            })
            .then ( (res)=> {
            if(res.status == 200){
            Alert.alert("Xoa Thanh Cong")
            getAPi();
            }
            })
            .catch ((ex)=>{
            console.log(ex);
            })
    }
     return (
      // <View style={styles.containerr}>
      // <View >
      //   <Text style={styles.text}>Ten SP : {item.name}</Text>
      //   <Image source={{uri: item.avatar}} style={{width: '100%',height: 100}}  />
      //   <Text style={styles.text1}>Gia : {item.gia}</Text>
      // <View style={styles.button}>
      //    <Button title='Xoa' onPress={xoaSP} />

      //   <Button title="Sửa" onPress={ ()=>{
      //    props.navigation.navigate('Update',{item_sp:item})

      //   }} 
      //   /> 
      //    <Button title='Them SP' 
      //   onPress={()=> {props.navigation.navigate('Add')}} />
      // </View>
       

      //    </View> 
      //   </View>
     
      <View style={styles.productContainer}>
       
        <View style={{width: 180,borderWidth: 2,borderRadius: 10,padding: 5,}}>
        <TouchableOpacity onPress={() => openModal(item)}>
    <Text style={styles.productName}>{item.name}</Text>
    <Image source={{ uri: item.avatar }} style={styles.productImage} />
    <Text style={styles.productPrice}>Gia : {item.gia}</Text>
     </TouchableOpacity>

      <View style={styles.buttonContainer}>
          <Button title='Xoa' onPress={xoaSP} />
          <Button title="Sửa" onPress={() => { props.navigation.navigate('Update', { item_sp: item }) }} />
          <Button title='Them SP' onPress={() => { props.navigation.navigate('Add') }} />
      </View>
        </View>
     
    </View>
       
     )
    }
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // do something
          getAPi();
        });
    
        return unsubscribe;
      }, [props.navigation]);
  return (
    <View >     

      <View>
    <View style={styles.container1}>

  <View>
     <Image style = {styles.Anhleft} source={require('../images/coffe5.png')}/>
  </View>

  <View >
    <TouchableOpacity onPress={()=>{navigation.navigate('YeuThich2')}}>
       <Image style={styles.Anhright} source={require('../images/logo-quan-cafe-7.jpg')}/> 
    </TouchableOpacity>
    
  </View>
 </View>
 <Text style= {styles.Text}>Find the best {'\n'}food for you</Text>
 <View style={styles.viewsearch}>
   <TextInput style={{flex :1,marginLeft :10}} placeholder='Enter yoir key search'/>
   <Image style={styles.search} source={require('../images/search.png')}/>
 </View>
 <View>
  <Image style={{width : 390, height : 200,marginTop : 10,marginBottom :  10,alignSelf: 'center'}} source={require('../images/banerrr.jpg')}/>
 </View>
 <View style={styles.viewc}>
 <View>
     <Text style={styles.text1}> New Product </Text>  
 </View>
 <View>
    <Text style={styles.text}> Sản Phẩm </Text>
 </View>
 </View>


 </View>  


 <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={closeModal}
>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            {selectedProduct && (
                <View>
                    <Text style={styles.modalText}>Ten SP : {selectedProduct.name}</Text>
                    <Image source={{ uri: selectedProduct.avatar }} style={styles.modalImage} />
                    <Text style={styles.modalText}>Gia : {selectedProduct.gia}</Text>
                    <Button title="Close" onPress={closeModal} />
                </View>
            )}
        </View>
    </View>
</Modal>

     {
        (isLoading) ? (
            <ActivityIndicator />
        ) : (
        <FlatList data={dssp}
        numColumns={2}
        keyExtractor={ (item_sp) =>{return item_sp.id}} 
        renderItem={renderProduct}/> 
        )
     }
    </View>
  )
}

export default HomeC

const styles = StyleSheet.create({
    // containerr : {
    //     flex : 1,
    //     backgroundColor: 'yellow',
    //     padding: 10,
    // },
    // button : {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    // },
    // text : {
    //     fontSize: 15,
    //     color: 'black',
    //     fontWeight: 'bold',
    // },
    // text1 : {
    //     fontSize: 12,
    //     color: 'red',
    //     fontWeight: 'bold',
    // },
    // container : {
    //   flexDirection : 'row',
    //   justifyContent : 'space-between',
    //   alignItems : 'center',
     
    //  },
    //    Anhleft : {
    //        width : 30,
    //        height : 30,
    //        borderRadius : 10,
    //    },
    //    Anhright : {
    //        width : 30,
    //        height : 30,
    //      borderRadius : 10,
    //    },
    //    Text : {
    //      fontSize : 20,
    //      fontWeight : 'bold',
    //      color : '#d2691e',
         
    //    },
    //    search : {
    //      width : 20,
    //      height : 20,
    //     marginRight : 10,
    //    },
    //    viewsearch : {
    //      marginTop : 5,
    //      flexDirection : 'row',
    //      backgroundColor  :'white',
    //      borderRadius : 10,
    //      justifyContent : 'space-around',
    //      alignItems : 'center'
    //    },
    //    text : {
    //      fontSize : 15,
    //      fontWeight : 'bold',
    //      color: 'white',
    //    },
    //    text1 : {
    //      fontSize : 15,
    //      fontWeight : 'bold',
    //      color: 'red',
    //    },
    //    viewc : {
    //      flexDirection : 'row',
    //      marginTop : 5,
    //      justifyContent : 'space-between'
   
    //    }

    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
     
  },
  header: {
      color: 'red',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
  },
  productContainer: {
      flex: 1,
      // backgroundColor: 'yellow',
      padding: 10,
      marginBottom: 10,
  },
  productName: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
  },
  productImage: {
      width: '90%',
      height: 100,
     
     alignSelf: 'center',
  },
  productPrice: {
      fontSize: 12,
      color: 'red',
      fontWeight: 'bold',
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9000000)', // Làm mờ nền
},
modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
  modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  modalImage: {
      width: 200,
      height: 200,
      marginBottom: 10,
     
  },
  container1 : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  
   },
     Anhleft : {
         width : 30,
         height : 30,
         borderRadius : 10,
     },
     Anhright : {
         width : 30,
         height : 30,
       borderRadius : 10,
     },
     Text : {
       fontSize : 20,
       fontWeight : 'bold',
       color : '#d2691e',
       marginLeft: 10,
     },
     search : {
       width : 20,
       height : 20,
      marginRight : 10,
     },
     viewsearch : {
       marginTop : 5,
       flexDirection : 'row',
       backgroundColor  :'white',
       borderRadius : 10,
       justifyContent : 'space-around',
       alignItems : 'center',
       margin: 10,
     },
     text : {
       fontSize : 15,
       fontWeight : 'bold',
       color: 'white',
       
     },
     text1 : {
       fontSize : 15,
       fontWeight : 'bold',
       color: 'red',
     },
     viewc : {
       flexDirection : 'row',
       marginTop : 5,
       justifyContent : 'space-between'
 
     }
})