import React from 'react';
import { View, Text, Image, TextInput, Pressable,Animated,ScrollView} from "react-native";
import MapView from "react-native-maps"

import Icon from 'react-native-vector-icons/FontAwesome5';

import notification from '../imgs/homePage/notification.png'
import findBus from '../imgs/homePage/findBus.png'
import findRoad from '../imgs/homePage/findRoad.png'
import findJob from '../imgs/homePage/findJob.png'
import menu from '../imgs/homePage/menu.png'
import news from '../imgs/homePage/news.png'
import report from '../imgs/homePage/report.png'
import weather from '../imgs/homePage/weather.png'
import feedback from '../imgs/homePage/feedback.png'
import buyTicket from '../imgs/homePage/buyTicket.png'
import map from '../imgs/homePage/map.png'

import styles from "../style";
import Footer from '../components/footer';
import Search from '../components/search';
import style from '../style';

const applications =[
    {
        img:findBus,
        text:'Tìm bus',
        to:'FindBus'
    },
    {
        img:findRoad,
        text:'Tìm đường',
        to:'FindRoute'
    },
    {
        img:buyTicket,
        text:'Mua vé',
        to:'FindBus'
    },
    {
        img:news,
        text:'Tin tức',
        to:'FindBus'
    },
    {
        img:report,
        text:'Báo cáo',
        to:'Report'
    },
    {
        img:findJob,
        text:'Tìm việc',
        to:'FindBus'
    },
    {
        img:weather,
        text:'Thời tiết',
        to:'Weather'
    },
    {
        img:feedback,
        text:'Góp ý',
        to:'Feedback'
    },
]

const Home = ({ navigation }) => {

    return (
        <View className="flex flex-col h-full justify-between">

            <ScrollView className="bg-[#cde0fe] ">
                    <View className="flex flex-row justify-between px-6 mt-16">
                        <View className="bg-[#eefbfe] rounded-xl p-1.5 px-2 font-semibold flex flex-row gap-x-1 items-center" style={style.shadow}>
                            <Icon name="map-marker-alt" light></Icon>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>TP. Hồ Chí Minh</Text>
                        </View>
                        <Image source={notification} className="h-8 w-8"></Image>
                    </View>

                    {/* Search */}
                    <Search/>

                    {/* application */}
                    <View className="mt-[-25px] flex flex-row flex-wrap pl-3 py-6 pt-10 bg-white rounded-2xl gap-x-6 items-center mx-auto">
                            {
                                applications.map((app,key)=>(
                                    <Pressable onPress={() => navigation.navigate(app.to)} className="flex flex-col items-center" key={key}>
                                        <Image source={app.img} className="w-16 h-16"></Image>
                                        <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>{app.text}</Text>
                                    </Pressable>
                                ))
                            }
                    </View>
                    
                    <View className="h-[280px] mt-4">
                        <MapView
                            className="w-full h-full mt-[-10px]"
                            // onRegionChange={onRegionChange}
                            initialRegion={{
                                "latitude": 10.878832141931976, 
                                "latitudeDelta": 0.004954235495171488, 
                                "longitude": 106.80599564686418, 
                                "longitudeDelta": 0.002536363899707794}}
                        ></MapView>
                    </View>

                    {/* News */}
                    <View className="bg-[#f9f9f9] pb-4">
                        <View className="flex flex-row justify-between px-4 items-center py-4">
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-base">Tin tức nổi bật</Text>
                            <View className="flex flex-row items-center gap-x-2 opacity-50">
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-gray-800">Xem thêm</Text>
                                <Icon name="arrow-right" size={15}></Icon>
                            </View>
                        </View>

                        <View className="flex flex-row flex-wrap items-center gap-y-2   ">
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            <View className="flex flex-col basis-1/3 items-center gap-y-1">
                                <View className="rounded-xl border w-[100px] h-[100px]"   style={style.shadow}></View>
                                <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={2} className="mx-4 text-gray-400 text-xs">Khảo sát nhu cầu sử dụng phương tiện</Text>
                            </View>
                            
                        </View>

                    </View>
            </ScrollView>

            <Footer navigation={navigation}/>
        </View>

       
    );
}



export default Home;
