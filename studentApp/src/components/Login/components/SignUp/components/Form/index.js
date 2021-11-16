import React from 'react';
import { View } from 'react-native';
import style from './styles';
import ActionButton from '../../../../../utils/ActionButton';
import TextField from '../../../../../utils/TextField';

const SignUpForm = () => {
    return(
        <View style={style.container}>
            <View style={style.containerInputs}>
                <TextField 
                    placeholder="Name"
                />
                <TextField 
                    placeholder="Password"
                />
                <TextField 
                    placeholder="Confirmated Password"
                />
                <TextField
                    placeholder="Email"
                />
            </View>
            <ActionButton Text="Sign-Up" />
        </View>
    );
};

export default SignUpForm;