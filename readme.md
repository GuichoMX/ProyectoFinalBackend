--------------------------------------------------------- PROPIEDADES ---------------------------------------------------------
### Insertar Propiedad
```
mutation {
  insertPropiedad(id_propiedad: 1, nombre: "Casa numero uno", direccion: "sm 999 mz 888 lote 100", fecha_inicio: "2023-01-15", fecha_final: "2023-01-15", max_personas: 3, id_usuario: 2) {
    id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario
  }
}

```

### Obtener todas las propiedades
```
query {
  getAllPropiedades {
    id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario
  }
}
```

### Obtener una Propiedad
```
query {
  getPropiedad(id_propiedad: "2") {
    id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario
  }
}
```

### Actualizar Propiedad
``` 
mutation {
  updatePropiedad(id_propiedad: "1", nombre: "Casa 1") {
    id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario
  }
}
```

--------------------------------------------------------- HUESPEDES ---------------------------------------------------------
### Insertar Huesped
```
mutation {
  insertHuesped(id_usuario: 1, nombres: "Jose Luis", apellidoP: "Escobedo", apellidoM: "Trenado", edad:26, pais:"Mexico", ciudad: "Cancun", num_contacto: "9981864348", num_referencia: "9982602501") {
    id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia
  }
}

```

### Obtener todos los Huespedes
```
query {
  getAllHuespedes {
    id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia
  }
}
```

### Obtener un Huesped
```
query {
  getHuesped(id_usuario: 1) {
    id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia
  }
}
```

### Actualizar Huesped
``` 
mutation {
  updateHuesped(id_usuario: 1, nombres: "Luis") {
    id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia
  }
}
```

--------------------------------------------------------- USERS ---------------------------------------------------------

### Crear usuario
```
mutation {
  signUp(
    input: {
      name: "Luis"
      lastname: "Escobedo"
      email: "escobedotrenado@gmail.com"
      password: "myPa$$w0rd"
      isAdmin: true
    }
  ) {
    id
    name
    email
  }
}
```

### Iniciar sesión
```
mutation {
  signIn(email: "escobedotrenado@gmail.com", password:"myPa$$w0rd")
}

mutation {
  signIn(email: "test@gmail.com", password:"12345")
}
```