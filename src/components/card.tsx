import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props: any) => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "black", // only works with IOS
        shadowOffset: { width: 0, height: 2 }, // only works with IOS
        shadowRadius: 6, // only works with IOS
        shadowOpacity: 0.26, // only works with IOS
        elevation: 5, // only works with android
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    }
});

export default Card