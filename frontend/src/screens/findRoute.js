import { View, Pressable,Image } from "react-native"
import Header from "../components/header"
// import MapView from "react-native-maps"
// import { PROVIDER_GOOGLE } from "react-native-maps"
import map2 from '../imgs/map2.png'
import Search from "../components/search";

const FindRoute = ({navigation}) => {
    return (
        <View className=" h-full ">
            <Header navigation={navigation}/>
            
            {/* Search */}
            <Pressable onPress={() => navigation.navigate('RouteDetail')} className="mt-[-40px] z-10">
                <Search disabled={true} textHolder='Nhập điểm đến  '/>
            </Pressable>

            {/* <MapView
                className="w-full h-full mt-[-22px]"
                // onRegionChange={onRegionChange}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    "latitude": 10.878832141931976, 
                    "latitudeDelta": 0.004954235495171488, 
                    "longitude": 106.80599564686418, 
                    "longitudeDelta": 0.002536363899707794}}
            ></MapView> */}
            <Image source={map2} className="w-full h-full mt-[-22px]"></Image>

        </View>
    )
}

export default FindRoute