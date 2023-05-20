import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Pressable, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../components/search';
import Header from '../components/header'
import style from '../style';
import { getListBuses } from '../api/busApi';

const FindBus = ({navigation}) => {
    const [load, setLoad] = useState(true)
    const [listBus, setListBus] = useState([])
    const [bus, setBus] = useState('')
    useEffect(() => {
        (async () => {
            setLoad(true)

            const res = await getListBuses(bus)
            // console.log(res)
            if (res) setListBus(res)

            setLoad(false)
        })()
    },[bus])
    
    return (
        <View className=" h-full ">
            <Header navigation={navigation}/>
            
            {/* Search */}
            <View className="mt-[-40px] z-10">
                <Search setItem={setBus} textHolder='Nhập xe buýt  '/>   
            </View>

            {/* Bus */} 
            <ScrollView>
                <View className="flex flex-row flex-wrap items-center pt-6 space-y-4 h-screen mx-4 mb-12 justify-around">
                {
                    load
                    ?
                    <ActivityIndicator size="large" />
                    :
                    listBus.length
                    ?
                    listBus.map((item) => (
                        <Pressable key={item._id} onPress={() => navigation.navigate('BusDetail', {id: item.number})} style={style.shadow} className="z-10 flex flex-col gap-y-1 rounded-2xl bg-white w-[45%] py-3 px-4 mt-2 items-center text-center">
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-lg">{item.name}</Text>
                            <Text style={{fontFamily:'Poppins-Light'}} className="text-xs text-gray-500" numberOfLines={1}>{item.sStation} - {item.eStation}</Text>
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-[#60c6ff]">{item.sTime} - {item.eTime}</Text>
                            <View className="flex flex-row gap-x-2 items-center">
                                <View className="flex flew-row rounded-xl bg-[#fff4d8] px-2 py-1">
                                    <Icon name="star" solid size={15} color="#ffc046">
                                        <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-black">3.2</Text>
                                    </Icon>
                                </View>

                                <Icon name="dollar-sign" solid size={15} color="#ef7474">
                                    <Text style={{fontFamily:'Poppins-SemiBold'}} className="ftext-gray-500">{item.unitPrice}k</Text>
                                </Icon>

                                <Icon name="heart" size={15} color="#ef7474"></Icon>

                            </View>
                        </Pressable>
                    ))
                    :
                    <Text className='text-xl' style={{fontFamily:'Poppins-SemiBold'}}>Không có tuyến xe phù hợp</Text>
                }
                </View>
            </ScrollView>


           
        </View>
    );
}

export default FindBus;
