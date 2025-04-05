

variable "location" {
    description = "location of service"
    type = string
    default = "centralus"
}
variable "resource_group_name" {
  description = "resource group name"
  type = string
  default = "rg-jenkins-react"
}

variable "os" {
  description = "Operating system"
  type = string
  default = "Linux"
}

variable "service_plan_name" {
  description = "Name of the service plan"
  type = string
  default = "myapp-plan"
}

variable "sku_name" {
  description = "Pricing plan of the azure service plan"
  type = string
  default = "Standard"
}

variable "linux_web_app_name" {
  description = "name of the app service"
  type = string
  default = "webapijenkins2543"
}
variable "pricing_plan" {
  description = "Pricing plan of the azure service plan"
  type = string
  default = "S1"
}

