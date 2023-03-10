import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { onSnapshot, collection, query, orderBy, where } from 'firebase/firestore';
// import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

// Icons
import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPost = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);


  const {  userId } = useSelector((state) => state.auth);

  const getAllPost = async () => {
    try {
      const ref = query(
        collection(db, "posts"),
        where("userId", "==", `${userId}`)
      );
      onSnapshot(ref, (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (error) {
      console.log("Помилка getAllPost", error.message);
    }
  };

  useEffect(() => {
    console.log("d");
    getAllPost();
  }, []);

  return (
    <View style={styles.bcgContainer}>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.photo }} style={styles.image} />
              <View>
                <Text style={styles.title}>{item.comment}</Text>
              </View>
              <View style={styles.infoContainer}>
                <TouchableOpacity
                  title="CommentsScreen"
                  onPress={() =>
                    navigation.navigate("CommentsScreen", { postID: item.id })
                  }
                >
                  <EvilIcons name="comment" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  title="MapScreen"
                  onPress={() =>
                    navigation.navigate("MapScreen", {
                      location: item.location,
                    })
                  }
                >
                  <EvilIcons name="location" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bcgContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  container: {
    marginHorizontal: 16,
  },
  imageContainer: {
    marginBottom: 37,
  },
  image: {
    height: 200,
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DefaultScreenPost;
