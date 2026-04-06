# Task: Create Installation Guide

## Objective
Help users install GaasHub easily.

## File
docs/getting-started/installation.md

## Requirements

Include:

- Installation steps:
  Download setup from gaashub.com, install, sign in, connect.

- Supported platforms:
  - Linux
  - Windows
  - macOS

- Basic requirements


- Refer: Installation and startup based on following transcript of video (https://youtu.be/PVBYfcRXn4U?si=mtCrU5yjUYB_vf50):
"Hello everyone, welcome to Gassub. In this video we are going to see how to download, install and run Gassub into your system. We start by visiting gassub.com. Here you will see a download now button. Click on it, choose windows and click download. once it is installed you will see this type of message click keep and keep anywhere now it is fully downloaded let's go to your download folder you will see this type of setup app available double click on it then click next install finish your gossip app is installed and is also launched now you first have to sign in with your gmail account and you are now logged in into your gashub app for any new user or the first time user they will get hundred hours of gpu time for free moving to how to select gpu you have you can see you can you have 2 options available here i will choose the first one rtx 3070 i will click on it then i will click the connect button and if it shows green that means you are connected to the gossip gpu let's first test if the connection is working fine so we go to the command terminal here let's first check if my existing laptop have gpu or not so i will type this command nvidia smi click enter it is not recognized means i don't have any gpu in my system this is my own system but let's first type gossip keyword space and the same command press enter If you see these this type of message and also the GPU name RTX-RT sample code or demo file which you can run to test whether your gpu connection is working fine so in this path c file c folder users your name there will be a new folder by the name dot gossip that will be created once you install the app inside this folder you will see these 2 files dot cu file and dot pi file python file let's run these 2 files so first we copy this path Go here and we go to this path. So we should be in this path where these demo files are available. Now to run these files, it's very simple. Type the keyword gashub, then space and then the file name. The file name was gashubdemo.py and press enter. okay if you see this message on your screen that means you have perfectly working access of gpu available to your laptop which do not have a gpu let's run the other file which was the cu file or cuda file You see these messages getting printed on your screen. That means your GPU access is working perfectly fine. Once you are done, to disconnect the app or to stop this timer from running, click this button again and the timer will stop and you can exit the Gossip app. Thank you."



## Constraints

- Keep it simple
- Avoid unnecessary details

## Acceptance Criteria

- User can install GaasHub using this guide

