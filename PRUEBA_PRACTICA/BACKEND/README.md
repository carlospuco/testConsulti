# GitRepository

- Clone the repository with the command
```
git clone https://gitlab.com/15septiembre2023consulti/carlos-alexander-puco/carlos-puco.git
```

# Running the application locally-dev
- Open directory where the repository was cloned
- Once located in the repository folder we go to `PRUEBA_PRACTICA\BACKEND\PROYECT_BACK`
- We open the project with IDE preferably
- Create the connection to the database
- Run pgADMIN
- Create a database with the name: appointments
- We run the file `CitasApplication.java`
- The application is launched at http://localhost:5000
    - If you want to try importing the postam file that is in the `DOC` folder

# Running the application docker

- Start docker desktop **Important**.
- Make sure the Dockerfile is in the root of the project
- Make sure that the docker.compose.yml file is in the root of the project. 
- Place the following file in the target folder of the project, link in the following link
    ```fetch
    https://drive.google.com/drive/folders/1noiltcZNK6aWiMq2-12TmGfbc8Bmqtb0?usp=sharing
    ```
- In the root of the project run to raise the project:
    - `docker-compose up`
    - The project will be raised on port 5000.