locals {
  region = "us-east-1"

  front_tags = {
    Name        = "frontend"
    Terraform   = "true"
    Environment = "dev"
  }

  back_tags = {
    Name        = "backend"
    Terraform   = "true"
    Environment = "dev"
  }
}