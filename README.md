# ToDo List с Перемещаемыми Категориями

Проект представляет собой ToDo List, где задачи сгруппированы по категориям. В приложении реализована возможность:  
- Перемещать категории (Drag-and-Drop).  
- Добавлять, изменять и удалять задачи внутри категорий.  

---

## 🚀 Функционал

- **Перемещение категорий**: Меняйте порядок категорий с помощью Drag-and-Drop.  
- **Работа с задачами**:  
  - Добавление новых задач.  
  - Редактирование существующих задач.  
  - Удаление задач.  

- **Локальное хранение данных**: Все данные хранятся в `db.json`, который управляется через `json-server`.  

---

## 📋 Установка и запуск

1. Клонируйте репозиторий:  
   ```bash
   git clone https://github.com/Garpirik/College_Todolist


Установите зависимости:
npm install

Запустите JSON-сервер:
json-server -w db.json

Запустите проект:
npm run dev

🛠 Технологии
React
React DnD (Drag-and-Drop)
JSON-Server
CSS MODULES
Redux Toolkit
Redux Toolkit Query
