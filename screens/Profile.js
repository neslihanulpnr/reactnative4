import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native"

export const Profile = () => {
    const route = useRoute();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (() => {
            const userID = route.params.userID;
            fetch("https://dummyjson.com/users/" + userID)
                .then(resp => resp.json())
                .then(json => setUser(json))
                .finally(() => setLoading(false));
        })();
    }, [])

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            {loading ? <Loading /> : <UserInfo data={user} />}
        </View>
    )
}

const Loading = () => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "white"
        }}>
            <ActivityIndicator size={"large"} color={"red"} />
        </View>
    )
}

const UserInfo = ({ data }) => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ alignItems: "center" }}>


                <Image style={{ width: 250, height: 250, borderRadius: 125, borderColor: "black", borderWidth: 3 }} source={{ uri: data.image }} />

                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    {data.firstName} {data.lastName}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {data.email}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {data.phone}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {data.age}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {data.birthDate}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                    {data.bank.cardNumber}
                </Text>
            </View>
        </View>
    )
}

export default Profile;
