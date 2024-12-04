import userType from '../types/user';
import data from '../data/users';
import { useState } from 'react';

export default function useUsers() {
  const [users, setUsers] = useState(data);

  const addUsers = (user: userType) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const user = users[0];
  const keys: string[] = user ? Object.keys(user) : [];
  const columns: object[] = [];
  for (let i = 0; i < keys.length; i++) {
    columns.push({
      title: keys[i],
      dataIndex: keys[i],
      key: keys[i],
    });
  }


  return {
    users,
    columns,
    addUsers,
  };
}
