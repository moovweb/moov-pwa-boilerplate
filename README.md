# Setup

To work around a bug in MoovJS
 ([PLATSRE-146](https://moovweb.atlassian.net/browse/PLATSRE-146)) that
 causes static assets to be served slowly in development, we
 use nginx to serve the app code.

First install nginx:

```
brew install nginx
```

Then, open /usr/local/etc/nginx/nginx.conf and comment out or delete
the server block of configuration that looks like this:

```
server {
  listen       8080;
  server_name  localhost;

  # Many more lines follow...
}  
```

so it becomes

```
# server {
#   listen       8080;
#  server_name  localhost;
#  
#  # Many more lines follow...
# }  
```

Then, run the following in terminal:

```
npm i -g yarn
yarn install
npm run deploy:nginx
sudo brew services restart nginx
```

# Running

```
npm start
```

This starts moov_server and webpack dev server.  

Go to http://mlocal.www.pepboys.com/


# API

/categories/accessories:

```
{
  subcategories: [{
    text: (string),
    image: (string:url),
    url: (string:path)
  }],
  text: (string), // seo text at the bottom
  youMayAlsoLike: [{
    text: (string)
    image: (string:url),
    url: (string:path)
  }]
}
```

/categories/interior-accessories:
```
{
  subcategories: [{
    text: (string),
    image: (string:url),
    url: (string:path)
  }],
  text: (string), // seo text at the bottom
  youMayAlsoLike: [{
    text: (string)
    image: (string:url),
    url: (string:path)
  }]
}
```

/subcategories/ash-trays:
```
{
  products: [{
    text: (string),
    image: (string:url),
    url: (string:path),
    ... // reviews, sku, etc..
  }],
  text: (string), // seo text at the bottom
  alsoViewed: [{
    text: (string)
    image: (string:url),
    url: (string:path)
  }]
}
```

/products/:id
```
{
  partNo:
  sku:
  image:
  price:
  description:,
  ...
}

```
