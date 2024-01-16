import { StyleSheet,  } from 'react-native';
import Colors from '../shared/colors';

const styles = StyleSheet.create({
    containerList: {
      flex:1,
      backgroundColor:Colors.background,
      marginTop: 10,
    },
    containerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    twoColumn: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    item: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      backgroundColor: Colors.background,
      borderBottomWidth: 1,
      borderBottomColor: Colors.silver,
    },
    itemEven: {
      backgroundColor: Colors.light,
    },
    itemOdd: {
      backgroundColor: Colors.background,
    },
    itemText: {
      fontSize: 18,
    },
    imageOfProduct: {
      borderRadius:12,
      height:60,
      width: 60,
    },
    imageContainer: {
      marginRight: 10,
    },
    column: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    container: {
      flex: 1,
      paddingTop:20,
    },
    containerBar: {
      borderRadius:12,
    },
    rowItem1: {
      flexDirection:'column',
    },
    rowItem: {
      flexDirection:'row',
    },
    statusBar: {
      height: 70,
      backgroundColor: Colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginBottom:-10,
    },
    Bar: {
      backgroundColor: Colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: 10,
    },
    arrowIcon: {
      marginHorizontal: 10,
    },
    rotatedArrow: {
      transform: [{ rotate: '180deg' }],
    },
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    itemName: {
      fontSize: 18,
    },
    itemID: {
      color: 'black',
      fontSize: 18,
    },
    totalAmount: {
      fontSize: 18,
      color:Colors.blue,
    },
    itemTime: {
      fontSize: 16,
      color:Colors.darkgray,
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    addButton: {
      backgroundColor: Colors.blue,
      borderRadius: 60,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnInfo: {
      flexDirection:'row',
      backgroundColor: Colors.background,
      borderBottomStartRadius:18,
      borderBottomEndRadius:18,
      borderTopWidth: 0.5,
      borderTopColor: 'gray',
      justifyContent:'space-between',
    },
    text: {
      fontSize: 14,
      margin: 5,
      marginLeft: 0,
      marginRight: -15,
      padding:5,
    },
    textChoese: {
      fontSize: 14,
      margin: 5,
      padding:5,
    },
    textGreen: {
      color:Colors.blue,
      fontSize: 14,
      margin: 5,
      marginRight: -5,
      padding:5,
      marginStart:10,
    },
  });

  export default styles;

