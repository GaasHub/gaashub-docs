# Your First Remote GPU Job

This tutorial will guide you through the process of running your first GPU-accelerated task on the GaasHub infrastructure. We'll start with a simple script and run it on a remote high-performance node.

## Introduction

GaasHub is designed to be the bridge between your local development environment and professional-grade GPU resources. Whether you're working from a laptop or an edge device like a Raspberry Pi, GaasHub makes remote execution feel local.

## Step-by-Step Instructions

### 1. Prerequisites

Before you begin, ensure you have the following:
-   A registered GaasHub account.
-   Access to the GaasHub [Desktop App](https://gaashub.com/download) for node management.
-   Python 3.8 or higher installed on your local machine.

### 2. Download and Setup GaasHub

Instead of a local installation, GaasHub provides a lightweight application that manages your connection.

1.  **Download**: Visit [gaashub.com](https://gaashub.com) and click the **Download Now** button.
2.  **Install**: Run the installer and sign in.
3.  **Connect**: Select a GPU from the list and hit **Connect**.
4.  **Verify**: Open your terminal and type `gaashub nvidia-smi`. If successful, you'll see a GPU report!

### 3. Create your first script

We'll use a simple "Hello World" style script that prints some basic node information.

Create a file named `first-job.py`:

```python
import platform

def main():
    print("Welcome to GaasHub!")
    print(f"📍 Executing on: {platform.node()}")
    print("-" * 20)
    print("✨ This script is running on a remote node.")

if __name__ == "__main__":
    main()
```

### 4. Run the script

Open your terminal and use the `gaashub` command to execute your script:

```bash
gaashub run first-job.py
```

## Expected Output

When the script runs successfully, your terminal should show the remote node's name instead of your local machine's name:

```text
Welcome to GaasHub!
📍 Executing on: node-01-rtx3070
--------------------
✨ This script is running on a remote node.
```

## Conclusion

You've successfully offloaded a Python task to a remote GaasHub node! This simple workflow can be extended to large-scale model training, simulation, and data processing.

For more complex examples including TensorFlow, PyTorch, and CUDA, explore our dedicated **[Examples Repository](https://github.com/gaashub/gaashub-examples)**.
