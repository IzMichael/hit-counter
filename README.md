# hit-counter

A simple website visitor counter API.

## Installation
1. Clone the repository onto your machine.
2. Start the `index.js` file.

## Usage
### Increment Counter by 1
To count a hit, make a `POST` request to `localhost:9240/hits/{YOUR PAGE ID}`. Each page will need a unique ID. You can make the ID anything you want, and it will create a new counter if you send a request with a new ID.

### Read Counter
To find the amount of hits counted, just make a `GET` request to `localhost:9240/hits/{YOUR PAGE ID}`.

© IzMichael 2022 - Licensed under Apache 2.0