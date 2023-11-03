resource "aws_security_group" "front" {
  name_prefix = "sg_front"
  #vpc_id      = module.vpc.vpc_id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = local.front_tags
}

resource "aws_security_group" "backend" {
  name_prefix = "sg_back"
  #vpc_id      = module.vpc.vpc_id

  ingress {
    protocol    = "tcp"
    from_port   = 11000 # java-app port in application_properties
    to_port     = 11000 # java-app port in application_properties
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp" # ssh
    from_port   = 22 
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = local.front_tags
}