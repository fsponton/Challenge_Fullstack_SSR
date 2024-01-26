# APP TRUCO TOURNAMENT

REQUISITOS:

- PostgreSQL instalado
- NODE version 18 instalado
- Docker instalado

### Paso 1
_Crear base de datos en POSGRESQL_

```
Abrir pgadmin4, click derecho crear una nueva DB con nombre "truco_tournament" 
```

### Paso 2
_Una vez creada la base de datos, abrir un terminal de visual studio y moverse a la carpeta /api/prisma/_

```
Estando en /api/prisma ejecutar el comando: "npx prisma migrate dev --name init" 
```

### Paso 3
_Moverse al directorio /api e instalar las dependencias con el siguiente comando_

```
npm i
```

### Paso 4
_Si todo esta ok, ejecutamos el comando "npm run dev" y deberia levantar el servidor en el puerto :3000_

```
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
API listening on port: 3000
```

### Paso 5

_Moverse al directorio /client  e instalar las dependencias con el comando "npm i"_

### Paso 6
_Levantar el cliente con el comando "npm run dev"_

_Deberiamos ver algo asi, pero con nuestras IP's_

```
  VITE v5.0.12  ready in 1059 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.56.1:8080/
  ➜  Network: http://192.168.1.5:8080/
  ➜  Network: http://172.17.192.1:8080/
```

# Paso 7
_Para poder hacer acciones, es necesario loguearse y para eso es necesario crear a mano un usuario admin. Como no se puede desde de la app porque inicia sin datos, lo vamos a crear a mano_

_Nos dirigimos al directorio /api y ejecutamos el comando "npx prisma studio"_

Nos va a abrir en el browser el cliente de PRISMA para ver las tablas de las entidades, de esta manera ingresaremos el primer usuario admin que nos permitira manejar la app.

la ruta del cliente es "http:localhost:5555"

_Elegimos la tabla User_

Y cargamos los siguientes datos:

```
full_name: admin
email: admin@gmail.com
password: $2a$10$cVDN4I4eLPuVwmWmwzcmXuiO9M3PC208QTmWCRMdFUxgs4e384Lgq
role: ADMIN
```


# PASO 8
Revisamos que en el terminal de /api este corriendo la api y revisamos que en /client este corriendo el cliente

Con esto ya podemos ingresar al sistema mediante el link "http:localhost:8080".

Los datos del primer usuario admin son:

email: admin@gmail.com
password: Hola123.

# El sistema permite las siguientes acciones

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


# PAS0 9
_Si queremos ver swagger tenemos que ingresar al link "http:localhost:3000/api_docs"_

Todas las acciones, nos van a pedir el toker, asi que una vez logueado y devuelto el token podemos ingresarlo arriba en la autorizacion y dejarlo logueado para las siguientes request's


# PASO 10
_Arrancar con docker_

Para ello es necesario tener instalado docker, como se menciono en los requisitos y tener instalada la extension de docker en visual studio.

/CHALLENGE_FULSTACK_SSR (carpeta general), tiene el docker-compose.yml configurado
/api / client -> tienen sus DockerFile con sus instrucciones dentro.


Estando en /CHALLENGE_FULLSTACK_SSR ejecutamos el comando "docker-compose up", este comando crea las imagenes automaticamente con las configuraciones de los DockerFiles y levanta el sistema. 

Una vez levantado el sistema se puede ingresar a la app mediante el link http:localhost:8080


# Paso 11

Con la aplicacion corriendo en docker ya podemos ingresar con cualquier tipo de perfil, Filtrar, cargar usuarios, partidos. Tambien podemos ver swagger con el link "http://localhost:3000/api_docs"


