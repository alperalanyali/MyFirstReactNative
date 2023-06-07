import {StyleSheet} from 'react-native'
;

export default StyleSheet.create({
    card_container:{
        backgroundColor:'white',
        margin:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10
      },
      card_title:{
        fontWeight:'bold',
        fontSize:20,
        margin:10,
        marginBottom:3
      },
      card_subtitle:{
          fontSize:16,
          fontStyle:'italic',
          margin:10,
          marginTop:3
      },
      card_body:{
        padding:10,
        marginBottom:20
      },
      card_button_container:{
        backgroundColor:'#00C2FF',
        alignItems:'center',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        padding:10 ,
      },
      card_button_title:{
        color: 'white',
        fontSize:18,
        fontSize:18,
        fontWeight:'bold'
        
      }
     
});