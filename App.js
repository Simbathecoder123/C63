import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  getWord=(word)=>{
    var SearchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+SearchKeyword+".json"
    return fetch(url)
    .then((data)=>{
      if(dataStatus===200){
        return data.json()
      }
      else{
        return null
      }
    })
    .then((response)=>{
      var responseObject = response;

      if(responseObject){
        var wordData = responseObject.definitions[0]
        var definition=wordData.description
        var lexicalCategory=wordData.wordtype

        this.setState({
          "word" : this.state.text,
          "definition" : definition,
          "lexicalCategory": lexicalCategory
        })
      }
      else{
        this.setState({
          "word":this.state.text,
          "definition":"Not Found",
        })
      }
    })
  }
render(){
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.inputBox}
      onChangeText={text =>{
        this.setState({
          text:text,
          isSearchPressed:false,
          word:"loading...",
          lexicalCategory :'',
          examples:[],
          definition:''
        });
      }}
      value={this.setState.text}
      />
      <TouchableOpacity
      style={styles.inputBox}
      onPress={()=>{
        this.setState({ isSearchPressed:true });
        this.getWord(this.state.text)
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
