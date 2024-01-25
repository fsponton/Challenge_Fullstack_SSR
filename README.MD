como crear db en postgreSQL

Abrir pgadmin4, click derecho crear una nueva DB con nombre "truco_tournament".

Una vez creada, abrir un terminal de visual studio y moverse a la carpeta /api/prisma/

Estando en /api/prisma ejecutar el comando: "npx prisma migrate dev --name init"

Con este comando se crean los schemas (que se definieron en /api/prisma/schema.prisma) en la base de datos de postgreSQL.

Dato: Para ver las tablas y los registros se puede ejecutar el comando: "npx prisma studio" en /api/, se abrira un cliente en el browser donde se puede seleccionar cualquier entidad y se muestran los registros.




