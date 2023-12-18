import { View } from "react-native";
import { UserList } from "../UserList";

export const Home = () => {
    return(
        <View style={{backgroundColor: "white", flex: 1, alignItems: "center"}}>
        <UserList />
        </View>
    )
}
export default Home;