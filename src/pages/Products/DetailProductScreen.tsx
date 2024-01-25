import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/colors';
import { Dimensions } from 'react-native';
import { deleteProductData } from './hehe';

const DetailProductScreen = ({ navigation, route }) => {
    const { product, iD } = route.params;
    console.log(product);
    console.log(iD);

    const screenWidth = Dimensions.get('window').width;
    
      const handleEditPress = () => {
      };

      const handelDeletePress = () => {
        Alert.alert(
          'Xác nhận xóa',
          'Bạn có chắc chắn muốn xóa?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                deleteProductData(iD);
              },
            },
          ],
          { cancelable: true }
        );
      };

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Name</Text>
          <TouchableOpacity onPress={handleEditPress} style={[{marginRight: 20,}]}>
            <Ionicons name="pencil" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handelDeletePress}>
            <Ionicons name="trash-bin" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image source={{ uri: product.Image }} style={[styles.image, {margin:15, borderRadius:6, alignSelf:'center'}]} />
                </View>
                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>ID</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}>{product.ID}</Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Automation ID'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Name</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}>{product.TenSP}</Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder={product.TenSP}></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Product Group</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}></Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Product category'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Brand</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}></Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Select a brand'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Selling price</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}>{product.GiaBan}</Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Original price</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}>{product.GiaNhap}</Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>TonKho</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}>{product.TonKho}</Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Weight (gram)</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}></Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Located</Text>
                            <Text style={[styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]}></Text>
                            {/* <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Select located'></TextInput> */}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Unit of measurement</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Minimum inventory</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Maximum inventory</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='999999999'></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                        {/* <TextInput style={[styles.textHint, styles.textInput, { flex: 1 }]} multiline={true} numberOfLines={4} placeholder="Description"></TextInput> */}
                        <Text style={[{ flex: 1 }]} numberOfLines={4}>{product.MoTa}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                        {/* <TextInput style={[styles.textHint, styles.textInput, { flex: 1 }]} multiline={true} numberOfLines={4} placeholder="Caption"></TextInput> */}
                        <Text style={[{ flex: 1 }]} numberOfLines={4}>{product.MoTa}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop:30,
    backgroundColor: Colors.backgroundHome,
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor:Colors.background,
    paddingBottom:15,
    },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign:'left',
    flex:1,
    },
  blueText: {
    fontSize:16,
    fontWeight: 'bold',
    color: Colors.blue,
    },
    row: {
        flexDirection:'row',
    },
    column: {
        flexDirection:'column',
    },
    image: {
        height:100,
        width:200,
    },
    container: {
        flex:1,
    },
    containerItem: {
        flexDirection:'row',
        backgroundColor: Colors.background,
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
    textHint: {
        fontSize: 14,
        color: 'gray',
    },
    button: {
        padding:10,
    },
    textInput: {
        textAlign:'right',
    },
});

export default DetailProductScreen;