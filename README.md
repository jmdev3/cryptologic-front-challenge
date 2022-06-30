## Deployed URL

https://cryptologic-front-challenge.vercel.app/

https://cryptologic-front-challenge.vercel.app/transactions/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3

https://cryptologic-front-challenge.vercel.app/stats

## Build and run with docker

```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

docker permission error fix if necessary

```bash
sudo usermod -a -G docker $USER
newgrp docker
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Build

```bash
npm run build
```

## Linter

```bash
npm run lint
npm run lint:fix
```

Linter is integrated with husky (pre-commit), prettier and also with vscode to run on-save following the steps below:

1- Create `.vscode` directory
2- Create `settings.json` inside of it
3- Paste the following:

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Stack of technologies

- [x] NextJS
- [x] Typescript
- [x] Mobx & Mobx State Tree
- [x] Styled Components
- [x] ESLint & prettier
- [x] AntDesign
