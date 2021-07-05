import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';

import Filmes from './src/Filmes';



export default function AppFilmes(){

  
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] =  useState(true);

  useEffect(() => {

    async function loadFimes(){
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFimes();


  }, []);

  //condição para o loade

  //se o load esta true cai no if
  if(loading){

    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }} >
          <ActivityIndicator color='#121212' size={50} />
      </View>
    );

  }else{

    return(
      <View style={styles.container} >
        <FlatList 
  
          data={filmes}
          keyExtractor={ item => String(item.id)}
          renderItem={ ({ item }) => <Filmes data={item} /> }
        />
      </View>
    );
  }

  }

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});