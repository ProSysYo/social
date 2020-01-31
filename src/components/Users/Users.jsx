import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://cs13.pikabu.ru/avatars/2984/x2984881-450866274.png',
                followed: false, fullName: 'Dmitry', status: 'I am Ok!', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://cs13.pikabu.ru/avatars/2984/x2984881-450866274.png',
                followed: true, fullName: 'Maxim', status: 'I love Liana', location: { city: 'Yola', country: 'Mari' }
            },
            {
                id: 3, photoUrl: 'https://cs13.pikabu.ru/avatars/2984/x2984881-450866274.png',
                followed: false, fullName: 'Liana', status: 'I love Maxim', location: { city: 'Yola', country: 'Mari' }
            }
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='ava' className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;