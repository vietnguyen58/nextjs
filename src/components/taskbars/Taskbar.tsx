// components/Taskbar.tsx
import React from 'react';
import styles from './Taskbar.module.css';

const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* Thêm các mục khác vào đây */}
      </ul>
    </div>
  );
};

export default Taskbar;
