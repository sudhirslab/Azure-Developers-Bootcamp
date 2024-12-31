# Azure-Developers-Bootcamp
Its a repository for hands-on projects for newbees to Azure Cloud


To set up a local development environment in **Visual Studio Code (VS Code)** to work with Azure, you'll need to install several tools and extensions. This environment will allow you to develop applications that interact with various Azure services, such as **Azure Functions**, **Azure Cosmos DB**, **Azure Blob Storage**, and more. Here's a step-by-step guide to set up your local VS Code environment to work with Azure.

---

### **Step 1: Install Visual Studio Code**

1. **Download and Install VS Code**:
   - Go to the official [Visual Studio Code download page](https://code.visualstudio.com/Download).
   - Select the version for your operating system (Windows, macOS, or Linux) and follow the installation instructions.

2. **Launch VS Code**:
   - After installation, open **Visual Studio Code**.

---

### **Step 2: Install the Azure CLI**

The **Azure Command Line Interface (CLI)** is a command-line tool that allows you to manage Azure resources. You'll use the Azure CLI to interact with Azure directly from the terminal in VS Code.

1. **Download and Install the Azure CLI**:
   - Go to the [Azure CLI installation page](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) and follow the instructions for your operating system.
   - For **Windows**: Download the **MSI installer**.
   - For **macOS**: Use Homebrew with the command:
     ```bash
     brew update && brew install azure-cli
     ```
   - For **Linux**: Use the appropriate package manager (e.g., `apt`, `yum`, `dnf`).

2. **Verify Installation**:
   After installing, open a terminal in VS Code (`Ctrl + ~`) and type the following command to verify that the CLI is installed:
   ```bash
   az --version
   ```

---

### **Step 3: Install the Azure Account Extension for VS Code**

The **Azure Account** extension allows you to log in to your Azure account directly within VS Code.

1. **Install the Azure Account Extension**:
   - Open VS Code and go to the **Extensions** view by clicking the **Extensions** icon on the left sidebar or pressing `Ctrl + Shift + X`.
   - In the search bar, type `Azure Account`.
   - Click **Install** on the `Azure Account` extension.

2. **Sign In to Azure**:
   - After installation, you will see an **Azure** icon in the left sidebar.
   - Click on the **Azure** icon and then click **Sign in to Azure**.
   - Follow the instructions to authenticate with your Azure account. A browser window will open to prompt you for login credentials.

---

### **Step 4: Install Additional Azure Extensions (Optional)**

Depending on the Azure services you plan to work with, you can install specific extensions to interact with those services. Some popular Azure extensions include:

1. **Azure Functions**:
   - Install the **Azure Functions** extension to manage and deploy Azure Functions directly from VS Code.
   - In the Extensions view, search for `Azure Functions` and install it.

2. **Azure Cosmos DB**:
   - To work with **Azure Cosmos DB**, install the **Azure Cosmos DB** extension.
   - In the Extensions view, search for `Azure Cosmos DB` and install it.
   - This extension will allow you to interact with your Cosmos DB account, create databases, and perform CRUD operations from within VS Code.

3. **Azure Storage**:
   - Install the **Azure Storage** extension to work with Azure Blob Storage, Tables, and Queues.
   - In the Extensions view, search for `Azure Storage` and install it.

4. **Azure App Service**:
   - If you plan to deploy web apps or APIs, install the **Azure App Service** extension.
   - In the Extensions view, search for `Azure App Service` and install it.

---

### **Step 5: Set Up Local Development Tools**

1. **Install .NET SDK (if working with .NET)**:
   - If you're developing applications using .NET (e.g., Azure Functions, Azure Web Apps), install the latest **.NET SDK** from the official [Microsoft .NET download page](https://dotnet.microsoft.com/download).
   - To check if it's installed correctly, open the terminal in VS Code and run:
     ```bash
     dotnet --version
     ```

2. **Install Node.js (if working with JavaScript/TypeScript)**:
   - If you're working with Azure Functions in **JavaScript** or **TypeScript**, install **Node.js** from the [Node.js official website](https://nodejs.org/).
   - To verify the installation, run:
     ```bash
     node --version
     ```

3. **Install Python (if working with Python)**:
   - If you're working with **Azure Functions** or other Azure services in Python, install **Python** from the [official Python website](https://www.python.org/downloads/).
   - To verify the installation, run:
     ```bash
     python --version
     ```

4. **Install Docker (if working with containers)**:
   - If you're working with **Azure Containers** or **Azure Kubernetes Service (AKS)**, you'll need Docker.
   - Install Docker from the [Docker website](https://www.docker.com/products/docker-desktop).
   - Verify the installation:
     ```bash
     docker --version
     ```

---

### **Step 6: Create and Manage Azure Resources from VS Code**

1. **Create Azure Resources**:
   - Open the **Azure** panel by clicking on the **Azure** icon in the sidebar.
   - Click on the **+** icon next to **Resource Groups** or **Storage Accounts**, etc., to create new resources directly from VS Code.
   - For example, you can create an **Azure Function**, **Cosmos DB**, or **Blob Storage** by following the prompts after selecting the appropriate option.

2. **Deploy to Azure**:
   - If you're working with Azure Functions or Web Apps, you can deploy your application directly to Azure from within VS Code.
   - Right-click on the project folder or use the **Deploy to Azure** option from the command palette (`Ctrl + Shift + P`).
   - You’ll be prompted to sign in (if not already done) and select the **Azure Subscription** and **Resource Group** where you want to deploy.

---

### **Step 7: Run and Test Azure Functions Locally**

1. **Create an Azure Function (for example, using .NET)**:
   - Open the command palette (`Ctrl + Shift + P`), and type `Azure Functions: Create New Project`.
   - Choose the runtime (e.g., **.NET Core** or **JavaScript**).
   - Select a template (e.g., **HTTP trigger** or **Timer trigger**).
   - VS Code will create the necessary files for an Azure Function.

2. **Run Locally**:
   - Once your function is created, open the terminal in VS Code and run:
     ```bash
     func start
     ```
   - The Azure Functions runtime will start locally, and you can test the function from your local machine.

3. **Debugging Locally**:
   - Set breakpoints in your function code and run it in debug mode directly from VS Code using the **Run and Debug** panel (press `F5` or click the **Run** button).

---

### **Step 8: Manage Azure Resources with Azure CLI**

You can use the **Azure CLI** to manage resources directly from the terminal in VS Code.

1. **Login to Azure CLI**:
   - In the terminal, log in to Azure using the command:
     ```bash
     az login
     ```

2. **Create Resources**:
   - For example, to create a new Cosmos DB account via the Azure CLI:
     ```bash
     az cosmosdb create --name mycosmosdbaccount --resource-group MyResourceGroup --kind GlobalDocumentDB --locations regionName=EastUS
     ```

3. **View Resources**:
   - List all the Cosmos DB accounts:
     ```bash
     az cosmosdb list --resource-group MyResourceGroup
     ```

4. **Manage Resources**:
   - You can create, update, and delete resources like Storage Accounts, Databases, and more using the CLI.

---

### **Step 9: Test and Deploy to Azure**

- Once you're ready, you can deploy your app or function to Azure directly from VS Code using the **Azure Functions** or **Azure App Service** extension.
- You can also use the **Azure CLI** to deploy containerized apps or use **Docker** to deploy to Azure Kubernetes Service (AKS).

---

### **Conclusion**

You have now set up your **local development environment in Visual Studio Code** to work with **Azure**. With this setup, you can:
- Manage Azure resources directly from VS Code using the **Azure CLI** and extensions.
- Develop and deploy **Azure Functions**, **Web Apps**, **Cosmos DB**, **Blob Storage**, and other Azure services.
- Test your applications locally and deploy them directly to Azure with ease.

This setup allows you to be more productive and streamline the development-to-deployment process with Azure.