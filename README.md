# Portfolio Overview

Application for managing and tracking a portfolio with real-time updates, asset management.

## Technologies:

### React
### TypeScript
### Redux Toolkit
### socket.io
### SASS


## Installing of the project

Before you start the project, you need to install everything you need. To do this, take the following steps

### Install all dependencies:

```
yarn install
```

### Running a project locally

```
yarn dev
```

### Build a project

```
yarn build
```

# Project Structure

## `src/` — Folder with the application source code:
- **`/components/`** — Folder containing all components used in the application:
  - **`/components/addAssetForm/`** — Component for the asset addition form.
    - `addAssetForm.module.scss` — SCSS styles for the asset form.
    - `AddAssetForm.tsx` — React component for the asset form.
  - **`/components/assetItem/`** — Component representing a single asset item.
    - `AssetItem.tsx` — React component for displaying a single asset.
    - `assetsItem.module.scss` — SCSS styles for the asset item.
  - **`/components/assetsList/`** — Component for displaying a list of assets.
    - `assetsList.module.scss` — SCSS styles for the assets list.
    - `AssetsList.tsx` — React component for the assets list.
  - **`/components/header/`** — Component for the application header.
    - `header.module.scss` — SCSS styles for the header.
    - `Header.tsx` — React component for the header.
  - **`/components/modal/`** — Component for displaying modals.
    - `modal.module.scss` — SCSS styles for modals.
    - `Modal.tsx` — React component for modal functionality.

- **`/features/`** — Folder for application features:
  - `portfolioSlice.ts` — Redux slice for managing the portfolio state.

- **`/store/`** — Folder for managing application state and middleware:
  - `socketMiddleware.ts` — Middleware for handling socket connections.
  - `store.ts` — Redux store configuration.

- **`/styles/`** — Folder for global styles and variables:
  - `_variables.scss` — SCSS variables file for global styles.
  - `main.scss` — Main SCSS file for global styles.

- **`/utils/`** — Folder for utility functions:
  - `Sockets.ts` — Utility file for handling WebSocket connections.

- **`App.tsx`** — Main application component.
- **`main.tsx`** — Entry point for the application.
- **`types.ts`** — TypeScript types used throughout the application.

## `public/` — Folder for static resources:
- **`/favicon.png`** — Application icon.