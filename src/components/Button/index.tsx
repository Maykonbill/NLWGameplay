import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native'

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;  //title?:string ==> Proprieadade opcional, não obrigadtória
}

//Também pode ser usado interface no lugar de type
// interface Props {
//     title: string;
// }

 export function Button({ title, ...rest } : Props){
     return(
        <RectButton 
            style={styles.container}
            { ...rest }
        >
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
     );
}