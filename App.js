import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      console.log(json.data);

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <view>Page: {data.page}</view>

      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data.data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <ItemViwer prop={item}></ItemViwer>
          )}
        />
      )}
    </View>
  );
};

const ItemViwer = (property) => {
  console.log(property)
  return (
    <view>
      <View>Id: {property.prop.id}</View>
      <View>Email:{property.prop.email}</View>
    </view>
  );
}

export default App;