/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Switch } from '@rneui/themed';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



 const mini_lista = (props: any) => {
    //switch bebidas
    const [bebidas, setBebidas] = React.useState(false);

    return (
        <View style={styles.container_lista_miniindex0}>

            <Text style={{fontFamily:'Roboto-Regular',color:'#fff',fontSize:17}} >{props.item.name_p}</Text>
        
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor: '#5e6163',borderRadius:20,width:'50%'}}
            onPress={() => setBebidas(!bebidas)}
            >
                <Text style={{fontFamily:'Roboto-Regular',color:'#fff',fontSize:15}}
                numberOfLines={1} 
                ellipsizeMode='tail'
                >x{props.item.quantidade}</Text>

                {props.item.categoria === 'bebidas'?
                <Switch
                value={bebidas}
                onValueChange={() => setBebidas(!bebidas)}
                />: null
                }
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
      container_lista_miniindex0: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    
        height:"100%",
        width: "100%"
      },
});

export default mini_lista