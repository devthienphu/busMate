import React,{useEffect,useState} from 'react';
import { View, Text,Image,Pressable,StatusBar,TextInput,SafeAreaView  } from 'react-native';
import Header from '../components/header';
import moon from '../imgs/weather/moon.png'
import style from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {feedBack} from '../api/reportApi'

const Report = ({navigation}) => {
    const [content, setContent] = useState('');
    const sendReport = async ()=>{
        const token = await AsyncStorage.getItem('user')
        const res=  await feedBack(token,content)
        setContent("")
    }
    return (
       <View className="bg-[#F9F9F9] h-full">
            <Header navigation={navigation} title = "Báo cáo"/>
            <SafeAreaView className="pt-[35px] px-10 h-[50%] mb-5">
                <TextInput
                        onChangeText={text=>setContent(text)}
                        value={content}
                        className = "bg-white w-full rounded-[8px] h-full p-4 text-sm border border-[#60C6FF]"
                        style={{ elevation:8, textAlignVertical: 'top',fontFamily:'Poppins-Light' }}
                        placeholder="Nội dung bạn muốn báo cáo..."
                        multiline={true}
                        numberOfLines = {10}
                >
                </TextInput>
            </SafeAreaView>
            <View className="px-10">
                <Text style={{fontFamily:'Poppins-Medium'}} className="text-[#A0A7BA] text-justify text-sm">
                    Busmate sẽ gửi góp ý của bạn đến cơ quan có thẩm quyền và hồi đáp bạn trong thời gian sớm nhất. 
                    Chân thành cảm ơn sự đóng góp của bạn.
                </Text>
            </View>
            <View className="px-10 flex flex-row justify-center pt-[40px] ">
                <Pressable className="bg-[#60C6FF] px-6 py-3 rounded-[20px]" style={style.shadow} onPress={sendReport}>
                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-2xl content-center text-white">
                        Gửi báo cáo
                    </Text>
                </Pressable>
            </View>
            <Image source={moon} className="h-2/3 -z-10 -mt-[320px]" style = {{ width: null, resizeMode: 'contain'}}/>

       </View>
    );
}

export default Report;
