import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

/**
 * this is not currently in use but can be implemented with minimal effort
 * @param props 
 * @returns 
 */
const Input = (props: any) => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input;