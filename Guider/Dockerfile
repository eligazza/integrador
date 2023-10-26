# Vamos a usar amazoncorretto en vez de opensdk porque ya está deprecado. amazon mantiene la version de correto basada en opensdk pero con mantenimiento
FROM amazoncorretto
# Esto copia everything en el directorio adentro del directorio /usr/src/myapp del contenedor
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
# Esto ejecuta el main. Si no anda tendría que convertirlo en GuiderApplication.java
CMD ["java", "Main"]
