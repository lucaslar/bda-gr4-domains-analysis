# Dig Microservice

## What does this service do and how do to use it?

This service allows performing `dig`-requests through `http`. It does only provide one endpoint and can be queried as
follows:

`/<what to dig>` which will simply perform a `dig` request and return a result object containing the following
information:

- `answer`: Answer for the executed command
- `digged`: URL/IP that has been digged, i.e. the request param
- `timestamp`: Timestamp of the result

## Why not `whois`?

Since this service is primarily intended to be used for automized Big Data Analytics, `whois` will not be used for legal
reasons:

```
NOTICE: You are not authorized to access or query our WHOIS database through the use of high-volume, automated, electronic processes or for the purpose or purposes of using the data in any manner that violates these terms of use. The Data in the CSC WHOIS database is provided by CSC for information purposes onl
y, and to assist persons in obtaining information about or related to a domain name registration record. CSC does not guarantee its accuracy. By submitting a WHOIS query, you agree to abide by the following terms of use: you agree that you may use this Data only for lawful purposes and that under no circumstanc
es will you use this Data to: (1) allow, enable, or otherwise support the transmission of mass unsolicited, commercial advertising or solicitations via direct mail, e-mail, telephone, or facsimile; or (2) enable high volume, automated, electronic processes that apply to CSC (or its computer systems). CSC reserv
es the right to terminate your access to the WHOIS database in its sole discretion for any violations by you of these terms of use. CSC reserves the right to modify these terms at any time.
```

## Technical information

### Run this application

`dig` requires Linux which is why this service should preferably be run in the dedicated Docker container with all
required tools are installed (
see [root README](../../README.md)). Using the `docker-compose` of this project, the container is not accessible from
the outside. However, you can use the [dashboard's](../dashboard/README.md) dig terminal to test this service or start
another container with a mapped port (`-p <your port>:8088`).

### Commands for developing

The following commands are useful for developers:

- For starting the app in dev mode, run `npm run start:dev`
- For manual building, run: `npm run build`
- For starting the built application, run: `npm run start:prod`

However, if you are using Windows, the application will not run due to lack of `dig`.

## Docker Image

The dockerized version of this project builds upon:

- `node:16-alpine` (for building the application)
- `debian:stable-slim` (for running the application)

See [Dockerfile](./Dockerfile).

## License

The project's [package.json](./package.json) does contain a license: As the whole project, this service is licensed as
Attribution-NonCommercial 4.0 International (CC-BY-NC-4.0). If you are not familiar with this license, read more about
it [here](https://creativecommons.org/licenses/by-nc/4.0/).
