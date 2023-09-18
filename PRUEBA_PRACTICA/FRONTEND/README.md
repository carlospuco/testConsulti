# Medical Appointments

- Open directory where the repository was cloned
- Once located in the repository folder we go to `PRUEBA_PRACTICA\BACKEND\PROYECT_FRONT`
- We open the project with IDE preferably

## Development server

- Run `npm isntall` to update instances and download modules
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Running the application docker

1. Start docker deskopt **Important
2. Open the terminal in the project root.
- In the root of the project run the command 
```shell
ng build
``` 
- Then run the command 
```shell
docker build -t proyecto_front .
```
- Check image 
```shell
docker images
```
- We continue with the command to expose the container in the ports you can change them 
```shell
docker run -d -it -p 8000:80 proyecto_front
```
The project is dockerized on port 800