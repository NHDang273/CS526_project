import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';

const SettingScreen = ({navigation}) => {
  const [DarkLightchecked, setDarkLightChecked] = useState(false);
  const [Englishchecked, setEnglishChecked] = useState(false);

  const handleDarkLight = () => {
    setDarkLightChecked(!DarkLightchecked);
    console.log('DarkLight was pressed.');
  };
  const handleEnglish = () => {
    setEnglishChecked(!Englishchecked);
    console.log('DarkLight was pressed.');
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
        <View style={[styles.header, styles.row]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Setting</Text>
        </View>
        <ScrollView>
        <View style={[{margin: 20, backgroundColor: Colors.background, borderRadius: 12,}]}>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={[styles.text, { marginLeft: 10, paddingTop: 10, flex:1}]}>Dark Light</Text>
            <Switch
              value={DarkLightchecked}
              onValueChange={handleDarkLight}
              trackColor={{ false: '#808080', true: Colors.blue }}
              thumbColor={Englishchecked ? '#FFFFFF' : '#FFFFFF'}
            />
          </View>
          
          <View style={[styles.textContainer, styles.row, {borderBottomWidth:0}]}>
            <Text style={[styles.text, { marginLeft: 10, paddingTop: 10, flex:1}]}>English</Text>
            <Switch
              value={Englishchecked}
              onValueChange={handleEnglish}
              trackColor={{ false: '#808080', true: Colors.blue }}
              thumbColor={Englishchecked ? '#FFFFFF' : '#FFFFFF'}
            />
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.backgroundHome,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
  textContainer: {
    marginTop: 1,
    padding:20,
    paddingBottom:10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.backgroundHome,
  },
});

export default SettingScreen;