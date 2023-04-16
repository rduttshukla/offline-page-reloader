# offline-page-reloader 

A web extension for Firefox to reload the page when the connection resumes. It can have the following use cases

1. **The browser based application loads before connection resumes:** This happens mostly when you're on Wi-Fi and it takes some time to connect, but your application loads early.
2. **Automating the refresh process during intermittent connectivity issues:** This may happen when you're using a unstable internet connection and you want the data on the screen to always update when the connection resumes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

Provide instructions on how to install and set up your project. For example:

1. Clone the repo

```
git clone https://github.com/your-username/your-repo.git
```

2. Install Mozilla's web-ext package using 

```
npm install --global web-ext
```

3. Run the project using

```
web-ext run
```

4. If you want to build the project, you can do that using

```
web-ext build && mv web-ext-artifacts/auto_reload-1.0.zip web-ext-artifacts/auto_reload-1.0.xpi
```
Now, use `Ctrl` + `O` or `Cmd` + `O` on the browser to locate the `.xpi` file to install it.

## Usage

Install the extension, and the browser will automatically reload the web page when the connection becomes online.

## Contributing

You are free to open a pull request if you have any suggestions.

## License

This project is licenced under MIT Licence, the text for which is inside the LICENSE file.

## Acknowledgements

- Dashboard Free Icon: [Dashboard Free Icon - Flaticon](https://www.flaticon.com/free-icon/dashboard_10327429)


