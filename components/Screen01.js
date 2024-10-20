import { Image, Text, TouchableOpacity, View } from "react-native";

function Screen01(){
    return (
        <View style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <View style={{display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center", alignContent:"center"}}>
                <Text style={{textAlign:"center"}}>A Premium online store for sporter and 
                their stylish choice</Text>
            </View>            
            <Image style={{height: 300, width: 300}} source={require('../assets/image01.png')}/>

            <Text style={{textAlign:"center"}}>POWER BIKE SHOP</Text>
            <View >
                <TouchableOpacity style={{alignSelf:"center", backgroundColor:"red", width:200, height:50, justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"white", fontSize:24}}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen01;