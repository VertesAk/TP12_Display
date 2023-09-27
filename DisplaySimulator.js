import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DisplaySimulator = () => {
  const [numero, setNumero] = useState('');
  const [caracter, setCaracter] = useState('#');
  const [resultado, setResultado] = useState('');
  const [tamanioFuente, setTamanioFuente] = useState(18);

  const dibujarNumero = () => {
    const digitos = numero.toString().split('');
    let dibujo = '';

    const caracteres = {
      '0': [
        '###',
        '# #',
        '# #',
        '# #',
        '###',
      ],
      '1': [
        '  #',
        '  #',
        '  #',
        '  #',
        '  #',
      ],
      '2': [
        '###',
        '  #',
        '###',
        '#  ',
        '###',
      ],
      '3': [
        '###',
        '  #',
        '###',
        '  #',
        '###',
      ],
      '4': [
        '# #',
        '# #',
        '###',
        '  #',
        '  #',
      ],
      '5': [
        '###',
        '#  ',
        '###',
        '  #',
        '###',
      ],
      '6': [
        '###',
        '#  ',
        '###',
        '# #',
        '###',
      ],
      '7': [
        '###',
        '  #',
        '  #',
        '  #',
        '  #',
      ],
      '8': [
        '###',
        '# #',
        '###',
        '# #',
        '###',
      ],
      '9': [
        '###',
        '# #',
        '###',
        '  #',
        '###',
      ],
    };

    // Verificar si hay más de 8 dígitos para reducir el tamaño de fuente
    if (digitos.length > 8) {
      setTamanioFuente(12);
    } else {
      setTamanioFuente(18);
    }

    // Iterar a través de las filas
    for (let i = 0; i < 5; i++) {
      digitos.forEach((digito) => {
        if (caracteres[digito]) {
          dibujo += caracteres[digito][i].replace(/#/g, caracter) + ' ';
        }
      });
      dibujo += '\n'; // Agregar nueva línea después de cada fila
    }

    setResultado(dibujo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa un número:</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={(text) => setNumero(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Carácter a utilizar:</Text>
      <TextInput
        style={styles.input}
        value={caracter}
        onChangeText={(text) => setCaracter(text)}
        maxLength={1}
      />
      <Button title="Dibujar Número" onPress={dibujarNumero} />
      <Text style={[styles.result, { fontSize: tamanioFuente }]}>
        {resultado}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    textAlign: 'center',
  },
});

export default DisplaySimulator;
