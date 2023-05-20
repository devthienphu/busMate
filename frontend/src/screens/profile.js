import { Image, Pressable, Text, View } from "react-native"
import Footer from "../components/footer"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import avatar from '../imgs/profile/avatar.png'
import moon from '../imgs/profile/moon.png'
import user from '../imgs/profile/user.png'
import info from '../imgs/profile/info.png'
import setting from '../imgs/profile/setting.png'
import evaluate from '../imgs/profile/evaluate.png'
import sercurity from '../imgs/profile/sercurity.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

const options = [
    {
        name: 'Cá nhân',
        img: user
    },
    {
        name: 'Cài đặt',
        img: setting
    },
    {
        name: 'Bảo mật',
        img: sercurity
    },
    {
        name: 'Đánh giá Busmate',
        img: evaluate
    },
    {
        name: 'Thông tin ứng dụng',
        img: info
    }
]

const logout = async (navigation) => {
    await AsyncStorage.removeItem('user')
    // console.log(AsyncStorage.getItem('user'))
    navigation.navigate('Home')
}

const Profile = ({navigation}) => {
    return (
        <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <View className='relative w-full h-[300]'>
                    <Image source={moon} className='absolute -top-40 -left-80 scale-[0.4]'></Image>
                    <View className='flex flex-row items-center justify-between mx-12 mt-28'>
                        <View className='rounded-full overflow-hidden border border-[#79CEFE] w-32 h-32'>
                            <Image source={avatar} className='w-32 h-32'></Image>
                        </View>

                        <View className='space-y-2'>
                            <Text className='text-xl text-right' style={{fontFamily:'Poppins-Bold'}}>Hoàng Nguyễn</Text>
                            <Text className='text-sm text-[#aaa] text-right' style={{fontFamily:'Poppins-Regular'}}>SĐT: 123456789</Text>
                            <Text className='text-sm text-[#aaa] text-right' style={{fontFamily:'Poppins-Regular'}}>abc@gmail.com</Text>
                        </View>

                    </View>

                    <Pressable 
                        onPress={() => logout(navigation)} 
                        className='bg-black rounded-xl py-2 px-4 mr-12 self-end'
                    >
                        <Text style={{fontFamily:'Poppins-Bold'}} className="text-xs text-white">Đăng xuất</Text>
                    </Pressable>
                </View>

                {/* options */}
                <View className='space-y-2'>
                {
                    options.map((item) => (
                        <LinearGradient key={item.name} colors={['rgba(255, 255, 255, 0.6)','rgba(112, 126, 255, 0.05)']} start={[0.5, 0]} end={[0.5, 1]}>
                            <View className='flex flex-row items-center justify-between py-2 px-10'>
                                <View className='flex flex-row items-center justify-between space-x-4'>
                                    <Image source={item.img} className='w-16 h-16'></Image>
                                    <Text className='text-base text-[#555]' style={{fontFamily:'Poppins-Regular'}}>{item.name}</Text>
                                </View>

                                <Icon name="arrow-right"></Icon>
                            </View>
                        </LinearGradient>
                    ))   
                }
                </View>
            </View>
            <Footer navigation={navigation} id={4}/>
        </View>
    )
}

export default Profile