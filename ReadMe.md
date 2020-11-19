## Welcome to Team W4Y, Front Folder

```
Below you will find the needed dependencies as well as warnings to help guide you through the specifics of our project
```

## Dependencies

```impt
"   @testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "bootstrap": "^4.5.0",
    "cors": "^2.8.5",
    "mobx": "^5.15.4",
    "mobx-react": "^6.2.3",
    "node-sass": "^4.14.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "react-social-login-buttons": "^3.1.0",
    "reactstrap": "^8.5.1"
    "axios": "^0.19.2",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
```

## Installation

```yarn
use either yarn or npm to install the following
AXIOS
@SendGrid/mail
Express
DotEnv
mobx

yarn install

In case of specific ones use:

yarn add AXIOS
yarn add @sendGrid/mail
yarn add express
yarn add dotenv
yarn add nodemon
yarn add mobx
```

## Usage

```specifics
To start each folder which is ready to all merge, we separated it for convenience
cd into each specific folder

and open 3 separate terminals / one if all merged

yarn start
for all 3

Please configure your own api key for the mailing service in the dotenv file
It is inside the server folder under survey-result folder.

To start the express server which helps fetch from localhost 4000 to send the reciepient to sendgrid
please cd into server folder under survey-result and start it using:

nodemon index.js

To access server run 'nodemon index.js' then click here: http://localhost:4000/

```

## Installation

```
Important note, I hid the API key for sendgrid in dotenv. However when the company uses this, they should make their own personal business account which will then give them their own api key.

Additional note: Please allow the server on EC2 to host on proxy: localhost 3000 or picked port just in case of CORS policy exception.
```

## Template used for dashboard - permissions were given by original creator - Creative Tim

Not owned or created by members of team W4Y
However we intended to modify and get this connected to our backend and use Rechart to show data from the backend. We ran out of time unfortunately.

## File Structure for dashboard

Within the download you'll find the following directories and files:

```
black-dashboard-react
.
├── package.json
├── LICENSE.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Map.js
        ├── Notifications.js
        ├── Rtl.js
        ├── TableList.js
        ├── Typography.js
        └── UserProfile.js
```


## Contributing

```Makers

Jeremy Bayangos
Julia Tseng
Eduardo Noguera

```
