import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Modal, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

const HomeCome = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const getAPi = async () => {
        let url_api = 'https://65bba22852189914b5bcb4f3.mockapi.io/datadayroi';
        try {
            const response = await fetch(url_api);
            const data = await response.json();
            setdssp(data)
           console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const openModal = (item) => {
        setSelectedProduct(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const renderProduct = ({ item }) => {
        return (
            <View style={styles.productContainer}>
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
        );
    };

    const xoaSP = () => {
        // Implement your delete logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Danh Sach San Pham</Text>
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
                    <FlatList
                        data={dssp}
                        numColumns={2}
                        keyExtractor={(item_sp) => { return item_sp.id }}
                        renderItem={renderProduct}
                    />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: 'yellow',
        padding: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    productImage: {
        width: '100%',
        height: 100,
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
        marginTop: 22,
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
});

export default HomeCome;
