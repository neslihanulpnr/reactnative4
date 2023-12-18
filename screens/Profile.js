import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native"

export const Profile = () => {
    const route = useRoute();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (() => {
            const userID = route.params.userID;
            fetch("https://dummyjson.com/users/" + userID)
                .then(resp => resp.json())
                .then(json => setUser(json))
                .finally((e) => setLoading(false));
        })();
    }, [])

    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

const Loading = () => {
    return(
        <View style={{
            justifyContent: "center", 
            alignItems: "center", 
            flex: 1, 
            backgroundColor: "white"}}>
<ActivityIndicator size={"large"} color={"red"}/>
        </View>
    )
}

export default Profile;