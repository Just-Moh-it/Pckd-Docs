---
sidebar_position: 1
slug: "/using-pm2"
---

# PM2

PM2 is a process management tool that keeps NodeJS processes running, and automatically restarts them when the server restarts (if configured).

The following sections guide you through how to setup PM2, and how to configure Pckd with it.

# Install PM2

[PM2](https://pm2.io) could be installed using `npm`, globally. To install PM2, use the following command:

```bash
npm i -g pm2
```

This should install PM2. To verify, type `pm2 -v` in the terminal, The PM2 installation version should be visible.. [More Info about PM2](https://www.npmjs.com/package/pm2)

## Verify Pckd installation

First, run the app normally to test if it is working without errors. To do this, run

```bash
npm run start
```

<details>
  <summary>Expected output</summary>
  <div>
    <div>The following logs would be printed on the screen</div>
    <br/>

```bash
> pckd@1.0.0 start
> export NODE_ENV=production && cd server && npm start


> api@1.0.0 start
> npm run dev


> api@1.0.0 dev
> nodemon src/.

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/.`
🚀 Server started at http://localhost:4000/graphql
```

  </div>
</details>

Now, stop the server (press `Ctrl+C`)

## Create a PM2 Process

To run 'npm start' using PM2, use the following command

```bash
pm2 start "npm run start" --name Pckd
```

<details>
  <summary>Expected Output</summary>
  <div>
    The following should be logged:
    <br />

```bash
[PM2] Starting /usr/bin/bash in fork_mode (1 instance)
[PM2] Done.
┌────┬─────────────┬──────────┬──────┬─────────┬──────────┬──────────┐
│ id │ name        │ mode     │ ↺    │ status  │ cpu      │ memory   │
├────┼─────────────┼──────────┼──────┼─────────┼──────────┼──────────┤
│ 1  │ Pckd        │ fork     │ 0    │ online  │ 0%       │ 520.0kb  │
└────┴─────────────┴──────────┴──────┴─────────┴──────────┴──────────┘
```

  </div>
</details>

The above command should start the `Pckd` process. Now you could close the terminal, and Pckd would still be running. However, it is recommended to configure it to start on restart as well.

## Configure PM2 to restart Pckd on system reboot

To automatically restart Pckd on system reboot, PM2 has to set up a cron job. To register PM2's cron job, run the following command

```bash
pm2 startup
```

<details>
<summary>Expected output</summary>
<div>

```bash
                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Init System found: launchd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/Users/<user>/.local/share/nvm/v16.14.2/bin /Users/<user>/.local/share/nvm/v<node_version>/lib/node_modules/pm2/bin/pm2 startup launchd -u <user> --hp /Users/<user>
```

</div>
</details>

Now, to make PM2 persist the current application running start, run

```bash
pm2 save
```

If everything goes successfully, Pckd is configured to restart on system reboots and will run in the background
