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
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "100%",
    paddingTop: "10%",
  },
  input: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: 60,
    width: 300,
    borderRadius: 10,
    marginBottom: "5%",
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
  hyperlink: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#050a30",
    alignItems: "center",
  },
});

export default Styles;
