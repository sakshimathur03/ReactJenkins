pipeline {
    agent any

    environment {
        AZURE_CREDENTIALS_ID = 'Azure-principle'
        RESOURCE_GROUP = 'rg-jenkins-react'
        APP_SERVICE_NAME = 'webapijenkins2543'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/sakshimathur03/ReactJenkins.git'
            }
        }
        stage('Terraform Init') {
            steps {
                dir('Terraform') {
                    bat 'terraform init'
                    bat 'terraform plan -out=tfplan'
                    bat 'terraform apply -auto-approve tfplan'
                }
            }
        }

        stage('Install Dependencies & Build React App') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Prepare Build Artifact') {
            steps {
                bat 'powershell Compress-Archive -Path build\\* -DestinationPath react_build.zip -Force'
            }
        }

        stage('Deploy to Azure App Service') {
    steps {
        withCredentials([string(credentialsId: env.AZURE_CREDENTIALS_ID, variable: 'AZURE_SECRET_JSON')]) {
            script {
                def json = readJSON text: AZURE_SECRET_JSON

                def clientId = json.clientId
                def clientSecret = json.clientSecret
                def tenantId = json.tenantId
                def subscriptionId = json.subscriptionId

                bat "az login --service-principal -u ${clientId} -p ${clientSecret} --tenant ${tenantId}"
                bat "az account set --subscription ${subscriptionId}"
                bat "az webapp deploy --resource-group %RESOURCE_GROUP% --name %APP_SERVICE_NAME% --src-path react_build.zip --type zip"
            }
        }
    }
}

    }

    post {
        success {
            echo 'React App Deployment Successful!'
        }
        failure {
            echo 'React App Deployment Failed!'
        }
    }
}
