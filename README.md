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

