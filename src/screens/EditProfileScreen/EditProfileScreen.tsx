import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import user from '../../assets/data/user.json';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({ label, multiline = false }: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput style={styles.input} placeholder={label} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
  const Submit = () => {
    console.log('Submit')
  };


  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{ uri: user.image }}
      />
      <Text style={styles.buttonTxt}>Change Profile Photo</Text>

      <CustomInput label='Name' />
      <CustomInput label='Username' />
      <CustomInput label='Website' />
      <CustomInput label='Bio' multiline />

      <Text onPress={Submit} style={styles.buttonTxt}>Submit</Text>
    </View>
  )
}

export default EditProfileScreen;