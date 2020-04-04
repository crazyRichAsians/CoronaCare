import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    changeToCameraScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "navigation.CoronaCare.CameraScreen"
                }
            }
        })
    }

    render() {
        return (
             
             <View style = {styles.outsideWrapper}>
                <View style={styles.tempButton}>    
                  <Button 
                  icon={ <Icon name="camera" size={30} color="#316EFF" />}
                  iconRight
                  title = "Capture Temperature   "
                  titleStyle={{fontSize: 22, color: '#316EFF', fontFamily: 'Verdana'}}
                 type = "outline"
                 buttonStyle={{
                   //backgroundColor: "#335AFF",
                   borderRadius: 10,
                   height: 100,
                   width: 300,}}           
                  onPress = {this.changeToCameraScreen.bind(this)}
                  />
                </View>

                <View style = {styles.tempButton}>
                  <Button 
                  icon={ <Icon name="eye" size={32} color="#316EFF" />}
                  iconRight
                  title = "View Records   "
                  titleStyle={{fontSize: 22, color: '#316EFF', fontFamily: 'Verdana'}}
                  type = "outline"
                  buttonStyle={{
                    //backgroundColor: "#335AFF",
                    borderRadius: 10,
                    height: 100,
                    width: 300,}}
                  onPress = {this.changeToCameraScreen.bind(this)}
                  />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outsideWrapper: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
        
    
    },

    tempButton: {
        marginTop: 20, marginBottom: 20, 
    }
});