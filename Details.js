import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";

const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={{ uri: item.imageUri }}
          width={500}
          height={400}
          resizeMode="contain"
        ></Image>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Details Page</Text>
        <Text>This is the details page content.</Text>
        <Text>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
