import React, { useState } from 'react';

function App() {
  // Используем useState для управления списком желаний и текстом ввода.
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([]);

  const addWish = () => {
    // Проверяем, что введённое желание не пустое
    if (wish.trim() === '') return alert('Введите текст желания!');
    
    // Добавляем новое желание в список
    setWishes([...wishes, wish]);
    setWish('');
  };

  const deleteWish = (index) => {
    // Удаляем желание по индексу, создавая новый массив без выбранного элемента
    setWishes(wishes.filter((_, i) => i !== index));
  };

  // Inline-стили выбраны для простоты и наглядности небольшого компонента.
  // Такой подход уменьшает зависимость от внешних файлов и облегчает поддержку кода для небольших проектов.
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Список желаний</h2>
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Введите желание..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          style={{ padding: '8px', width: '70%', marginRight: '10px' }}
        />
        <button onClick={addWish} style={{ padding: '8px 16px' }}>Добавить</button>
      </div>
      {wishes.length === 0 ? (
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Пока желаний нет</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {wishes.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ccc', padding: '8px' }}>
              <span>{item}</span>
              <button onClick={() => deleteWish(index)} style={{ padding: '4px 8px' }}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


/*
Адаптация компонента для работы с backend:
Если бы компонент необходимо было интегрировать с backend, я бы реализовала загрузку данных с помощью fetch или axios внутри useEffect для получения списка желаний при инициализации компонента.  
Для обработки ошибок я бы добавила уведомления пользователю о неудачных запросах, и логирование ошибок. 
Также можно реализовать optimistic UI-обновление, чтобы пользователь видел изменения сразу, даже когда серверный запрос ещё в процессе выполнения.
*/
