# challengeSN
# Desafío municipalidad

Este es un desafío técnico para desarrollar una aplicación web con funcionalidades de registro, inicio de sesión, pantalla principal y perfil de usuario. La aplicación cuenta con dos tipos de usuarios: administradores y usuarios comunes. A continuación, se detallan las distintas secciones de la aplicación:

## 1°-Registro
En esta vista, los usuarios podrán crear una cuenta ingresando su información personal:
Nombre
Apellido
Fecha de nacimiento
DNI
Email
Contraseña
Foto de perfil

## 2°-Inicio de sesión
Esta vista permite a los usuarios autenticarse utilizando su email y contraseña.

## 3°-Pantalla principal
*Usuarios administradores
Si el usuario es un administrador, visualizará una lista o tabla con los usuarios registrados. Los administradores tendrán permisos para modificar y desactivar cuentas de usuarios. La lista o tabla incluirá paginación para visualizar un máximo de 10 usuarios a la vez.

*Usuarios comunes
En caso contrario, los usuarios comunes visualizarán un mensaje de bienvenida.

## 4°-Perfil de usuario
Desde esta vista, los usuarios podrán visualizar y modificar todos los datos asociados a su cuenta.

# Especificaciones técnicas

## *Para el desarrollo del backend utilice:
Node.js con Express como framework.
Base de datos MySQL.
Sequelize ORM.
Hasheo de contraseñas.
JSON Web Tokens (JWT) para autenticación y autorización.
Almacenamiento de archivos (FTP)

## *Para el desarrollo del frontend utilice:
React
Enrutamiento
Tailwind CSS
Íconos
Modales y alertas
Formato de ent
