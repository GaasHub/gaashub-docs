# Quickstart Guide

Enable your first GaasHub job in just a few minutes.

## Step 1: Install GaasHub

To get started, visit [gaashub.com](https://gaashub.com) and download the GaasHub application for your operating system. Once downloaded, run the installer and follow the instructions.

### Sign In & Connect

1.  Launch the app and sign in using your Google account. (New users automatically receive 100 free GPU hours!)
2.  Choose a GPU (e.g., **RTX 3070**) and click the **Connect** button.
3.  Once the indicator turns green, you are connected.

Verify the connection by running this in your terminal:
```bash
gaashub nvidia-smi
```
If you see information about an RTX GPU, you're ready!

## Step 2: Create your Hello World script

Create a file named `hello.py` with the following content:

```python
import platform

def main():
    print("Hello from GaasHub GPU")
    print("-" * 30)
    print(f"📍 Node:   {platform.node()}")
    print(f"🐧 System: {platform.system()} {platform.release()}")
    print("-" * 30)
    print("✨ Your GaasHub setup is active and ready for tasks!")

if __name__ == "__main__":
    main()
```

## Step 3: Run the job

Use the `gaashub` command to run your script on a remote GPU node:

```bash
gaashub run hello.py
```

## Step 4: Expected Output

You should see something similar to this:

```text
Hello from GaasHub GPU
------------------------------
📍 Node:   gpu-node-01
🐧 System: Linux 5.15.0-generic
------------------------------
✨ Your GaasHub setup is active and ready for tasks!
```

Congratulations! You've successfully run your first remote job with GaasHub.
