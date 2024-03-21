// import { Animated, Image, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'

// const MHChao = ({navigation}) => {
//    useEffect(() => {
//     const time = setTimeout(() => {
//       navigation.navigate('List')
//     }, 3000);
  
//     return () => {
//       clearTimeout(time)
//     }
//   }, [])
//   return (
//     <View style={styles.container}>
//       <Text>MHChao</Text>
      
//       <View style={styles.imageContainer}>
//         <Image
//           source={require('../images/logo-quan-cafe-7.jpg')}
//           style={styles.image}
//         />
//       </View>
//       <Text>Duy Hung</Text>
//     </View>
//   )
// }

// export default MHChao

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   imageContainer: {
//     elevation: 50, // Điều chỉnh độ sâu của đổ bóng
//     shadowColor: 'white', // Màu của đổ bóng
//     shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của đổ bóng
//     borderRadius: 10, // Bo góc của hình ảnh
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//   },
// })
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const MHChao = ({navigation}) => {

  useEffect(() => {
    const time = setTimeout(() => {
      navigation.navigate('List')
    }, 3000);
  
    return () => {
      clearTimeout(time)
    }
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>MHChao</Text>
      <View style={styles.bong}>
        <Image source={require('../images/logo-quan-cafe-7.jpg')} style={{width: 100,height: 100}} />
      </View>
      <Text>Duy Hung</Text>
    </View>
  )
}

export default MHChao

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',

  },
  bong:{
    shadowColor:'white',
    shadowOffset:{width:0.5,height: 2},
    elevation:50,
    borderRadius: 20,
  }
})