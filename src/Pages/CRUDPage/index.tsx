import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  BooleanField,
  BooleanInput,
  Edit,
  EditButton,
  DeleteButton
} from "react-admin";
import { Layout } from "../../Layout";
import restProvider from 'ra-data-simple-rest'
import { authProvider } from "../../authProvider";

export const Crud = () => (
  <Admin 
  basename="/admin"
    layout={Layout} 
    authProvider={authProvider} 
    dataProvider={restProvider('http://localhost:8000')}
  >
    <Resource 
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
);

export const UserList = (props: any) => {


  return (
  <List {...props}>
    <Datagrid>  
      <TextField source='phone_number' />
      <TextField source='first_name' />
      <TextField source='last_name' />
      <BooleanField source="ads_enabled" />
      <BooleanField source="is_active" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
  )

}

export const UserCreate = (props: any) => {

 //const postDefaultValue = () => ({ id: Math.random() * 100 });

  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='phone_number' />
        <TextInput source='first_name' />
        <TextInput source='last_name' />
        <BooleanInput source="ads_enabled" />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Create>
  )
}


export const UserEdit = (props: any) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput source='phone_number' />
        <TextInput source='first_name' />
        <TextInput source='last_name' />
        <BooleanInput source="ads_enabled" />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Edit>
  )
}


