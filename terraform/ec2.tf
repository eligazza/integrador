#^ ---------- LLAVES -------------- ^#
resource "aws_key_pair" "key_pair" {
  key_name   = "id_rsa"
  public_key = file("./id_rsa.pub")
}

#^ ---------- FRONTEND -------------- ^#
resource "aws_instance" "frontend" {
    ami                         = "ami-0fc5d935ebf8bc3bc" # Ubuntu 22.04 LTS / us-east-1
    instance_type               = "t2.micro"
    key_name                    = aws_key_pair.key_pair.key_name
    associate_public_ip_address = true
    #subnet_id = aws_subnet.my_subnet.id
    
    tags = { 
      Name = "1023c05-grupo2-frontend"
    }

    provisioner "remote-exec" {
      inline = [
      "sudo apt-get update -y",
      "sudo apt install docker.io -y",
      "sudo docker run -d -p 80:80 --name nginx-container nginx:latest",
    ]

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("./id_rsa")
      host        = self.public_ip
    }
}
}


#^ ---------- BACKEND -------------- ^#
resource "aws_instance" "backend" {
    ami                         = "ami-0fc5d935ebf8bc3bc" # Ubuntu 22.04 LTS / us-east-1
    instance_type               = "t2.micro"
    key_name                    = aws_key_pair.key_pair.key_name
    associate_public_ip_address = true
    #subnet_id = aws_subnet.my_subnet.id
    
    tags = {
        Name = "1023c05-grupo2-backend"
    }

    provisioner "remote-exec" {
    inline = [
      "sudo apt-get update -y",
      "sudo apt install docker.io -y",
      "sudo docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=1023c05_grupo2 -e MYSQL_USER=1023c05_grupo2 -e MYSQL_PASSWORD=aife4Phu -p 3306:3306 -d mysql:latest"
    ]

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("./id_rsa")
      host        = self.public_ip
    }
  }

}
