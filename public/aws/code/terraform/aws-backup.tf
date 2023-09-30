resource "aws_backup_plan" "main" {
  name = "ab-${local.naming_suffix}"

  rule {
    rule_name         = "tf_example_backup_rule"
    target_vault_name = aws_backup_vault.test.name
    schedule          = "cron(0 12 * * ? *)"

    lifecycle {
      delete_after = 14
    }
  }

  advanced_backup_setting {
    backup_options = {
      WindowsVSS = "enabled"
    }
    resource_type = "EC2"
  }

  tags = var.tags
}