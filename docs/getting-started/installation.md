# Installation Guide

Setting up GaasHub is a simple, one-time process. Unlike traditional CLI tools, GaasHub provides a dedicated desktop application that manages your remote GPU connections seamlessly.

## Step 1: Download the GaasHub App

1. Visit the official website at [gaashub.com](https://gaashub.com).
2. Click the **Download Now** button.
3. Choose the version for your operating system (Windows, macOS, or Linux).

## Step 2: Install and Launch

### Windows
- Run the downloaded `.exe` setup file.
- Follow the installation wizard (Next > Install > Finish).
- The app will launch automatically once installed.

### macOS & Linux
- Follow the standard installation procedure for your system (DMG for macOS, or the specified package for Linux).

## Step 3: Sign In

When you launch the app for the first time:
- Click the **Sign In** button.
- Log in using your Google account.
- **Bonus**: New users automatically receive **100 free GPU hours** to get started!

## Step 4: Connecting to a GPU

1. In the GaasHub app, you will see a list of available GPU nodes (e.g., **RTX 3070**).
2. Click the **Connect** button next to your chosen node.
3. Wait for the connection indicator to turn **green**. This means your terminal is now bridged to the remote GPU.

## Step 5: Verify the Connection

Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
gaashub nvidia-smi
```

If the installation was successful, you will see the NVIDIA driver information and the model of the remote GPU (e.g., NVIDIA GeForce RTX 3070).

---

### Supported Platforms
- **Windows**: Full support for `.exe` installer.
- **Linux**: Optimized for Ubuntu and other major distributions.
- **macOS**: Support for Intel and Apple Silicon (M1/M2/M3) chips.

### System Requirements
- An active internet connection.
- Python 3.8 or higher installed on your local machine (for running scripts).
- A GaasHub account (Google Sign-In).
