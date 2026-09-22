import React from 'react';
import Greeting from '../src/components/Gretting';
import TaskList from './components/TaskList';
import ActionButton from './components/ActionButton';
import ProfileCard from './components/ProfileCard';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Результаты выполнения задач</h1>
      
      <section style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h2>1. Компонент «Приветствие»</h2>
        <Greeting />
      </section>

      <section style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h2>2. Компонент со списком задач</h2>
        <TaskList />
      </section>

      <section style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h2>3. Компонент с кнопкой и статическим сообщением</h2>
        <ActionButton />
      </section>

      <section style={{ marginBottom: '30px',
ttom: '1px solid #eee', paddingBottom: '20px' }}>
        <h2>4. Компонент карточки профиля</h2>
        <ProfileCard />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>5. Компонент галереи из картинок</h2>
        <ImageGallery />
      </section>
    </div>
  );
}

export default App;