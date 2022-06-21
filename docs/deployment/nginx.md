---
sidebar_position: 1
slug: "/using-nginx"
---

# Using Nginx

This guide assumes that you have used the [installation from code](/docs/install-from-code) or [release](/docs/install-from-release) to install the app.

Start the web server using PM-2, as instructed [here](/docs/using-pm2)

Now, install nginx using your favourite package manager

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ubuntu" label="Ubuntu" default>

```bash
sudo apt install nginx -y
```
  </TabItem>
  <TabItem value="mac" label="Mac">

For Mac, <a href="https://brew.sh/">Install Homebrew</a> and run:

```bash
brew install nginx
```
  </TabItem>
</Tabs>
<hr />
````

Now, depending upon your operating system, navigate to the nginx serving configurations. Add the following

```bash title="/etc/nginx/sites-available/default"
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://127.0.0.1:4000/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_pass_header  Set-Cookie;

        proxy_set_header   Host               $host;
        proxy_set_header   X-Real-IP          $remote_addr;
        proxy_set_header   X-Forwarded-Proto  $scheme;
        proxy_set_header   X-Forwarded-For    $proxy_add_x_forwarded_for;
    }
}
```
