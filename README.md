# module-federation

## setup

- `Corepack enable`: Enable node/corepack binaries for managing package maager versions.
- `yarn set version stable`: Fetch the latest stable version of yarn using corepack.
- `yarn init -2`: Setup a yarn project
- `yarn lerna init`: Initialize the repo with lerna.
- `yarn dlx @yarnpkg/sdks vscode`: Configuration for PnP to work with VSCode, [more](https://next.yarnpkg.com/getting-started/editor-sdks). Note: `typescript` must be installed as a dev dependency.

## Application architechture

### Approach 1:

react-responsive: create responsive UI based on the media queries, screens size.

Pros

- Separation of concerns - Components are seprated based on the form factor of the device and have clear separation for implementing gesture based UI.
- Cleaner codebase, reduced risk for injecting unwarrented bugs as developemnt for mobile, desktop and tablet is now seprated.

Cons

- More code to write and maintain
- Common features need to identified and extracted into common Components. But in general, it leads to more repetition of code.

### Approach 2

Inline styles Css-in-JS - will enable prop based updates to the rendered styles.

Pros

- A single Component will be created for various form factors and styling for each Component is isolated.

Cons

- Difficult to maintain
- Higher chances of injecting unwarrented bugs for other platforms while developing.
- style optimizations all over the place using useMemo.

### Approach 3

react-native-web

Pros

- write once, run everywhere philosophy
- Should be good where native experience is required
- More emphasis on mobile app experience and same be replicated to web
- styles could be an issue but can be fixed by using react-responsive.
- Can be used for web only, cross platform apps.

Cons

- Might have to see the integration for web, all controls and APIs available for smooth developement and enabling scenarios on web.

### Conclusion

Approach 1 seems to be the best options for developing cross-platform web only app shell. Approach should be evaluated for certain MFEs integrated into the host.

## References:

- [React Native Web](https://blog.logrocket.com/complete-guide-react-native-web/)
- [React-responsive](https://blog.logrocket.com/using-react-responsive-to-implement-responsive-design/)
- https://necolas.github.io/react-native-web/docs/
