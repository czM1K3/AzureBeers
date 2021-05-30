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
   docker run -p 3000:3000 -e CAM_IP=https://example.com/beers.jpg -e LIMIT=0.5 azurebeers
   ```

## Development:

1. Install C++ development kit (required by TensorFlowJS)

   Debian/Ubuntu:
   ```bash
   sudo apt install build-essential
   ```
   Arch/Manjaro
   ```bash
   sudo pacman -S base-devel
   ```

2. Rename `.env.local.example` to `.env.local` and insert your values

3. Install dependencies
   ```bash
   pnpm install
   ```
4. Run dev
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)
\
\
&nbsp;
## About:

### **How it all began?**
The story of starting this project isn't something exciting, we have no fairy tale as the background of doing this particular thing. We all love to learn and discuss new technologies and there is no better drink like a beer for these long talks over all the stuff that is happening in tech. So this project is a kind of mixture combining both tech and beer. For Us, this project was a great but also fun way to learn how to use all the Cloud and Machine Learning tools, which may be useful knowledge for our future projects.

### **What is the goal?**
That is a great question! It may look like it's just a weird mistake, a project that has no sense in making and developing. 
We don't live in illusion, this won't be the next Nobel prize thing... It's more like a maker project.

The reason for our effort is, that AI is most of the time shown as something complex, something that is meant only for nerds and experts. 
We want to change that view, new technologies, which AI definitely is, are super exciting. 
But applications like self-driving cars or data analysis are for most people too distant topics. 
We believe that AI is excellent to be used in highly complex cases as well as in some small and fun hobby projects.

With AzureBeers, we want to show off that AI isn't a thing for a few chosen, it's a tool that could be used for a wide variety of purposes, 
that anyone could benefit out of it and Our ultimate goal would be if it will help anyone, even a single person, 
to get more used to working with AI and get comfortable about this another industrial revolution tool.
\
\
&nbsp;
## Todo:

- [x] welcome page
- [x] about page
- [x] navbar
- [x] drink a few beers during development
