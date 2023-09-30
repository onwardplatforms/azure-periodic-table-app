resource "aws_fsx_lustre_file_system" "main" {
  import_path      = "s3://${aws_s3_bucket.main.bucket}"
  storage_capacity = 1200
  subnet_ids       = [aws_subnet.main.id]

  tags = var.tags
}