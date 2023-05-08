import React from 'react';
import { View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Search = () => {
    return (
        <View className="z-10 mt-[-50px] flex border flex-row justify-between items-center bg-white w-3/4 mx-auto rounded-xl mt-4 px-4">
            <TextInput className="py-2" placeholder="Chọn tuyến xe bus"/>              
            <Icon className="flex justify-end" name="search"></Icon>
        </View>
    );
}

export default Search;
