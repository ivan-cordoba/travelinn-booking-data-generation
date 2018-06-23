# Project Name

> TravelInn Booking Module: Data Generation

## Related Projects

  - https://github.com/travelinn/Booking

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

Generate data files with:
```sh
npm start
```

Start couchdb and import data with:
```sh
npm run load_couch
```

Start postgres and import data with:
```sh
npm run load_postgres
```


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Apache CouchDB 2.1.1
- Postgres 10.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
