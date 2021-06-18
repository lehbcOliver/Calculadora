import React from 'react';
import {TouchableHighlight, Text, TouchableOpacity} from 'react-native';
import styles from './styles';


const Buttons = (props) => {
    const estilosButtons = [styles.btn];
    if(props.dual){
        estilosButtons.push(styles.btnDual)
    }
    if(props.Igual){
        estilosButtons.push(styles.btnIgual)
    }
    if(props.Operacao){
        estilosButtons.push(styles.btnOper)
    }
    if(props.ac){
        estilosButtons.push(styles.btnAc)
    }
    
    return (
        <TouchableHighlight onPress={props.click}>
            <Text  style={estilosButtons}>{props.label}</Text>
        </TouchableHighlight>
    );
}

export default Buttons;