provider "azurerm" {
  features {}
  subscription_id = "2f1ef4d2-8798-474f-81d1-d2fc16c553b6"
}

resource "azurerm_resource_group" "rgasp" {
  location = var.location
  name     = var.resource_group_name
}

data "azurerm_client_config" "name" {}

resource "azurerm_service_plan" "plan" {
  location            = azurerm_resource_group.rgasp.location
  name                = var.service_plan_name
  os_type             = "Linux"  
  resource_group_name = azurerm_resource_group.rgasp.name
  sku_name            = var.pricing_plan
}

resource "azurerm_linux_web_app" "serviceApp" {
  name                = var.linux_web_app_name
  location            = azurerm_service_plan.plan.location
  resource_group_name = azurerm_resource_group.rgasp.name
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
    application_stack {
      node_version = "22-lts" 
    }
  }

  https_only = true
}
