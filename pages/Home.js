import Register from "./Register";

export default Home = ({ navigation }) => {
  return (
    <Button title="Register" onPress={() => navigation.navigate(Register)} />
  );
};
