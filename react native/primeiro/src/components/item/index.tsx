import {TouchableOpacity,Text } from 'react-native';

import { styles } from './style';

type  Props={
    titulo:string,
}

export function Item({titulo}:Props){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}