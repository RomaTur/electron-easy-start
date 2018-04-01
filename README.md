# electron-easy-start

Simple starter-kit for development on React + Electron with hot reloading. The web version compiles and projecting into the Electron application. After assamblying web version, build going into Eletron wrapper and script creating desktop version. You can use a couple of commands for easy development.

![w10 sample](https://user-images.githubusercontent.com/11739632/37350993-59ad48d4-26da-11e8-9ac5-d3539cf1e2f9.PNG)

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

You need to see [config](https://www.electron.build/configuration/configuration) for **"build"** property.

## What's included

- Typesrcipt support for React.
- Sass compiling support.
- JS, CSS and assets automatic bundling.
- Hot reloading via react-scripts and electron-reload

> To use JSX, use react-scripts instead react-script-ts

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
    ├── gulpfile.js                 # Task copy electron_process.js and
                                    # package.json in build folder(web)
                                    # This made for script
                                    # that builds desktop version
    ├── package.json
    ├── tsconfig.json               # Config for compiling Typescript
    ├── tslint.json                 # Linting Typescript
```
