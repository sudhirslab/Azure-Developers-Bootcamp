Create a container registry
Select Create a resource > Containers > Container Registry.


In the Basics tab, enter values for Resource group and Registry name. The registry name must be unique within Azure, and contain 5-50 alphanumeric characters. For this quickstart create a new resource group in the West US location named myResourceGroup, and for SKU, select 'Basic'.

Accept default values for the remaining settings. Then select Review + create. After reviewing the settings, select Create.

When the Deployment succeeded message appears, select the container registry in the portal.


Take note of the registry name and the value of the Login server, which is a fully qualified name ending with azurecr.io in the Azure cloud. You use these values in the following steps when you push and pull images with Docker.

Log in to registry :
- Open The sample-web-app project in Visual code
- Open new terminal
    > `npm install`

    > `node index.js `

- Build Image
    > `docker build -t my-web-app:latest .`

    > `docker tag my-web-app:latest az2042025acr.azurecr.io/my-web-app:latest`

- Log in to registry
    - Before pushing and pulling container images, you must log in to the registry instance. Sign into the Azure CLI on your local machine, then run the az acr login command. Specify only the registry resource name when logging in with the Azure CLI. Don't use the fully qualified login server name.

    > `az acr login --name <registry-name>`

    Example:
    > `az acr login --name az2042025acr`

    The command returns Login Succeeded once completed.

- Push image to registry
    
    Finally, use docker push to push the image to the registry instance. Replace <login-server> with the login server name of your registry instance. This example creates the my-web-app repository, containing the my-web-app:latest image.

    > `docker push <login-server>/my-web-app:latest`

    After pushing the image to your container registry, remove the my-web-app:latest image from your local Docker environment. (Note that this docker rmi command does not remove the image from the my-web-app repository in your Azure container registry.)

    Example:
    > `docker push az2042025acr.azurecr.io/my-web-app:latest`


 - Remove Image
    > `docker rmi <login-server>/my-web-app:latest`

    Example:
    > `docker rmi az2042025acr.azurecr.io/my-web-app:latest`
