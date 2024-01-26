# APP TRUCO TOURNAMENT

### REQUISITOS 👇🏻

- PostgreSQL      ➡︎ instalado
- NODE version 18 ➡︎ instalado
- Docker          ➡︎ instalado

### PASOS PARA CORRER LA APP 👇🏻

### Paso 1
_Crear base de datos en POSGRESQL_

```
Abrir pgadmin4, click derecho crear una nueva DB con nombre "truco_tournament" 
```

### Paso 2
_Abrir terminal y moverse a la carpeta /api/prisma/_

```
Estando en /api/prisma ejecutar el comando: "npx prisma migrate dev --name init" 
```

### Paso 3
_Ir al directorio /api e instalar las dependencias con el siguiente comando "npm i"_

### Paso 4
_Ejecutar el comando "npm run dev" para levantar el servidor en el puerto :3000_

```
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
API listening on port: 3000
```

### Paso 5
_Moverse al directorio /client e instalar las dependencias con el comando "npm i"_

### Paso 6
_Levantar el cliente con el comando "npm run dev". Deberiamos ver algo asi:_

```
  VITE v{x.y.z}  ready in {x} ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://{IP local}:8080/
  ➜  Network: http://{IP local}:8080/
```

### Paso 7
_Ir al directorio /api y ejecutar el comando "npx prisma studio"_
_En el cliente de PRISMA, ingresar el primer usuario de tipo admin, el cual nos permitirá manejar la app_
_La ruta del cliente es "http://localhost:5555"_
_Elegimos la tabla User_
_Y cargamos los siguientes datos:_

```
full_name: admin
email: admin@gmail.com
password: $2a$10$cVDN4I4eLPuVwmWmwzcmXuiO9M3PC208QTmWCRMdFUxgs4e384Lgq
role: ADMIN
```

### Paso 8
_Chequear que en el terminal de /api este corriendo la api y que en /client este corriendo el cliente_
_Ingresar al sistema mediante el link "http://localhost:8080"_
_Los datos del usuario admin son:_

```
email: admin@gmail.com
password: Hola123.
```

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
_Abrir Swagger ingresando a: "http://localhost:3000/api_docs"_
_Todas las acciones nos van a pedir el token, asi que una vez logueado y devuelto el token, podemos ingresarlo arriba en la autorizacion y dejarlo para las siguientes request's_

### Paso 10
_Arrancar con Docker_
_Para ello es necesario tener instalado Docker y la extension del mismo en visual studio_

```
/Challenge_Fullstack_SSR (carpeta general), tiene el docker-compose.yml configurado
/api / client -> tienen sus DockerFile con sus instrucciones dentro.
```

_Ir a /Challenge_Fullstack_SSR y ejecutar el comando "docker-compose up" para crear las imagenes con las configuraciones de los DockerFiles, levantar la api y el cliente_
_Ingresar a la web app mediante el link "http://localhost:8080"_

### Paso 11
_Ya podemos ingresar con cualquier tipo de perfil, filtrar, cargar usuarios y partidos_
_Tambien podemos ver swagger con el link "http://localhost:3000/api_docs"_
