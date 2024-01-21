import { StyleSheet,  } from 'react-native';
import Colors from '../../shared/colors';

const styles = StyleSheet.create({
    containerList: {
      flex:1,
      backgroundColor:Colors.backgroundHome,
    },
    containerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop:10,
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
    Text: {
      fontSize: 18,
    },
    itemID: {
      color: 'gray',
      fontSize: 14,
    },
    imageOfProduct: {
      borderRadius:12,
      height:60,
      width: 60,
    },
    column: {
      flex: 1,
      justifyContent: 'center',
    },
    containerTotal: {
      backgroundColor: Colors.background,
      borderBottomStartRadius:18,
      borderBottomEndRadius:18,
      borderTopWidth: 0.5,
      borderTopColor: 'gray',
      marginBottom:10,
    },
    text: {
      fontSize: 14,
      margin: 5,
      padding:5,
    },
    row: {
      flexDirection: 'row',
    },
    containerBar: {
      borderRadius:12,
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
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: 10,
    },
    rotatedArrow: {
      transform: [{ rotate: '180deg' }],
    },
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingTop:20,
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
  });

  export default styles;