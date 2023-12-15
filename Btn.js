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
// bunu app.jsa yaz
<ScrollView>
<Btn color={"blue"} text={"TEXT1"}/>
<Btn color={"purple"} text={"TEXT2"}/>
<Btn color={"pink"} text={"TEXT3"}/>
<Btn color={"yellow"} text={"TEXT4"}/>
<Btn color={"lightgrey"} text={"TEXT5"}/>
<Btn color={"red"} text={"TEXT6"}/>
</ScrollView>