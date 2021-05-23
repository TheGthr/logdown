# logdown

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Firebase Hosting

Install Firebase CLI and init the project.

```sh
npm install -g firebase-tools
firebase init
```

Then modify `firebase.json` as is:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Then, build the project and deploy it with firebase:

```sh
npm run build
firebase deploy --only hosting # --only can be obmitted
```

