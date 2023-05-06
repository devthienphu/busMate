import React from 'react';
import { View, Text,Image,Pressable } from 'react-native';
import startBtn from '../imgs/onBoarding/startBtn.png'

const Home = ({navigation}) => {
    return (
       <View>
            <Pressable onPress={() => navigation.navigate('BusLookUp')} className="z-10">
                <Image  source={startBtn} className="scale-50 ml-6 mt-[-50px] z-10"></Image>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Weather')} className="z-10">
                <Image  source={startBtn} className="scale-50 ml-6 mt-[-50px] z-10"></Image>
            </Pressable>  
       </View>
    );
}

export default Home;
