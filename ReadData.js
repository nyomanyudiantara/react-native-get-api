import React from "react";
import { StyleSheet, View, Text } from "react-native";

// const Item = ({name, username, email}) => {
//     return(
//       <View style={styles.container}>
//         <Text>Name: {name}</Text>
//         <Text>Username: {username}</Text>
//         <Text>Email: {email}</Text>
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     //   width: 300,
//       alignSelf: 'stretch',
//       height: 'auto',
//       margin: 15,
//       fontWeight: '600',
//       fontSize: 55
//       // backgroundColor: 'black'
//     }
// });

// export default Item;
class BookFavorite extends React.Component {
    render() {
      const fav = users.map(user => (
        <View>
            <Text>{user.name}</Text>
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
        </View>
      ));
      return (
          {fav}
      );
    }
  }
  
  export default BookFavorite;