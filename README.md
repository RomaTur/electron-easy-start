# electron-easy-start

Simple starter-kit for development on **React** + **Electron** with hot reloading. The web version compiles and projecting into the Electron application. After assamblying web version, build going into Eletron wrapper and script creating desktop version. You can use a couple of commands for easy development.

![electron-easy-start](https://lh6.googleusercontent.com/wctYq28b3wSGDJPXVS9oH9rHK3VrtXRFOruVCFvrtIWY9s9ww0uGFIppLNDvqe1j8t1HugC6_zPP5LoQLbHS=w1440-h804-rw)

- [electron-easy-start](#electron-easy-start)
    - [Install](#install)
    - [Develop](#develop)
    - [Build](#build)
        - [Important](#important)
    - [What's included](#whats-included)
    - [Folder structure](#folder-structure)

## Install

``` bash
# Clone the repository
$ git clone https://github.com/RomaTur/electron-easy-start.git

# Go into the repository
$ cd electron-easy-start

# Install dependencies
$ npm install
```

## Develop

Just run this commands to start developing with hot reloading.

``` bash
# Start developing for broweser

$ npm start

# Launch Electron View of App

$ npm run electron-dev
```

## Build

```bash
# Build web version

$ npm run build-web
```

```bash
# Build desktop version

$ npm run build-desktop
```

### Important

You need to see [config](https://www.electron.build/configuration/configuration) for **"build"** property in package.json.

## What's included

- Typesrcipt support for React.
- Sass compiling support.
- JS, CSS and assets automatic bundling.
- Hot reloading via react-scripts and electron-reload

> To use JSX, use react-scripts instead react-scripts-ts

## Folder structure

``` bash
├── electron-easy-start/            # Your project's name, you can rename it
    ├── build/                      # Build folder of web version
        ├── ...
    ├── dist/                       # Build folder of desktop version
        ├── ...
    ├── public/
        ├── favicon.ico
        ├── index.html              # The HTML template of your app
        ├── manifest.json           # Provides metadata
    ├── src/
        ├── Components/             # React Components
            ├── App/
                ├── App.css         # Compiles automatically
                ├── App.sass
                ├── App.tsx
        ├── ...
        ├── index.css               # Global style
        ├── index.tsx               # Main script that renders your app
    ├── electron_process.js         # Electron main process
    ├── gulpfile.js                 # Task copies electron_process.js and
                                    # package.json in build folder(web)
                                    # This made for script
                                    # that builds desktop version
    ├── package.json
    ├── tsconfig.json               # Config for compiling Typescript
    ├── tslint.json                 # Linting Typescript
```
