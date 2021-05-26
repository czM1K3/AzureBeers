# Azure beers 🍻

## Production
1. install docker
2. ```bash
   docker run -p 3000:3000 -e CAM_IP=https://example.com/beers.jpg -e LIMIT=0.5 --restart always -d --memory 500m --memory-swap 500m czm1k3/azurebeers
   ```
   or
   ```bash
   docker run -p 3000:3000 -e CAM_IP=https://example.com/beers.jpg -e LIMIT=0.5 --restart always -d --memory 500m --memory-swap 500m docker.pkg.github.com/czm1k3/azurebeers/beers
   ```

## Build:
1. ```bash
   docker build . -t azurebeers
   ```
2. ```bash
   docker run -p 3000:3000 -e CAM_IP=http://madhome.cf/beers.jpeg -e LIMIT=0.1 azurebeers
   ```

## Development:

1. rename `.env.local.example` to `.env.local` and customize values

2. ```bash
   pnpm install
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)
\
\
&nbsp;
## About:

### **How it all began?**
This project was born out of a love of beer. We love the well-brewed beer. But the thing is, when all pubs were closed in March 2020, there was no opportunity to enjoy the draft beer in the local pub. Because of this, We moved our regular Friday talks on to the Microsoft Teams.

From the beginning, It was tough, but after few meetings, we've got used to it. One of the issues and probably the toughest we've faced was the risk of not having the beer at home. The problem with drinking beer at home is that You might lose track of how much You have at home and forget to buy some. It doesn't have the same feeling when you talk with guys and drink orange juice instead of beer.

And there, finally, comes our solution. Azure Beers will keep track of how many bottles of beer you currently have at home. No more unexpected surprises of only empty bottles... With Azure Beers, You can take a look have many bottles do You have and even get notified when You are running out of beer!

### **What is the goal?**
Yap, this is a question we all ask... It will be here as soon as we know!
\
\
&nbsp;
## Todo:

- [x] welcome page
- [x] about page
- [x] navbar
