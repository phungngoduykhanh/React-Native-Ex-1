import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default function Setting() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.title}>Box1</Text>
          <View style={styles.list}>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Box1</Text>
          <View style={styles.list}>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Text > 1 </Text>
                </View>
                <View>
                  <Text style={styles.name}>item 1</Text>
                  <Text style={styles.subname}>sub-title</Text>
                </View>

              </View>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView >
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFF3",
  },
  body: {
    flex: 1,
    paddingTop: 50
  },
  title: {
    color: "#6D7B8D",
    fontSize: 20,
    paddingHorizontal: 15,
    paddingBottom: 5
  },
  list: {
    backgroundColor: "white",
  },
  item: {
    borderWidth: 1,
    borderColor: 'rgba(233, 233, 234, 1)',
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 14
  }
  ,
  icon: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13
  },
  name: {
    fontSize: 17
  },
  subname: {
    color: "#6D7B8D"
  }
})