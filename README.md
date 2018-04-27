# Setup

First, checkout this repo with submodules:

```
git clone --recurse-submodules -j8 git@github.com:moovweb/moov-pwa.git
```

Then install dependencies using yarn 1.6 or later:

```
yarn install
```

# Running

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

# Updating

Since this project uses submodules, we recommend creating an alias "get" that fetches all submodules

```
git config --global alias.get '!f(){ git pull --rebase "$@" && git submodule update --init --recursive; }; f'
```

This, instead of running `git pull` to fetch the latest, run `git get`.  Any additional arguments you provide will be passed to git pull.

```
git get
```
