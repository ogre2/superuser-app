# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased

## [0.1.2] - 2022-05-31

### Added

- Created `<src/db>` subdirectory to house database files.
- Created the connection file to connect to MongoDB server.
- Connected app to MongoDB server.

### Changed

- Added db connection file to server file.

## [0.1.1] - 2022-05-31

### Added

- Created `<src/routes>` subdirectory for all the route handlers.
- Created the index router within the routes folder.
- Created `<src/controllers>` subdirectory for all app controllers.
- Created the index controller within the controllers folder.

### Changes

- Modified the index view to render passed message from controller.

## [0.1.0] - 2022-05-25

### Added

- `<client/views>` directory for all application views.  
- Created `<index.ejs>` file for the app index view.
- Configured the `<layout.ejs>` file for the main app layout.
- Linked all frontend dependencies to the layout file.

### Changed

- Modified res.send to res.render in `<server.js>` for root route.

## [0.0.5] - 2022-05-25

### Added

- Configured `<ejs>` as app view engine in `<server.js>` file.
- Enabled `<express.urlencoded()>`.
- Enabled `<express.json()>`.
- Enabled case sensitive routing.
- Enabled cors and helmet.
- Launched GitHub pages website here: [https://ogre2.github.io/superuser-app/](https://ogre2.github.io/superuser-app/). 

### Removed

- `</docs>` subdirectory.  

## [0.0.4] - 2022-05-25

### Added

- Installed `<colors>`.
- Created config file for app configuration code.
- Created server file with intial home router for testing.
- Launched server.

## [0.0.3] - 2022-05-25

### Added

- Installed `<dotenv>`.

### Changes

- Modified script in `<package.json.>` for nodemon.
- Moved `<dotenv>` line under [0.0.2] to [0.0.3] release.

## [0.0.2] - 2022-05-25

### Added

- Installed `<Express>`.
- Installed `<EJS>` and `<express-ejs-layouts>`.
- Installed `<Mongoose>`.
- Installed `<Bootstrap>`.
- Installed `<cors>`.
- Installed `<helmet>`.
- Installed `<jQuery>`.
- Installed `<@popperjs>`.
- Installed `<feather-icons>`.
- Installed `<aos>`.
- Installed `<animate.css>`.
- Installed `<nodemon>`.

### Changed

- Modified v0.0.1 date.

## [0.0.1] - 2022-05-25

### Added

- Added project license.
- Added project `<README>` file.
- Initialized .gitignore file for Node.
- Added `<CHANGLOG>` file.

[Unreleased]: https://github.com/ogre2/superuser-app/compare/v0.0.1...HEAD
[0.1.2]: https://github.com/ogre2/superuser-app/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/ogre2/superuser-app/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/ogre2/superuser-app/compare/v0.0.5...v0.1.0
[0.0.5]: https://github.com/ogre2/superuser-app/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/ogre2/superuser-app/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/ogre2/superuser-app/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ogre2/superuser-app/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ogre2/superuser-app/releases/tag/v0.0.1
