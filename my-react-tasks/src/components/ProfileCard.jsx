import React from 'react';

const ProfileCard = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>Анна Иванова</h2>
      <h3>Веб-разработчик</h3>
      <p>Люблю писать чистый код и изучать новые технологии</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default ProfileCard;