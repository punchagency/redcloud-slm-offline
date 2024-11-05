// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { loadTensorflowModel } from 'react-native-fast-tflite';
import { useLlmInference } from 'react-native-llm-mediapipe';

const model = loadTensorflowModel(require('../../assets/models/distilgpt2-small-64-fp16.tflite'))
const llmInference = useLlmInference({
  storageType: 'asset',
  modelName: 'gemma-2b-it-cpu-int4.bin',
  // 'gemma-1.1-2b-it-gpu-int4.bin' or the name of the model that
  // you placed at android/app/src/main/assets/{MODEL_FILE}
});

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  // Placeholder function to simulate the model response
  const handleSubmit = () => {
    // Replace this with actual model processing logic
    setResponseText(`Response to: "${inputText}"`);
    setInputText('');  // Clear input after submission
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Ask a Question</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Type your question..."
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {responseText ? (
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>{responseText}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver', // Light grey background
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '90%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25, // Rounded corners
    backgroundColor: '#fff',
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF', // Subtle blue for contrast
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  responseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    width: '100%',
  },
  responseText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Index;
