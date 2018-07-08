# Commands
## Help
Lists all commands available
```bash
$ node app.js --help
```
![Output of command](https://lh3.googleusercontent.com/-GVYQestcvIQ/W0JUTLTBQCI/AAAAAAAAj6o/7NoavCrGPcUCMy90OGhn7Jr5Dj5HuGqOACHMYCw/s0/Code_2018-07-08_15-13-32.png)

### Run `node app.js [command] --help` for help on a given command

## Add note
```bash
$ node app.js add -t "Title of note" -b "Body of note"
```
Arg `-title` alias `-t`: **required**

Arg `-body` alias `-b`: **required**

## Read note
```bash
$ node app.js read -t 'Title of note'
```
Arg `-title` alias `-t`: **required**

## Remove note
```bash
$ node app.js remove -t "Title of note"
```
Arg `-title` alias `-t`: **required**

## List all notes
```bash
$ node app.js list
```