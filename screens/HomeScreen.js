import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increaseCount, getUsers} from '../redux/action';

export const HomeScreen = () => {
  const count = useSelector(state => state.count);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const showUsers = () => {
    console.log(users);
  };

  useEffect(() => {
    // function to load here
    dispatch(getUsers());
  }, []);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        title="Increase by 10"
        onPress={() => {
          dispatch(increaseCount(10));
        }}
      />
      <Button
        title="Show users"
        onPress={() => {
          showUsers();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
