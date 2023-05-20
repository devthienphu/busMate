import React from 'react';
import { View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../style';

const Search = ({ setItem, disabled }) => {
    const handleChange = (event) => {
        setItem(event.nativeEvent.text)
    }

    return (
        <View style={style.shadow} className="z-10 mt-[-50px] flex flex-row justify-between items-center bg-white w-3/4 mx-auto rounded-xl mt-4 px-4">
            <TextInput editable={!disabled} onChange={event => handleChange(event)} style={{fontFamily:'Poppins-Regular'}} className="py-2 px-2" placeholder="Nhập điểm đếnn"/>              
            <Icon name="search"></Icon>
        </View>
    );
}

export default Search;
