import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050A30",
  },
  headerWrap: {
    paddingTop: 25,
    paddingBottom: 30,
  },
  header: {
    color: "#7EC8E3",
    fontSize: 40,
    paddingLeft: 40,
  },
  inputWrap: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "100%",
    paddingTop: 30,
    borderTopLeftRadius: 50,
  },
  input: {
    backgroundColor: "#ffffff",
    height: 65,
    width: 300,
    borderRadius: 20,
    marginBottom: 8,
    fontSize: 25,
    borderColor: "#000C66",
    borderWidth: 3.5,
    paddingLeft: 5,
  },
  picker: {
    width: 120,
  },
  button: {
    borderRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 80,
    backgroundColor: "#050A30",
  },
  buttonText: {
    color: "#7EC8E3",
    fontSize: 18,
  },
});

export default Styles;
