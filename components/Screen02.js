import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";



// const data= [
//     {
//         name: "Pinarello",
//         price: 1800,
//         img: '../assets/image01.png'
//     },
//     {
//         name: "Pina Mountai",
//         price: 1700,
//         img: '../assets/image01.png'
//     },
//     {
//         name: "Pinarello",
//         price: 1500,
//         img: '../assets/image01.png'
//     },
// ]
const getImageSource = (imagePath) => {
    switch (imagePath) {
      case 'img 01':
        return require('../assets/image01.png');
      case 'imfg 02':
        return require('../assets/image02.png');
      // Add more cases as needed
      default:
        return null;
    }
  };




function Screen02(){
    const [data, setData]= useState([])

    const fetchData = async() =>{
        fetch('https://67147c3c690bf212c7618b39.mockapi.io/bikestore/Bike').then(res => res.data).then(res => setData(res) )
    }
    useEffect(() => {
        fetchData
    }, []);
    return (
        <View>
            <Text>
                The world's best Bike
            </Text>
            <View>
                <TouchableOpacity>
                    <Text>
                        All
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{height:300, width: 400}} source={getImageSource(data[0].img)}/>
            </View>
        </View>
    );
}
export default Screen02;