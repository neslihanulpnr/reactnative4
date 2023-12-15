import { View, Text, Image,  TouchableOpacity } from "react-native"


export const User = ({ data }) => {
    return (
<TouchableOpacity onPress={() => {alert(data.id)}}>
<View style={{
            width: "90%",
            height: 80,
            flexDirection: "row",
            padding: 5,
            margin: 3
        }}>
            <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: 30, 
                    borderWidth: 2,
                    borderColor: "black"
                    }} source={{ uri: data.image }} />
            </View>
            <View style={{ 
                flex: 5, 
                justifyContent: "center", 
                alignItems: "center" }}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>{data.firstName} {data.lastName}</Text>
                <Text style={{fontSize: 15, color: "gray"}}>{data.email}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{
                    width: 40, 
                    height:40, 
                    borderRadius:20, 
                    backgroundColor: "gray",
                    justifyContent: "center",
                    alignItems: "center"
                    }}>
                    <Text style={{fontWeight: "bold", color: "white"}}>{data.age}</Text>
                </View>
            </View>
        </View>
</TouchableOpacity>
    )
}

export default User;