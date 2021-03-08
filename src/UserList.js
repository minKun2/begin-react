import React from 'react';

function User({ user }) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}



function UserList() {
    const users = [
        {
            id: 1,
            username: 'minjae',
            email: 'minjae@safere.shop'
        },
        {
            id:2,
            username: 'tester',
            email: 'tester@safere.shop'
        },
        {
            ud:3,
            username: 'Sampler',
            email: 'Sampler@safere.shop'
        }
    ];
    return(
        <div>
          {users.map(user => (
              <User user={user} key={user.id}/>
          ))}
        </div>
    );
}

export default UserList;