import React from 'react';
import { View, Text } from 'react-native';

const ProfesorScreen = () => {
  const ProfesorList = () => {
    return (
      <View>
        <Text>Lista de Profesores</Text>
        {/* ...resto del código de ProfesorList... */}
      </View>
    );
  };

  return (
    <View>
      <ProfesorList /> 
    </View>
  );
};

export default ProfesorScreen;