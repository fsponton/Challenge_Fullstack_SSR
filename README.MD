# APP TRUCO TOURNAMENT

### REQUISITOS 👇🏻

- PostgreSQL      ➡︎ instalado
- NODE version 18 ➡︎ instalado
- Docker          ➡︎ instalado

### PASOS PARA CORRER LA APP 👇🏻

### Paso 1
Crear base de datos en POSGRESQL


Abrir pgadmin4, click derecho crear una nueva DB con nombre "truco_tournament" 


### Paso 2
Abrir terminal y moverse a la carpeta /api/prisma/


Estando en /api/prisma ejecutar el comando: "npx prisma migrate dev --name init" 


### Paso 3
Ir al directorio /api e instalar las dependencias con el siguiente comando "npm i"

### Paso 4
Ejecutar el comando "npm run dev" para levantar el servidor en el puerto :3000

```
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
API listening on port: 3000
```

### Paso 5
Moverse al directorio /client e instalar las dependencias con el comando "npm i"

### Paso 6
Levantar el cliente con el comando "npm run dev". Deberiamos ver algo asi:

```
  VITE v{x.y.z}  ready in {x} ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://{IP local}:8080/
  ➜  Network: http://{IP local}:8080/
```

### Paso 7
Ir al directorio /api y ejecutar el comando "npx prisma studio"
En el cliente de PRISMA, ingresar el primer usuario de tipo admin, el cual nos permitirá manejar la app
La ruta del cliente es "http://localhost:5555"
Elegimos la tabla User
Y cargamos los siguientes datos:

```
full_name: admin
email: admin@gmail.com
password: $2a$10$cVDN4I4eLPuVwmWmwzcmXuiO9M3PC208QTmWCRMdFUxgs4e384Lgq
role: ADMIN
```

### Paso 8
Chequear que en el terminal de /api este corriendo la api y que en /client este corriendo el cliente
Ingresar al sistema mediante el link "http://localhost:8080"
Los datos del usuario admin son:


email: admin@gmail.com
password: Hola123.


# El sistema permite las siguientes acciones 👇🏻

USUARIOS ADMIN
- Agregar Matchs
- Agregar Usuarios 
- Filtrar por fecha y usuario
- Filtrar por usuario

USUARIOS CONSULTANT
- Filtrar por fecha y usuario
- Filtrar por usuario

USUARIOS PLAYER
- Ver todos sus partidos, con estadisticas de total, wins y loss
- Filtrar por fecha

### Paso 9
Abrir Swagger ingresando a: "http://localhost:3000/api_docs"
Todas las acciones nos van a pedir el token, asi que una vez logueado y devuelto el token, podemos ingresarlo arriba en la autorizacion y dejarlo para las siguientes request's

### Paso 10
Arrancar con Docker
Para ello es necesario tener instalado Docker y la extension del mismo en visual studio


/Challenge_Fullstack_SSR (carpeta general), tiene el docker-compose.yml configurado
/api / client -> tienen sus DockerFile con sus instrucciones dentro


Ir a /Challenge_Fullstack_SSR y ejecutar el comando "docker-compose up" para crear automaticamente las imagenes con las configuraciones de los DockerFiles, levantar la api y el cliente
Ingresar a la web app mediante el link "http://localhost:8080"

### Paso 11
Ya podemos ingresar con cualquier tipo de perfil, filtrar, cargar usuarios y partidos
Tambien podemos ver swagger con el link "http://localhost:3000/api_docs"
