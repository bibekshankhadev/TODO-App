# Todo App

A simple task manager built with React. Add, view, edit and delete todos, with everything saved in your browser's `localStorage`, so your list is still there after a refresh. There's no backend or account to set up.

## Features

- **Create** a todo from the input on the Todo page, with a toast confirmation on success
- **Read** the full list of todos, or an empty-state message when there are none
- **Update** a todo's title on a dedicated edit page
- **Delete** a todo with one click
- **Persistent storage**: todos are written to `localStorage` under the `todos` key
- **Validation**: empty todos are rejected with an inline error message
- **Duplicate protection**: a todo whose `id` already exists in the list is ignored

## Tech Stack

| Purpose | Library |
| --- | --- |
| UI | [React 19](https://react.dev/) |
| Build tool / dev server | [Vite 7](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Notifications | [React-Toastify](https://fkhadra.github.io/react-toastify/) |
| ID generation | [uuid](https://github.com/uuidjs/uuid) |
| Linting | ESLint 9 with React Hooks and React Refresh plugins |

State is managed with React's built-in `useReducer` and Context API, so there's no extra state library.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (required by Vite 7)
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd TODOAPP

# Install dependencies
npm install
```

### Run in development

```bash
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. Open it in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project |

## Routes

| Path | Page | Description |
| --- | --- | --- |
| `/` | Home | Landing page |
| `/todo` | Todo | Add, list, edit and delete todos |
| `/editTodo` | EditTodo | Edit a single todo's title |

`/editTodo` receives the todo to edit through router state. If you open it directly or refresh the page, you're redirected back to `/todo`.

## Project Structure

```text
TODOAPP/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── Header.jsx       # Top navigation bar
│   ├── context/
│   │   ├── TodoContext.js   # Context object
│   │   └── TodoProvider.jsx # Reducer, localStorage sync, provider
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Todo.jsx         # Add / list / delete todos
│   │   └── EditTodo.jsx     # Edit a todo
│   ├── App.jsx              # Route definitions
│   ├── main.jsx             # Entry point (Router, Provider, ToastContainer)
│   └── index.css            # Tailwind import and global styles
├── index.html
├── vite.config.js
└── eslint.config.js
```

## How It Works

Todos live in a single reducer in [TodoProvider.jsx](src/context/TodoProvider.jsx). Components read `state.todos` and change it by dispatching one of these actions:

| Action | Payload | Effect |
| --- | --- | --- |
| `addTodo` | `{ id, title }` | Appends the todo unless the `id` already exists |
| `updateTodo` | `{ id, title }` | Replaces the title of the todo with that `id` |
| `deleteTodo` | `{ id }` | Removes the todo with that `id` |

The initial state is loaded from `localStorage`, and the list is written back after each render of the provider.

Each todo has this shape:

```json
{
  "id": "3b241101-e2bb-4255-8caf-4136c566a962",
  "title": "Buy groceries"
}
```

## Deployment

Run `npm run build` and deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.).

The app uses client-side routing with `BrowserRouter`, so the host must serve `index.html` for unknown paths. Without that, refreshing on `/todo` returns a 404.

## Possible Improvements

- Mark todos as completed
- Filter and search todos
- Confirmation before deleting
- Navigate to `/editTodo/:id` instead of passing state, so edit links can be shared

## License

No license has been specified for this project.
