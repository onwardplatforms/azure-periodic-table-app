resource "aws_appmesh_mesh" "simple" {
  name = "aam-${local.naming_suffix}"

  tags = var.tags
}