---
sidebar_position: 2
slug: "/enable-ssl"
---

# Enable SSL

To add an SSL certificate to the nginx/apache domain, create a new SSL certificate, or use your existing one.

## With Let's Encrypt

To generate a Let's Encrypt SSL Certificate:

First, install certbot. Refer to [these docs](https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-16-04#step-1-installing-certbot)

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="nginx" label="Nginx" default>

```bash
sudo certbot --nginx -d <Your domain here>
```

  </TabItem>
  <TabItem value="apache" label="Apache">

```bash
sudo certbot --apache -d <Your domain here>
```
  </TabItem>
</Tabs>
<hr />
````

Then agree to the T&C, verify domain ownership, etc.
