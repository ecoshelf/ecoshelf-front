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
  BooleanInput
} from "react-admin";
import { Layout } from "./Layout";
import restProvider from 'ra-data-simple-rest'
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin 
    layout={Layout} 
    authProvider={authProvider} 
    dataProvider={restProvider('http://localhost:8000')}
  >
    <Resource 
      name="users" 
      list={UserList}
      create={UserCreate}
    />
  </Admin>
);

const UserList = (props: any) => {


  return (
  <List {...props}>
    <Datagrid>  
      <TextField source='phone_number' />
      <TextField source='first_name' />
      <TextField source='last_name' />
      <BooleanField source="ads_enabled" />
      <BooleanField source="is_active" />
    </Datagrid>
  </List>
  )

}

const UserCreate = (props: any) => {

  const postDefaultValue = () => ({ updated_at: new Date() });

  return (
    <Create title='Create a User' {...props}>
      <SimpleForm defaultValues={postDefaultValue}>
        <TextInput source='id' />
        <TextInput source='first_name' />
        <TextInput source='last_name' />
        <BooleanInput source="ads_enabled" />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Create>
  )
}

