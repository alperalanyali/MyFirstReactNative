import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Card from './components/Card/Card'
import React from 'react';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" subtitle="Winter is comming" />
      <Card title="Arif Işık" subtitle="Uzaylılar tarafından kaçırıldım.Evet tarafından"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#e0e0e0',
  },

});

export default App;
