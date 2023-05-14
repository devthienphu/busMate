import { View, TextInput, Pressable } from "react-native"
import Header from "../components/header"
import MapView from "react-native-maps"

import style from "../style"
import Icon from 'react-native-vector-icons/FontAwesome5';

const FindRoute = ({navigation}) => {
    return (
        <View className=" h-full ">
            <Header navigation={navigation}/>
            
            {/* Search */}
            <View className="mt-[-40px] z-10">
                <Pressable onPress={() => navigation.navigate('RouteDetail')} style={style.shadow} className="z-10 mt-[-50px] flex flex-row justify-between items-center bg-white w-3/4 mx-auto rounded-xl mt-4 px-4">
                    <TextInput style={{fontFamily:'Poppins-Regular'}} className="py-2 px-2" placeholder="Nhập điểm đếnn"/>              
                    <Icon className="flex justify-end" name="search"></Icon>
                </Pressable> 
            </View>

            <MapView
                className="w-full h-full mt-[-22px]"
                // onRegionChange={onRegionChange}
                initialRegion={{
                    "latitude": 10.878832141931976, 
                    "latitudeDelta": 0.004954235495171488, 
                    "longitude": 106.80599564686418, 
                    "longitudeDelta": 0.002536363899707794}}
            ></MapView>

        </View>
    )
}

export default FindRoute