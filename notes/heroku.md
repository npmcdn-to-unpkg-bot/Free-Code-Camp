# Getting Started
`wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh`  
## login
`heroku login`
1. clone git repro

## Deploy App
`heroku create`
`git push heroku master`
`//open``
`heroku open`
### Logs
show events `heroku logs --tail`
### Procfile
a procfile is a text file in root dir to explicitly declare what commmand should be executed to start your app
`web: node index.js`
Procfiles can contain additonal process types. Example one might declare one for a background worker process that processes items off a queue.
### Scaling App
`heroku ps` lists info
scale up:
`heroku ps:scale web=1 //note 0 dynos will throw err`
### Running Locally
`heroku local web`
### Push Local Changes
make changes, add, commit, and `git push heroku master`
### Config Vars
heroku local will automatically set up the env based on the contents of the `.env file` in local directory. 
##### To set the config var on Heroku, execute the following:
`heroku config: set TIMES=2`
to view the config vars:
`heroku config`
### Provision a Database
### TIPS
delete all heroku apps from bash terminal:
`for app in $(heroku apps); do heroku apps:destroy --app $app --confirm $app; done`

