import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";

const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("Home", { photo });
  };

  return (
    <View style={styles.containerBcg}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                style={styles.takePhotoImage}
                source={{ uri: photo }}
              ></Image>
            </View>
          )}
          <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
            <Text style={styles.snap}>SNAP</Text>
          </TouchableOpacity>
        </Camera>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Завантажте фото</Text>
          <TextInput style={styles.input} placeholder="Назва..." />
          <TextInput style={styles.input} placeholder="Місцевість..." />
          <TouchableOpacity
            style={styles.submitBtn}
            activeOpacity={0.8}
            onPress={sendPhoto}
          >
            <Text style={styles.submitBtnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  containerBcg: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  camera: {
    height: 300,
    marginTop: 50,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  snap: {
    color: "#FFF",
  },
  snapContainer: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#FFF",
    borderWidth: 1,
  },
  takePhotoImage: {
    width: 140,
    height: 100,
  },
  formWrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  input: {
    color: "#212121",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    backgroundColor: "#FFFFFF",
    placeholderTextColor: "#BDBDBD",
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 16,
    position: "relative",
    marginHorizontal: 16,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginHorizontal: 16,
  },
  submitBtnText: {
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default CreatePostScreen;
