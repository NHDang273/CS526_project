import { StyleSheet,  } from 'react-native';
import Colors from '../../shared/colors';

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      marginTop: 30,
      backgroundColor: Colors.backgroundHome,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 20,
      backgroundColor: Colors.background,
      paddingBottom: 15,
    },
    headerTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    textLeft: {
      flex: 1,
      fontSize: 16,
      textAlign: 'left',
      color: 'black',
    },
    textRight: {
      flex: 2,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'right',
      color: Colors.darkgray,
    },
    row: {
      flexDirection: 'row',
    },
    textContainer: {
      backgroundColor: Colors.background,
      marginStart: 20,
      marginEnd: 20,
      marginTop: 1,
      paddingBottom:10,
      paddingTop: 25,
      borderBottomWidth: 1,
      borderBottomColor: Colors.backgroundHome,
      marginLeft: 10,
      marginRight: 10,
    },
  });
  
  export default styles;