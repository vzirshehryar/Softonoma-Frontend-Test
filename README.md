# Softonoma Test

A React + TypeScript + Vite frontend for a host onboarding flow.  
This project currently renders a top navigation bar and a two-step form flow:

- `Subscription` step
- `Device Management` step

All form values in these steps are connected to `localStorage`, so values persist after page reload.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (plus custom CSS utility classes)
- ESLint

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

- `src/main.tsx`  
  Application bootstrap with `StrictMode` and root render.

- `src/App.tsx`  
  Root layout. Renders:
  - `Navbar`
  - `Main`

- `src/components/Navbar.tsx`  
  Top navigation/header UI containing:
  - menu icon (SVG)
  - logo image
  - static navigation labels (`Learn more`, `List your car`, `Inbox`)
  - profile/avatar icon (SVG)

- `src/components/Main.tsx`  
  Main flow container with:
  - left sidebar progress items (desktop)
  - step rendering logic for:
    - `Subscription`
    - `Device`
  - fixed bottom `Next` button (moves from `Subscription` to `Device`)
  - centralized form state + persistence layer

- `src/components/Subscription.tsx`  
  Controlled subscription form UI:
  - plan selection
  - add-on selection
  - card details fields (`number`, `expiry`, `cvc`)
  Receives all values + change handlers via props from `Main`.

- `src/components/Device.tsx`  
  Controlled device management UI:
  - 4 device blocks
  - per-device fields:
    - device type
    - bring-your-own-device toggle
    - serial number
    - upload input (stores selected file name)
  Receives values + change handlers via props from `Main`.

## Form Persistence (Local Storage)

Form state is stored under this key:

- `host-onboarding-form`

Persistence behavior:

- On first render, `Main` reads and parses saved data from `localStorage`.
- If no saved data exists (or data is invalid), defaults are used.
- Any form update automatically re-saves the latest state to `localStorage`.

### Persisted Data Shape

```ts
{
  selectedPlan: string;
  selectedAdds: string;
  cardDetails: {
    number: string;
    expiry: string;
    cvc: string;
  };
  devices: Array<{
    deviceType: string;
    bringYourOwnDevice: boolean;
    serialNumber: string;
    deviceImageName: string;
  }>;
}
```

### Important Note About File Uploads

Browser `File` objects are not persisted directly.  
The app stores only the selected file name (`deviceImageName`) in state/localStorage.

## Current UX Notes

- Sidebar items are currently static in style and mostly non-interactive (except active step state display).
- `Next` button currently moves from `Subscription` to `Device`.
- No API integration yet; this is client-side UI/state only.

## Linting

Run:

```bash
npm run lint
```

to check code quality and formatting rules configured for the project.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
