# Moov PWA Boilerplate

For detailed documentation, see the [Moov PWA Docs](https://pwa.moovweb.com).

## Setup

First, install dependencies using yarn 1.6 or later:

```
yarn install
```

## Running

```
yarn start
```

This starts moov_server and webpack dev server.  Doing so requires `sudo`, so you'll be asked for your password.
Once the initial build is done, your browser will open automatically, but the moovjs build might not be done yet,
so you may see an error.  Wait a few seconds to see this message in console and then reload your browser:

```
Browserified ...
```

Go to http://mlocal.www.moovweb.com/

## Windows

To run this project on Windows:

1. Add the following to C:\Windows\System32\drivers\etc:

```
127.0.0.1 mlocal.www.moovweb.com
```

2. Start Command Prompt as administrator
3. run `yarn start:windows`

## Creating a new Project

### Clone the repo into a directory

```
git clone git@github.com:moovweb/react-storefront-boilerplate.git <project-name>
cd <project-name>
```

### Local Config

Update the host_map in moov_config-local.json to use the customer's domain name.  Replace `domain.com` in the code below with the customer's actual domain name.  The customer will need to create a DNS entry for the "dev-origin" subdomain.

```
"host_map": [
  "domain.com => dev-origin.domain.com"
]
```

### Development Server Config

Update the host map in moov_config-dev.json.  Here we typically use dev.domain.com.  **Make sure that the subdomain you use is not already in use by the customer.**

```
"host_map": [
  "pwa-dev.domain.com => dev-origin.domain.com"
]
```

### Production Server Config

Update the host map in moov_config-prod.json.  The customer will need to create a DNS entry for the origin subdomain.

```
"host_map": [
  "domain.com => origin.domain.com"
]
```

### Package.json

Edit the name in package.json.  Use `<customer>-pwa`.

### Moov Console

Create the development environment in https://console.moovweb.com/:

1. Click "Create New Project"
2. Enter a name and select "Single Domain".  We suggest `<customer>-pwa-dev`
3. Select "Project Settings"
4. Select "Internal Config"
5. Set "Service Level" to "Enterprise Production"

### GitHub

Create a new repo in [Moovweb Projects](https://github.com/organizations/moovweb-projects/repositories/new) and copy the SSH url.  We suggest naming the repo `<customer>-pwa`.

In the repo settings, under "Collaborators and Teams" add "Engineering Team" and grant write access.

In the root of your local clone, run the following to re-initialize the git repo and push it up to GitHub:

```
rm -rf .git
git init
git add .
git commit -am "initial commit"
git remote add origin (paste SSH git url from repo)
git push -u origin master
```

### Circle CI

Open .circleci/config.yml.  Search for "moov deploy" and update the command to use the correct environment name:

```
moov deploy <customer>/<customer>-pwa-dev
```

Commit and push to origin

The configure the project in [Circle CI - Moovweb Projects](https://circleci.com/gh/moovweb-projects):

1. Click "Add Projects"
2. Find your repo and click "Set Up Project"
3. Edit the project settings and select "Environment Variables".
4. Add your moov console credentials as MOOV_EMAIL and MOOV_PASSWORD.
5. Select "Overview", then "Start Building" at the bottom.

Lastly, start a build and ensure that it succeeds.


