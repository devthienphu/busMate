import React, {useEffect,useState, useRef, useLayoutEffect} from 'react';
import { View, Text,Image,Pressable,StatusBar,FlatList, TextInput  } from 'react-native';

import dollar from '../imgs/icon/dollar.png'
import fav from '../imgs/icon/fav.png'
import notfav from '../imgs/icon/notfav.png'
import star from '../imgs/icon/star.png'
import search from '../imgs/icon/search.png'
import Header from '../components/header';



const BusLookUp = ({navigation}) => {
    //bg-gradient-to-r from-[#C7F2FD] to-[#60C6FF]
    const buses = [{
        name: "Xe buýt số 01",
        sStation: "Bến xe nhà Đạt",
        eStation: "Bến 8",
        sTime: "5:30",
        eTime: "20:30",
        rate: 5,
        unitPrice: 7,
        fav: false
    },
    {
        name: "Xe buýt số 02",
        sStation: "Bến xe nhà Đạt",
        eStation: "Bến phà",
        sTime: "5:30",
        eTime: "20:30",
        rate: 3.2,
        unitPrice: 7,
        fav: true
    },
    {
        name: "Xe buýt số 03",
        sStation: "Bến xe nhà Đạt",
        eStation: "Bến xe nhà ai",
        sTime: "5:30",
        eTime: "20:30",
        rate: 5,
        unitPrice: 7,
        fav: false
    },
    {
        name: "Xe buýt số 04",
        sStation: "Bến xe miền Tây",
        eStation: "Bến xe Chợ Lớn",
        sTime: "5:30",
        eTime: "20:30",
        rate: 3.2,
        unitPrice: 7,
        fav: true
    }
    ]
    const [searchValue, setSearchValue] = useState('');
    const [busList, setBusList] = useState([]);
    const [loadState, setLoadState] = useState("loading");

    useEffect(()=>{
        setLoadState("loading");
        const delayDebounceFn = setTimeout(() => {
            setBusList(buses);
        }, 1000)
        setLoadState("done");
        return () => clearTimeout(delayDebounceFn)
    },[searchValue])
    const addFavBus = (id) =>{
        console.log(id);
    }
    return (
       <View className="bg-[#F9F9F9] h-full">
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header navigation={navigation}/>

            <View className="flex flex-row justify-center ">
                <View className="w-4/6 flex-row flex -mt-5">
                    <TextInput
                        maxLength={25}
                        onChangeText={text=>setSearchValue(text)}
                        value={searchValue}
                        className = "bg-white w-full rounded-[8px] h-[50px] p-4"
                        style={{ elevation:4 }}
                        placeholder="Chọn tuyến xe buýt"
                    >
                    </TextInput>
                    <Image  source={search} className="w-5 h-5 -ml-9 mt-[15px]"></Image>
                </View>

            </View>

            <View className="flex-row flex-wrap m-2">
                {/* <FlatList
                    data={buses}
                    renderItem={({item})=> 
                            (<View className="basis-1/2">
                                    <View className="m-1 ">
                                        <Text className="font-bold text-lg text-[#441F62] text-center">
                                            {item.name}
                                        </Text>
                                        <Text className="text-lg text-[#441F62] text-center">
                                            {item.sStation} - {item.eStation}
                                        </Text>
                                    </View>
                            </View>)
                    }
                    keyExtractor={item => item.name}
                /> */}
                {buses.map(item =>(
                        <View className="basis-1/2" key={item.name}>
                            <View className="m-3 p-3 bg-white  rounded-[14px]" style={{ elevation:4 }}>
                                <Text className="font-bold text-lg text-[#441F62] text-center">
                                    {item.name}
                                </Text>
                                <Text numberOfLines={1} ellipsizeMode="tail" className="text-md text-[#441F62] text-center ">
                                    {item.sStation} - {item.eStation}
                                </Text>
                                <Text className="text-md text-[#60C6FF] text-center font-bold">
                                    {item.sTime} - {item.eTime}
                                </Text>
                                <View className="flex-row justify-center m-1 content-center w-full h-10" >
                                    <View className="flex-row bg-[#faefd4] p-2 pb-1 rounded-[20px]" style={{ elevation:2 }}>
                                        <Image  source={star} className="w-5 h-5 mr-1"></Image>
                                        <Text className="text-md text-black text-center mr-1">
                                            {item.rate}
                                        </Text>
                                    </View>
                                    <View className="flex-row m-2 rounded-[20px] " >
                                        <Image  source={dollar} className="w-6 h-6 "></Image>
                                        <Text className="text-md text-black text-center pt-[2px] mr-2">
                                                {item.unitPrice}k
                                        </Text> 
                                        <Pressable onPress={addFavBus.bind(null, item.name)}>
                                            <Image  source={(item.fav?fav:notfav)} className="w-[25px] h-[22px]"></Image>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                ))}
            </View>
     
       </View>
    );
}

export default BusLookUp;
