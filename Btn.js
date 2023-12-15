import { View, Text } from "react-native"


export const Btn = ({ text, color}) => {
    return(
        <View style={{
            margin: 3,
            width: 300, 
            height: 300,
            backgroundColor: color,
            justifyContent: "center",
            alignItems: "center"
        }}>
       <Text style={{ fontWeight: "bold", fontSize: 25}}>{text}</Text>
        </View>
    )
}

export default Btn;