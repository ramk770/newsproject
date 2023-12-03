import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import * as webBrowser from 'expo-web-browser';

const Articals = ({ urlToImage, title, description, author, publishedAt, sourceName, url }) => {
  console.log(
    { title }, { author }, { urlToImage }
  );

  const goToUrl = () => {
    webBrowser.openBrowserAsync(url);
  };

  return (
    <Pressable style={styles.text} onPress={goToUrl}>
      <Text style={{ paddingTop: 40, color: 'red' }}>Artical </Text>
      {/* image */}
      <Image source={{ uri: urlToImage }} style={styles.image} />
      {/* text title */}
      <View style={{ margin: 15 }}>
        <Text style={styles.title}> {title}</Text>
        {/* description */}
        <Text style={styles.descr}>
          {description}
        </Text>
        <View style={styles.data}>
          <Text>BY:<Text style={styles.author}> {author} </Text></Text>
          <Text style={styles.date}>{publishedAt}</Text>
        </View>
        <View style={styles.source}>
          <Text>source <Text style={styles.ram}>{sourceName} </Text></Text>
        </View>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  text: {
    width:'90%',
    alignSelf:'center', 
    borderRadius:40,
   
shadowOffset: {
	width: 6,
	height: 6,
},
shadowOpacity: 0.5,
shadowRadius: 0.49,
backgroundColor:'#fff',
elevation:12,
marginTop:20,

    
},
  image: {
    height:200,
    width:'100%',
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  title: {
fontSize:18,
fontWeight:'600',
marginTop:10,
  },
  descr: {
    fontSize:16,
    fontWeight:'500',
    marginTop:10
  },
  data: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  auther: {
    fontWeight:'bold',
    fontSize:15
  },
  date: {
    color:'red',
    fontWeight:'bold',
    fontSize:15
  },
  source: {
    marginTop:10,
    
  },
  ram: {
    fontSize:19,
    fontWeight:'bold',
    color:'green',
  },
}
)

 
export default Articals;