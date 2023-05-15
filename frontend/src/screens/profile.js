import { Image, Text, View } from "react-native"
import Footer from "../components/footer"

import avatar from '../imgs/profile/avatar.png'
import moon from '../imgs/profile/moon.png'

const Profile = ({navigation}) => {
    return (
        <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <View className='relative w-full h-[300]'>
                    <Image source={moon} className='absolute -top-40 -left-80 scale-[0.4]'></Image>
                    <View className='flex flex-row items-center justify-between mx-12 mt-32'>
                        <View className='rounded-full overflow-hidden border border-[#79CEFE] w-32 h-32'>
                            <Image source={avatar} className='w-32 h-32'></Image>
                        </View>

                        <View className='space-y-2'>
                            <Text className='text-xl' style={{fontFamily:'Poppins-Bold'}}>Hoàng Nguyễn</Text>
                            <Text className='text-sm text-[#aaa]' style={{fontFamily:'Poppins-Regular'}}>SĐT: 123456789</Text>
                            <Text className='text-sm text-[#aaa]' style={{fontFamily:'Poppins-Regular'}}>abc@gmail.com</Text>
                        </View>

                    </View>
                </View>
            </View>
            <Footer navigation={navigation} id={4}/>
        </View>
    )
}

export default Profile