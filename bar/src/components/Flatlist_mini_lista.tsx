/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Switch } from '@rneui/themed';
import React, { useEffect } from 'react';
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
import { connect } from 'react-redux';
import {  fetchPedidos_ordem_adicionar, fetchPedidos_ordem_retirar } from '../store/action/pedidos';



 const mini_lista = (props: any) => {
    //switch bebidas
    const [bebidas, setBebidas] = React.useState(false);
        //atualiar bebidas bolean

    useEffect(() => {
      const bebidas_bolean = props.array_bebidas?.includes(props.item.id)
      setBebidas(bebidas_bolean)
      // console.log(bebidas_bolean)
    }, [props.item]); 

    useEffect(() => {
        // console.log(props.item.id)
        // console.log(props.id_pedido)
        // console.log(props.array_bebidas)
        //atualizar o array_bebidas do pedido
        if(bebidas){
          props.item.categoria === 'bebidas'?props.onFetchPedidos_ordem_adicionar(props.item.id,props.id_pedido):null
        }
      // props.onFetchPedidos_ordem(props.item.id,props.id_pedido,props.array_bebidas)
    }, [bebidas]);

    return (
        <View style={styles.container_lista_miniindex0}>

            <Text style={{fontFamily:'Roboto-Regular',color:'#fff',fontSize:17}} >{props.item.name_p}</Text>
        
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor: '#5e6163',borderRadius:20,width:'50%'}}
            onPress={() => props.item.categoria === 'bebidas'?setBebidas(!bebidas):null}
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
const mapDispatchProps = (dispatch: any) => {
  return {
    onFetchPedidos_ordem_adicionar: (id_item:string,id_pedido:string,) => dispatch(fetchPedidos_ordem_adicionar(id_item,id_pedido)),
    onFetchPedidos_ordem_retirar: (id_item:string,id_pedido:string,) => dispatch(fetchPedidos_ordem_retirar(id_item,id_pedido)),
    
  };
};

export default connect(null,mapDispatchProps)(mini_lista)