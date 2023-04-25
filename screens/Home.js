import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, Platform, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                   
                }}>
                    <SafeAreaView style={styles.safearea}/>
                    <ImageBackground source={require("../assets/bg_image.png")}
                    style={styles.bg}
                    >
                        <View style={styles.titleBar}>

                  <Text style={styles.titleText}>ISS Tracker App</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ISSLocation")}} style={styles.routeCard}>
                            <Text style={styles.routeText}>
                                ISS Location
                            </Text>
                            <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Meteors")}} style={styles.routeCard}>
                            <Text style={styles.routeText}>
                                Meteors
                            </Text>
                            <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Updates")}} style={styles.routeCard}>
                            <Text style={styles.routeText}>
                                Updates
                            </Text>
                            <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>


                    </ImageBackground>
                    
            </View>
        )
    }
}

const styles=StyleSheet.create({
safearea: { 
    marginTop: Platform.OS === "android" ? 
    StatusBar.currentHeight : 0 
},
bg:{
    flex:1,
    resizeMode:"cover",
},
titleText: { 
    fontSize: 40, 
    fontWeight: "bold", 
    color: "white" 
},
titleBar: { 
    flex: 0.15, 
    justifyContent: "center", 
    alignItems: "center" 
},
routeCard: { 
    flex: 0.25, 
    marginLeft: 50, 
    marginRight: 50, 
    marginTop: 50, 
    borderRadius: 30, 
    backgroundColor: 'white'
},
routeText: { 
    fontSize: 35, 
    fontWeight: "bold", 
    color: "black", 
    marginTop: 75, 
    paddingLeft: 30 
},
iconImage: { 
    position: "absolute", 
    height: 200, 
    width: 200, 
    resizeMode: 
    "contain", 
    right: 20, 
    top: -80 
},


})