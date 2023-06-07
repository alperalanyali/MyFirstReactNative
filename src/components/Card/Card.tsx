import {Alert, Button, Sty, Style, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import  React from 'react';
import styles  from './Card.styles'

const Card = (props) => {
    return(
        <View style={styles.card_container}>
            <View style={styles.card_body}>
                <Text style={styles.card_title}>{props.title}</Text>    
                <Text style={styles.card_subtitle}>{props.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.card_button_container} onPress={()=>Alert.alert("Merhaba "+props.title)}>
                <Text style={styles.card_button_title}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    );
}



export default Card;