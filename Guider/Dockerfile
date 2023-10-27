# Vamos a usar amazoncorretto en vez de opensdk porque ya está deprecado. amazon mantiene la version de correto basada en opensdk pero con mantenimiento
FROM amazoncorretto
# Esto copia el archivo ejecutable jar en el contenedor y le pone un nombre
COPY target/Guider-0.0.1-SNAPSHOT.jar java-app.jar
ENTRYPOINT ["java", "-jar", "java-app.jar"]

