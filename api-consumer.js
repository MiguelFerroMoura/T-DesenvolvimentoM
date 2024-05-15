import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, FlatList } from "react-native";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 18,
    padding: 10,
    margin: 5,
    backgroundColor: "#ccc",
  },
});

export default App;
