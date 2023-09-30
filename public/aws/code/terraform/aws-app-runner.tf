resource "aws_apprunner_service" "main" {
  service_name = "main"

  source_configuration {
    authentication_configuration {
      connection_arn = aws_apprunner_connection.main.arn
    }
    code_repository {
      code_configuration {
        code_configuration_values {
          build_command = "python setup.py develop"
          port          = "8000"
          runtime       = "PYTHON_3"
          start_command = "python runapp.py"
        }
        configuration_source = "API"
      }
      repository_url = "https://github.com/example/my-example-python-app"
      source_code_version {
        type  = "BRANCH"
        value = "main"
      }
    }
  }

  network_configuration {
    egress_configuration {
      egress_type       = "VPC"
      vpc_connector_arn = aws_apprunner_vpc_connector.connector.arn
    }
  }

  tags = var.tags
}