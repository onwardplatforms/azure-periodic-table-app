resource "aws_eks_cluster" "main" {
  name     = "eks-${local.naming_suffix}"
  role_arn = aws_iam_role.main.arn

  vpc_config {
    subnet_ids = [aws_subnet.main1.id, aws_subnet.main2.id]
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Cluster handling.
  # Otherwise, EKS will not be able to properly delete EKS managed EC2 infrastructure such as Security Groups.
  depends_on = [
    aws_iam_role_policy_attachment.main-AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.main-AmazonEKSVPCResourceController,
  ]
}