# Uso de ApiDoc #

### [ApiDoc]( http://apidocjs.com/#install "Instalar ApiDoc de forma global" ) ###

## Ejecutar ApiDoc ##
#### Nos situamos en grosh/documentation/api y ejecutamos:
```bash
apidoc -i ./../../source/controllers -o ./output -t ./template
```
#### Usage apidoc [options]:
* **-i** : Le especificamos la entrada de información o la carpeta donde esta el código que queremos documentar

* **-o** : Es el directorio donde vamos a guardar los archivos que se generarán.

* **-t** : Se especifica la ruta donde tenemos alojado el template en el que se basara la documentación

## Documentar con ApiDoc ##

**Definir URI**
```bash
   @api {metodo} "/uri/" Descripción
```
**Definir la versión**
Para hacer comparaciones de código en las versiones es necesario copiar y pegar todo el código comentado en el que se encuentra la documentación, después,  se hacen los cambios que se deseen realizar y ademas se cambia el número de versión. En el ejemplo que se muestra al último se puede observar claramente. 
Es necesario actualizar el archivo **apidoc.json** cada vez que se agregué una nueva version a nuestro código, siempre y cuando la versión que se agrega en nuestros archivos sea mas reciente que la registrada en el archivo **apidoc.json**  
##### archivos #####
```bash
   @apiVersion 1.x.x
```
##### apidoc.json #####
```json
   {
       "version" :  "2.0.2"
    }
```

**Definir el nombre de la Api**
```bash
   @apiName "nombre"
```

**Definir el nombre de la Api**
```bash
   @apiGroup "grupo"
```

**Definir parámetros**
```bash
   @apiParam {TipoDato} nombreParametro Descripción
```

**Definir success con ejemplos**
```json
   @apiSuccessExample Success-Response:
     {
       "objeto": {
               "atributo": "valor",
               "atributo": "valor",
               "atributo": "valor"
           }
     }
```
**Definir un ejemplo de cabeceras**
```bash
    @apiHeaderExample {json} "nombreHeader":
     {
       "Content-Type": "application/json",
       "Authorization": "Bearer b7d03a6947b217efb6f3ec3bd3504582"
     }
```
**Definir ejemplo de un error**
```bash
    @apiErrorExample "Error":
    {
          "message": "The resource specified don't exist.",
    }
```

### Ejemplo ###

Por convención, se agrega la documentación antes de cada método de la api, en este caso antes del método GET .

```javascript

/**
 * @api {get} /users/ Return all users
 * @apiVersion 2.0.0
 * @apiName GetUsers
 * @apiGroup users
 *
 * @apiParam {Number} _id User unique ID.
 * @apiParam {String} username Name of user.
 * @apiParam {String} password Password of user.
 * @apiParam {Boolean} isActive Flag to identify is a user is active or deactive.
 * @apiParam {Date} createdAt Date of creation of user
 * @apiParam {Date} updatedAt Date of last update of user.
 *
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "users": [
 *           {
 *               "username": "John",
 *               "password": "Doe",
 *               "isActive": "True"
 *           },
 *           {
 *               "username": "anakin",
 *               "password": "skywalker",
 *               "isActive": "True"
 *           }
 *       ]
 *     }
 *
 * @apiHeaderExample {json} Header-Request:
 *     {
 *       "Content-Type": "application/json",
 *       "Authorization": "Bearer b7d03a6947b217efb6f3ec3bd3504582"
 *     }
 *
 * @apiHeaderExample {json} Header-Response:
 *     {
 *       "Content-Type": "application/json; charset=utf-8",
 *       "status": "200 OK"
 *     }
 *
 * @apiErrorExample Error-404:
 *{
 *  "message": "The resource specified don't exist.",
 * }
 *
 * @apiErrorExample Error-500:
 *{
 *  "message": "Internal Server Error.",
 * } 
 */

exports.list = function(req, res) {
  User.find(function(error, users) {
    if(error)
      res.json(error);
    res.json(users);
  });
};
```


#### En la versión 2.0.1 únicamente se cambia la descripción de la api (línea 2) ####
```javascript
/**
 * @api {get} /users/ Return a list of users
 * @apiVersion 2.0.1
 * @apiName GetUsers
 * @apiGroup users
 *
 * @apiParam {Number} _id User unique ID.
 * @apiParam {String} username Name of user.
 * @apiParam {String} password Password of user.
 * @apiParam {Boolean} isActive Flag to identify is a user is active or deactive.
 * @apiParam {Date} createdAt Date of creation of user
 * @apiParam {Date} updatedAt Date of last update of user.
 *
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "users": [
 *           {
 *               "username": "John",
 *               "password": "Doe",
 *               "isActive": "True"
 *           },
 *           {
 *               "username": "anakin",
 *               "password": "skywalker",
 *               "isActive": "True"
 *           }
 *       ]
 *     }
 *
 * @apiHeaderExample {json} Header-Request:
 *     {
 *       "Content-Type": "application/json",
 *       "Authorization": "Bearer b7d03a6947b217efb6f3ec3bd3504582"
 *     }
 *
 * @apiHeaderExample {json} Header-Response:
 *     {
 *       "Content-Type": "application/json; charset=utf-8",
 *       "status": "200 OK"
 *     }
 *
 * @apiErrorExample Error-404:
 *{
 *  "message": "The resource specified don't exist.",
 * }
 *
 * @apiErrorExample Error-500:
 *{
 *  "message": "Internal Server Error.",
 * } 
 */

exports.list = function(req, res) {
  User.find(function(error, users) {
    if(error)
      res.json(error);
    res.json(users);
  });
};
```

#### Documentación oficial: http://apidocjs.com/ ####