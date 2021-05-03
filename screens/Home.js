import React, { Component } from "react";
import { View,Button, Image, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

class Home extends Component {

render(){

  const { navigation } = this.props;

  return (
    <View style={{alignItems:'center'}}>
        <View style={styles.Vlogo}>
               
                  <Image style={styles.Ilogo} source={require('../assets/logo.png')}/>               

                <View style={styles.Vdrawer}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>

                <Image style={styles.Idrawer} source={require('../assets/drawer.png')}/>
                </TouchableOpacity>
                </View>      

        </View>

        
         
        <Image style={styles.Cimage} source={require('../assets/limpurb.png')}/> 
    
        
        <Text style={styles.T3}>Local: <Text style={styles.T4}>Santuário São Judas</Text></Text>


        <View style={styles.VSocial}>
        <Image style={styles.socialIcon} source={require('../assets/pilha.png')}/> 
        <Image style={styles.socialIcon} source={require('../assets/bateria.png')}/> 
        <Image  style={styles.socialIcon} source={require('../assets/celular.png')}/> 
        </View>

      <View  style={styles.button}>
      <Button
        title="Saiba Mais"
        color="transparent"
        onPress={() => navigation.navigate("Information")}
      />
      </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
  Vlogo: {
    alignItems: 'flex-start', 
    backgroundColor: '#FFFDC0', 
    width:'100%',
    height: 50
  },
  Ilogo: {
    width: 50, 
    height: 40, 
    marginTop: 5 
  },
  Vdrawer: {
    marginTop: - 40,  
    
    alignSelf: 'flex-end'
  },
  Idrawer: {
    width: 30, 
    height: 30,
  },
  socialIcon:{
    height: 55,
    width: 55,
    marginTop: 5
  },
  VSocial:{
    flex: 1, 
    flexDirection: 'row',
    marginLeft: 25,
    alignSelf: 'flex-start'
  },
  Cimage:{
    width: 400,
    height: 500,
    marginTop: 10
  },
  Tcongrats: {
    fontWeight: 'bold',
    fontSize: 24,  
    color: '#0E1973'
 },
 T1: {
    fontWeight: 'bold', 
    fontSize: 24, 
    justifyContent: 'center'
 },
 T2: {
   fontWeight: 'normal',
   fontSize: 26, 
   marginTop: 75, 
   justifyContent: 'center'
 },
 T3:{
  fontWeight: 'bold',
  fontSize: 34, 
  alignSelf: 'flex-start',
 // marginTop: 150, 
  color: '#1DA64B',
  marginLeft: 25, 
  justifyContent: 'center'
 },
 T4:{
  fontWeight: 'bold',
  fontSize: 28, 
 // marginTop: 150, 
  color: '#0E1973', 
  justifyContent: 'center'
 },
 button:{
 alignSelf: 'flex-start', 
 marginLeft: 25,
 marginTop: 100,
 borderRadius: 20,
 width: 160,
 backgroundColor:"#742699"
 }
 
  
});

export default Home;