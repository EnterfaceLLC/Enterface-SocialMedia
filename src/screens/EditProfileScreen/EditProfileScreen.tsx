import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import user from '../../assets/data/user.json';
import { useForm, Control, Controller } from 'react-hook-form';
import { IUser } from '../../types/models';
import colors from '../../theme/colors';

type IEditFields = 'name' | 'username' | 'website' | 'bio';
type IEditUser = Pick<IUser, IEditFields>;

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

interface ICustomInput {
  control: Control<IEditUser, object>;
  name: IEditFields;
  label: string;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({ control, name, label, multiline = false, rules = {} }: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label}</Text>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.input,
              { borderColor: error ? 'red' : colors.primary },
              ]}
              placeholder={label}
              multiline={multiline}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text style={{ color: 'red' }}>{error.message || 'Error'}</Text>}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const { control, handleSubmit } = useForm<IEditUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio
    }
  });

  const Submit = (data: IEditUser) => {
    console.log('Submit', data)
  };


  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{ uri: user.image }}
      />
      <Text style={styles.buttonTxt}>Change Profile Photo</Text>

      <CustomInput
        name='name'
        control={control}
        label='Name'
        rules={{ required: 'Name Required' }}
      />

      <CustomInput
        name='username'
        control={control}
        label='Username'
        rules={{ required: 'Username Required', minLength: { value: 4, message: 'Username must be more than 4 characters' } }}
      />

      <CustomInput
        name='website'
        control={control}
        label='Website'
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Valid URL Required'
          },
        }}
      />

      <CustomInput
        name='bio'
        control={control}
        label='Bio'
        multiline
        rules={{
          maxLength: {
            value: 200,
            message: 'Maximum 200 characters'
          }
        }}
      />

      <Text onPress={handleSubmit(Submit)} style={styles.buttonTxt}>Submit</Text>
    </View>
  )
}

export default EditProfileScreen;