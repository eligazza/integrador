Creamos nuestras llaves publicas y privadas (dar "enter" a todas las opciones para usar el nombre default y sin contraseña)

ssh-keygen -t rsa && cp ~/.ssh/id_rsa.pub .

Realizar el despliegue de la infraestructura con terraform

terraform init

terraform apply -auto-approve