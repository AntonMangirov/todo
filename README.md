# Todo (React + Vite + TypeScript + MUI)

Небольшое приложение-шаблон для списка задач на базе Vite, React и TypeScript с использованием Material UI.

## Возможности
- Быстрый старт разработки с HMR (Vite)
- Готовая интеграция **MUI** и **Emotion** для стилизации
- Строгая типизация на **TypeScript**
- Базовая настройка **ESLint**

## Технологии
- **React 19** + **TypeScript**
- **Vite 7**
- **MUI (Material UI) 7** + **@emotion/react** и **@emotion/styled**
- **ESLint 9** (react hooks, react-refresh)

## Требования
- Node.js ≥ 18 (рекомендовано LTS 18/20)
- npm ≥ 9

Проверьте версии:
```bash
node -v
npm -v
```

## Установка и запуск
```bash
# Перейти в директорию проекта
cd todo

# Установить зависимости
npm install

# Запустить dev-сервер (HMR)
npm run dev
# По умолчанию: http://localhost:5173
```

## Скрипты
```bash
npm run dev      # запуск dev-сервера (Vite)
npm run build    # production сборка (Vite)
npm run preview  # предпросмотр собранного билда
npm run lint     # запуск ESLint
```

## Структура проекта
```text
todo/
  public/
  src/
    components/
    App.tsx
    main.tsx
    index.css
  package.json
  vite.config.js
  README.md
```

## Заметки
- Vite использует ESM и современную конфигурацию. Для SSR/деплоя см. документацию Vite.
- Если порт 5173 занят, Vite предложит альтернативный порт.
- Для корректной работы MUI используйте тему и стили из `@mui/material` и `@emotion/*`.

## Частые проблемы
- Конфликты версий Node/npm: используйте LTS и при необходимости `nvm`.
- Ошибки при установке пакетов: `npm cache verify` и повторите `npm install`.
- Проблемы с импортами типов: убедитесь, что `vite-env.d.ts` присутствует и `tsconfig` корректен.

## Лицензия
MIT (если не указано иное).
