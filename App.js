import React, { useEffect, useState } from "react";
import Axios from "axios";
import { View, Text, StyleSheet, LogBox, Button, Pressable } from "react-native";
// import Item from "./ReadData";
import { ScrollView } from "react-native-gesture-handler";

const Item = ({name, username, email}) => {

  const lert = () => {
    alert('Hello World');
  }

  const AddToFavorite = () => {
    const data = {
      name,
      username,
      email
    }
    console.log(data);
  }


  return(
    <View style={styles.container}>
      <Text value={name}>Name: {name}</Text>
      <Text value={username}>Username: {username}</Text>
      <Text value={email}>Email: {email}</Text>
      <Pressable style={styles.button} title="add to favorite" onPress={AddToFavorite}>
        <Text style={styles.text}>Add to Favorite</Text>
      </Pressable>
    </View>
  )
}

const viewData = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log('res get data: ', res);
      setUsers(res.data);
    })
  };

  // const submit = () => {
  //   const data = {
  //     name,
  //     username,
  //     email
  //   }
  // }


  return(
    <>
      <View style={styles.container}>
        <ScrollView>
          {users.map(user => {
            return <Item key={user.id} name={user.name} username={user.username} email={user.email} />
          })
          }
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    alignSelf: 'stretch',
    height: 'auto',
    margin: 15,
    fontWeight: '600',
    fontSize: 155
    // backgroundColor: 'black'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default viewData;