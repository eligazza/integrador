output "PUBLIC_IPv4_FRONT" {
  value = aws_instance.frontend.public_ip
}

output "PUBLIC_IPv4_BACK" {
  value = aws_instance.backend.public_ip
}

output "ssh_key_name" {
  value = aws_key_pair.key_pair.key_name
}