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

### Paso 3_A
Ir al directorio /api e instalar las dependencias con el siguiente comando "npm i"

### Paso 3_B
Ir al directorio /api_swagger e instalar dependencias con el siguiente comando "npm i"

### Paso 4_A
Ejecutar el comando "npm run dev" en /api para levantar el servidor de servicios en localhost:3000

```
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
API listening on port: 3000
```
### Paso 4_B
Ejecutar el comando "npm run dev" en /api_swagger para levantar el servidor de swagger en localhost:4000

```
[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
API_SWAGGER listening on port: 4000
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
En el cliente de PRISMA, ingresar el primer usuario de tipo admin, el cual nos permitirá manejar la app.
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
_Chequear que los las aplicaciones esten corriendo en las terminales de /api y /client para poder utilizar el sistema_

Ingresar al sistema, cliente,  mediante el link "http://localhost:8080"

Los datos del usuario admin son:

email: admin@gmail.com
password: Hola123.


# El sistema permite las siguientes acciones 👇🏻

USUARIOS ADMIN
- Agregar Matchs
- Agregar Usuarios 
- Filtrar por fecha y usuario, ver estadisticas total, win y loss
- Filtrar por usuario, ver estadisticas total, win y loss

USUARIOS CONSULTANT
- Filtrar por fecha y usuario, ver estadisticas total, win y loss
- Filtrar por usuario, ver estadisticas total, win y loss

USUARIOS PLAYER
- Ver todos sus partidos, con estadisticas de total, wins y loss
- Filtrar por fecha

### Paso 9
Abrir swagger: moverse a /api_swagger/ y ejecutar el comando: npm run dev.

La direccion de la documentacion es:  "http://localhost:4000/api_docs" (recordar: para que funcionen las request's tiene que estar corriendo la api)

Todas las acciones nos van a pedir el token, una vez logueado y devuelto el token, podemos copiarlo, agregarlo dejarlo seteado arriba en la autorizacion para las siguientes request's


### Paso 10
_DOCKER_
Para ello es necesario tener instalado Docker y la extension del mismo en visual studio

Tambien es necesario hacer un cambio en el archivo de configuracion de postgreSQL, asi cuando se ejecute el comando de "docker-compose up" no hay problema con el comando automatico que se ejecuta de prisma "npx prisma migrate dev --name init". El nombre del error es "P1010"

-> Abrir el archivo "pg_hba.conf" ubicado en C:\Program Files\PostgreSQL\16\data

-> Ir hasta abajo del mismo y cambiar la direccion, en mi caso tengo la ip "192.168.1.5":

```
# IPv4 local connections:
host    all             all             "192.168.1.5/32"            scram-sha-256  
```

/Challenge_Fullstack_SSR (carpeta general), tiene el docker-compose.yml configurado
/api /client /api_swagger -> tienen sus DockerFile con sus instrucciones dentro

_Ejecutar Docker_
Ir a /Challenge_Fullstack_SSR y ejecutar el comando "docker-compose up" para crear automaticamente y levantar automaticamente las imagenes con sus configuraciones de los DockerFiles.

Ingresar a la web app mediante el link "http://localhost:8080"

### Paso 11
Ya podemos ingresar a la web app con cualquier tipo de perfil, filtrar, cargar usuarios y partidos.
Tambien podemos ver la documentacion de swagger con el link "http://localhost:4000/api_docs"



