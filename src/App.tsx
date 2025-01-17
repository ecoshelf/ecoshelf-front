import {
  Admin,
  Resource,
  List,
  EditGuesser,
  ShowGuesser,
  Datagrid,
  TextField
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
    <Resource name="users" list={UserList}/>
  </Admin>
);

const UserList = (props: any) => {
  return (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
    </Datagrid>
  </List>
  )

}
