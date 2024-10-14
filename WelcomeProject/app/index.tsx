import { StatusBar } from "expo-status-bar";
import { Button, Text, ToastAndroid, View } from "react-native";

export default function Index() {
  const doSomething = ()=>{
    ToastAndroid.show("This is very Cool ", ToastAndroid.LONG);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Thinking Machine </Text>
      <Button title="Cool ! Click me" onPress={doSomething}></Button>
      <StatusBar style="auto"/>
    </View>
  );
}
