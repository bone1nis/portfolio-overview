# Portfolio Overview

Application for managing and tracking a portfolio with real-time updates, asset management, and analytics.

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


1. **`/src/`** — Folder with the application source code:
    - **`/components/`** — Folder with all components used in the application
        - **`/components/FlatChart.tsx`** — Component with a flat chart.
        - **`/components/FolderForm.tsx`** — Component representing a form for creating folders.
        - **`/components/Menu.tsx`** — Component for creating the application navigation menu.
        - **`/components/ResizablePanel.tsx`** — Component for a resizable panel, providing the ability to change the panel width by the user (drag-and-drop mechanism for changing sizes).
        - **`/components/TreeView.tsx`** — Component for displaying a tree-like data structure.

    - **`/pages/`** — Folder with pages used in the application.

    - **`/context/`** — Folder for managing the global state of the Context API.
        - **`/context/TreeContext.tsx`** — File for creating Contex, managing the tree data structure.
        - **`/context/TreeProvider.tsx`** — File for creating Context Provider.

    - **`/routes/`** — Folder with routing settings in the application.
        - **`/routes/routes.tsx`** — File with route configuration.

    - **`/main.tsx`** — Application entry point, main component.

2. **`/public/`** — Folder with statistical resources
    - **`/favocion.png`** — Application icon.