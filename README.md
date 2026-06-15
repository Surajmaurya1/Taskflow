```

## How It Works

### Authentication

- The app checks whether a user session already exists in `localStorage`
- Admin and employee users are routed to different dashboards after login
- Session data is stored under `loggedInUser`

### Task Management

- Initial employee and task data are seeded automatically on first load
- Admin users can assign new tasks to existing employees
- Employee users can review their assigned tasks and mark them as done
- Task updates are saved in `localStorage`, so the UI state persists across refreshes

## Demo Credentials

Use the following credentials to test the application:

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@me.com` | `123` |
| Employee | `suraj@me.com` | `123` |

Additional employee accounts are also seeded in local storage for testing different dashboards and task lists.

## Getting Started

### Prerequisites

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
- Node.js 18 or later recommended
- npm

Currently, two official plugins are available:
### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
The app will start on the local Vite development server, typically at `http://localhost:5173`.

## React Compiler
### Build for Production

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
```bash
npm run build
```

## Expanding the ESLint configuration
### Preview the Production Build

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Taskflow
-
```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Current Limitations

- No backend or database integration
- No encrypted or secure authentication
- Data is stored only in the browser
- Completing a task currently removes it from the employee list instead of moving it into a separate history view
- The project is intended for learning, demonstration, and UI practice rather than production deployment

## Future Improvements

- Integrate a real authentication system
- Connect the app to an API and database
- Add role-based route protection
- Support task editing, deletion, and status transitions
- Add search, filters, and task history
- Introduce automated testing

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across the project |

## License

This project is available for educational and portfolio use.
