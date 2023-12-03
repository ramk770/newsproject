import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Articals from './Artical';
const Homescreen = () => {
const[ articals, setartical]= useState([ ])
const getapi = () => {
  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=eab2856ad465401eb15b6e2596636f37', {
    params: {
      category: "technology",
    }
  })
  .then((response) => {
    // Check the structure of the response data
    console.log(response.data);

    // Assuming the articles are under the 'articles' key in the response
    if (response.data.articles) {
      setartical(response.data.articles);
    } else {
      // Handle the case when 'articles' key is not found in the response
      console.error("Articles not found in the response");
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

 useEffect(() => {
   getapi();
 }, []);

    return ( 
       
           
         <SafeAreaView style={{flex:1,backgroundColor:'red'}}>
           
          
           <FlatList
      data={articals}
      renderItem={({item}) =>(    <Articals
            urlToImage={item.urlToImage}
            title={item.title}
          
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
        />
    )}
    keyExtractor={(item) => item.title}
/>


         </SafeAreaView>

 );
}

const styles = StyleSheet.create({
  text: {
    color:'red',
    fontSize:25,
  }
})

 
export default Homescreen;