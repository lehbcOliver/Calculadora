import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    btn: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#d2e1f6',
        color: '#81a3d2',
        borderWidth: 1,
        borderColor: '#c7daf4',
        textAlign: 'center'
    },
    btnIgual : {
        backgroundColor: '#90b6ea',
        color: '#fff'

        
    },
    btnOper: {
        color: '#fff',
        backgroundColor: '#90b6ea'

    },
    btnAc: {
        color: '#485b75',
    },
   
    btnDual: {
        width: (Dimensions.get('window').width/2)*2,
        textAlign: 'center'
    }
   
});

export default styles;


