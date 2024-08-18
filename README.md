# Speckle Viewer Site

This project is a web application that loads and displays 3D models using the Speckle Viewer. It is built using TypeScript, Webpack, and the Speckle Viewer library. The application allows users to interact with 3D models directly in their web browser.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/bechosen-spec/speckle-viewer-site.git
   cd speckle-viewer-site
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run start
   ```

2. Open your browser and navigate to [http://localhost:9001/](http://localhost:9001/) to view the application.

3. The application will automatically load a predefined 3D model using the Speckle Viewer. You can interact with the model using your mouse.

## Development

### Project Structure

- **src/index.html**: The main HTML file that contains the structure of the web page.
- **src/index.ts**: The main TypeScript file that initializes the Speckle Viewer and loads the 3D model.
- **webpack.config.js**: Webpack configuration file that bundles the TypeScript and other assets.
- **dist/**: The build output directory, created after running the build command.

### Build

To create a production build:

```bash
npm run build
```

This will bundle the project files and output them to the `dist/` directory.

### Git Branches

- **main**: The primary development branch.
- **master**: (Optional) May be used as a backup or transitional branch depending on your versioning strategy.

## Features

- Load and display 3D models from a Speckle server.
- Interact with models using standard mouse controls.
- Extensions for additional functionality, such as camera control and object selection.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Additional Notes

- If you have specific instructions for using a different 3D model or any other features, you can add them under the **Usage** section.
- You can expand the **Features** section if you add more functionality to the project.
