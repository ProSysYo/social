import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return (
                    <span
                        className={currentPage === p ? styles.selectedPage : null}
                        onClick={(e) => { onPageChanged(p); }}
                        key={p}>{p}</span>
                )
            })}
        </div>
    )
}

export default Paginator;