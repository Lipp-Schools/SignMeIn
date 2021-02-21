import { SafeAreaView } from "react-native";
import Styles from "../utils/Styles";

export default function SignIn() {
    return (
        <SafeAreaView style={Styles.container}>
           <View style={Styles.headerWrap}>
               <Text style={Styles.header}>Sign In</Text>
           </View>
        </SafeAreaView>
    )
}