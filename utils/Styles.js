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
    paddingLeft: "10%",
  },
  inputWrap: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "100%",
    paddingTop: "20%",
    borderTopLeftRadius: 50,
  },
  input: {
    backgroundColor: "#ffffff",
    height: "27%",
    width: "80%",
    borderRadius: 15,
    marginBottom: "4.5%",
    fontSize: 25,
    borderColor: "#000C66",
    borderWidth: 3.5,
    paddingLeft: "1.5%",
  },
  picker: {
    width: 300,
    color: "#ffffff",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#050A30",
    width: "25%" 
  },
  buttonText: {
    
  }
});

export default Styles;
