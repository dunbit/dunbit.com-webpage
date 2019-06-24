+++
title = "Technical Due diligence"
date = "2019-6-15T21:49:20+02:00"
description = "Technical due diligence steps"
tags = ["assesment", "due-diligence"]
categories = ["assesment"]
author = "Grega"
image = "img/blog/blog-post-1.jpg"
+++

## Technical Due Diligence

### What is Technical Due Diligence

If you work in an IT you have most probably experienced a Technical Due diligence check or assesment of your company. 

It is a process of evaluation of you Company's:
* Technology
* Technical personel
* Way of work and organization of the teams
* Assesment of the risks, weaknesses of the technology and the team

### When Technical Due Diligence happens?

This usually hapens when:
* Company is being sold 
* Company got a new investing partner 
* Large contract/partnership is about to happen
* Your Comany is being merged into large company

You as an CTO, IT Architecht or Technical Lead can find yourself either on examination side or your team/company is being examined. I will try to describe the 

### STEP-1 : Hugo installation

Check this link below for install hugo on your computer.
[hugo install documentation](https://gohugo.io/getting-started/installing/)

### STEP-2 : Create your project

Hugo provides a `new` command to create a new website.

```
hugo new site <new_project>
```

### STEP-3 : Install the theme
Run this command
```
hugo new site airspace-hugo
```
and then go to the themes folder inside of airspace-hugo folder. You can also use this command ```cd airspace-hugo/themes``` for going to this folder.
Then run the command 
```
git clone git@github.com:themefisher/airspace-hugo.git
```

Alternatively, you can [download the theme as .zip](https://github.com/themefisher/airspace-hugo/archive/master.zip) file and extract it in the `themes` directory

After that you need to go to the `airspace-hugo/exampleSite` folder and copy or cut all the elements, and now go back to the root folder and paste it here.

open the command prompt again and run `cd ../` command for go back to the root folder.

### STEP-4 : Host locally

Launching the website locally by using the following command:

```
hugo serve
```

Go to `http://localhost:1313`

Or you can check this video documentation for installing this template:
{{< youtube 1wKDqma9Hl0 >}}

### STEP-5 : Basic configuration

When building the website, you can set a theme by using `--theme` option. However, we suggest you modify the configuration file (`config.toml`) and set the theme as the default.

```toml
# Change the default theme to be use when building the site with Hugo
theme = "airspace-hugo"
```

### STEP-6 : Create your first content pages

```
hugo new blog/post-name.md
```

### STEP-7 : Build the website

When your site is ready to deploy, run the following command:

```
hugo

# You can also create a minified version by using this command:
hugo--minify

```

A `public` folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.