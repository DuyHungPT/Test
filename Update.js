import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native'
import React from 'react'
import { useState } from "react";

const Update = (props) => {
    const [tenSP, settenSP] = useState( props.route.params.item_sp.name);
    const [giasp, setgiasp] = useState(props.route.params.item_sp.gia);
  
    const SaveProduct = () => {
        if(tenSP.length <3){
            Alert.alert('Tên sản phẩm phải nhập ít nhất 3 ký tự');
            return; // thoát khỏi hàm nếu dữ liệu không hợp lệ
    }
        if(Number(giasp) <=0){
            Alert.alert('Giá phải nhập lớn hơn 0');
            return; // thoát khỏi hàm nếu dữ liệu không hợp lệ
    }
    
        // tạo đối tượng dữ liệu
        let _id = props.route.params.item_sp.id;
        let objSP = { name: tenSP, gia: giasp };
        let url_api = 'https://65bba22852189914b5bcb4f3.mockapi.io/datadayroi/'+_id;

        fetch(url_api, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objSP)
        })
            .then((res) => {
                if (res.status == 200)
                    Alert.alert("Sửa thành công")
            })
            .catch((ex) => {
                console.log(ex);
            });

    }

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Update SP</Text>
        <TextInput style={styles.input} placeholder="Tên SP"
            onChangeText={(txt) => { settenSP(txt) }}
            value={tenSP}
            />
        <TextInput style={styles.input}  placeholder="Giá tiền"
            onChangeText={(txt) => { setgiasp(txt) } }
            value={giasp}
        />
        <Button  title="Save" onPress={SaveProduct} />



    </View>
  )
}

export default Update

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'green',
        justifyContent:'center',
        

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
    text: {
        fontSize: 20,
        color:'yellow',
        alignSelf: 'center',
    },
    button1: {
        width: 100,
        height: 60,
        color: 'red',
        backgroundColor: 'red',
    }

})