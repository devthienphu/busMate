import { useState, useEffect } from 'react' 
import { BlurView } from 'expo-blur';
import { ActivityIndicator, Image, Pressable, Text, View,Modal, ScrollView, TextInput } from "react-native"
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
import { getUser,updateUser } from '../api/userApi';

const options = [
    {
        name: 'Cài đặt',
        img: setting,
        to:'Settings'
    },
    {
        name: 'Bảo mật',
        img: sercurity,
        to:'Security'
    },
    {
        name: 'Đánh giá Busmate',
        img: evaluate,
        to:'Feedback'
    }
]

const logout = async (navigation) => {
    await AsyncStorage.removeItem('user')
    navigation.navigate('Home')
}

const Profile = ({navigation}) => {
    const [load, setLoad] = useState(true)
    const [profile, setProfile] = useState(null)
    const [updateModel, setUpdateModel] = useState(false);
    const [infoModel,setInfoModel] = useState(false)
    const [formValue, setFormValue] = useState({userName:'', contact:''})

    const updateInfo = async ()=>{
        const token = await AsyncStorage.getItem('user')
        const res = await updateUser(token,formValue)
        console.log(res)
    }

    const handleChange = (event, name) => {
        setFormValue({
            ...formValue,
            [name]: event.nativeEvent.text
        })
    }

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('user')
            const res = await getUser(token)
            setProfile(res)
            setFormValue({
                ...formValue,
                contact: res.contact,
                userName:res.userName
            })
            setLoad(false)
        })()
    },[updateModel])

    return (
        <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <View className='relative w-full h-[300]'>
                    <Image source={moon} className='absolute -top-40 -left-80 scale-[0.4]'></Image>
                    <View className='flex flex-row items-center justify-between mx-12 mt-28'>
                        <View className='rounded-full overflow-hidden border border-[#79CEFE] w-32 h-32'>
                            <Image source={avatar} className='w-32 h-32'></Image>
                        </View>

                        {
                            load
                            ?
                            <ActivityIndicator size="large" />
                            :
                            <View className='space-y-2 '>
                                <Text className='text-xl text-right' style={{fontFamily:'Poppins-Bold'}}>{profile.userName}</Text>
                                <Text className='text-sm text-[#aaa] text-right' style={{fontFamily:'Poppins-Regular'}}>SĐT: {profile.contact}</Text>
                                <Text className='text-sm text-[#aaa] text-right' style={{fontFamily:'Poppins-Regular'}}>{profile.email}</Text>
                            </View>
                        }

                    </View>

                    <Pressable 
                        onPress={() => logout(navigation)} 
                        className='bg-black rounded-xl py-2 px-4 mr-12 self-end'
                    >
                        <Text style={{fontFamily:'Poppins-Bold'}} className="text-xs text-white">Đăng xuất</Text>
                    </Pressable>
                </View>

                {/* options */}
                <View className=''>
                    <Pressable onPress={()=>{setUpdateModel(!updateModel)}}>
                            <LinearGradient  colors={['rgba(255, 255, 255, 0.6)','rgba(112, 126, 255, 0.05)']} start={[0.5, 0]} end={[0.5, 1]}>
                                <View className='flex flex-row items-center justify-between py-2 px-10'>
                                    <View className='flex flex-row items-center justify-between space-x-4'>
                                        <Image source={user} className='w-16 h-16'></Image>
                                        <Text className='text-base text-[#555]' style={{fontFamily:'Poppins-Regular'}}>Cá nhân</Text>
                                    </View>

                                    <Icon name="arrow-right"></Icon>
                                </View>
                            </LinearGradient>
                    </Pressable>
                {
                    options.map((item) => (
                        <Pressable key={item.name} onPress={() => navigation.navigate(item.to)}>
                            <LinearGradient  colors={['rgba(255, 255, 255, 0.6)','rgba(112, 126, 255, 0.05)']} start={[0.5, 0]} end={[0.5, 1]}>
                                <View className='flex flex-row items-center justify-between py-2 px-10'>
                                    <View className='flex flex-row items-center justify-between space-x-4'>
                                        <Image source={item.img} className='w-16 h-16'></Image>
                                        <Text className='text-base text-[#555]' style={{fontFamily:'Poppins-Regular'}}>{item.name}</Text>
                                    </View>

                                    <Icon name="arrow-right"></Icon>
                                </View>
                            </LinearGradient>
                        </Pressable>     
                    ))   
                }

                <Pressable onPress={()=>{setInfoModel(!infoModel)}}>
                    <LinearGradient  colors={['rgba(255, 255, 255, 0.6)','rgba(112, 126, 255, 0.05)']} start={[0.5, 0]} end={[0.5, 1]}>
                        <View className='flex flex-row items-center justify-between py-2 px-10'>
                            <View className='flex flex-row items-center justify-between space-x-4'>
                                <Image source={info} className='w-16 h-16'></Image>
                                <Text className='text-base text-[#555]' style={{fontFamily:'Poppins-Regular'}}>Thông tin ứng dụng</Text>
                            </View>

                            <Icon name="arrow-right"></Icon>
                        </View>
                    </LinearGradient>
                </Pressable>
                </View>

                {/* Modal user information*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={updateModel}
                    onRequestClose={() => {
                        setUpdateModel(!updateModel)
                    }}
                >
                    <View className="mt-20 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">Thông tin cá nhân</Text>
                        <ScrollView className="pt-4 w-full">
                            <View className="flex flex-col gap-y-1">
                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-gray-700">Tên</Text>
                                <TextInput 
                                    className="rounded-xl border border-2 px-3 text-lg py-1" 
                                    defaultValue={formValue.userName}
                                    onChange={event => handleChange(event, 'userName')}
                                ></TextInput>

                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-gray-700">Liên hệ</Text>
                                <TextInput 
                                    className="rounded-xl border border-2 px-3 text-lg py-1" 
                                    defaultValue={''+formValue.contact} 
                                    keyboardType="numeric"
                                    onChange={event => handleChange(event, 'contact')}
                                ></TextInput>

                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-gray-700">Mật khẩu</Text>
                                <TextInput 
                                    className="rounded-xl border border-2 px-3 text-lg py-1" 
                                    placeholder='********'
                                    secureTextEntry={true}
                                    onChange={event => handleChange(event, 'password')}
                                ></TextInput>
                            </View>
                            </ScrollView>
                        <View className="flex flex-row flex-wrap gap-x-4">
                            <Pressable onPress={()=>setUpdateModel(!updateModel)} className="rounded-xl bg-[#60c6ff] px-8 py-2 mt-4">
                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đóng</Text>
                            </Pressable>

                            <Pressable onPress={()=>{setUpdateModel(!updateModel);updateInfo()}} className="rounded-xl bg-[#ffc046] px-6 py-2 mt-4">
                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Cập nhật</Text>
                            </Pressable>
                        </View>
                        

                    </View>

                </Modal>

                {/* app information */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={infoModel}
                >
                    <View className="mt-20 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">BusMate</Text>
                        <ScrollView className="pt-4 w-full">
                            <Text style={{fontFamily:'Poppins-Regular'}} className="text-center">BusMate, bạn đồng hành trên những chuyến xe</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className="text-center">Version: 1.0.0</Text>

                        </ScrollView>
                        <View className="flex flex-row flex-wrap gap-x-4">
                            <Pressable onPress={()=>setInfoModel(!infoModel)} className="rounded-xl bg-[#60c6ff] px-8 py-2 mt-4">
                                <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đóng</Text>
                            </Pressable>
                        </View>
                        

                    </View>

                </Modal>

            </View>
            <Footer navigation={navigation} id={4}/>
            {(updateModel||infoModel)
                && 
                <BlurView
                    tint="light"
                    intensity={100}
                    className='absolute w-full h-full z-20'
                />
            }

        </View>
    )
}

export default Profile