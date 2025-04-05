pipeline {
    agent any

    environment {
        AZURE_CREDENTIALS_ID = 'Azure-principle'
        RESOURCE_GROUP = 'rg-jenkins-react'
        APP_SERVICE_NAME = 'reactjenkinsapp2543'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/sakshimathur03/ReactJenkins.git'
            }
        }

        stage('Install Dependencies & Build React App') {
            steps {
                dir('your-react-project-folder') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Prepare Build Artifact') {
            steps {
                dir('your-react-project-folder') {
                    bat 'powershell Compress-Archive -Path build\\* -DestinationPath ../react_build.zip -Force'
                }
            }
        }

        stage('Deploy to Azure App Service') {
            steps {
                withCredentials([
                    azureServicePrincipal(
                        credentialsId: env.AZURE_CREDENTIALS_ID,
                        subscriptionIdVariable: 'AZURE_SUBSCRIPTION_ID',
                        clientIdVariable: 'AZURE_CLIENT_ID',
                        clientSecretVariable: 'AZURE_CLIENT_SECRET',
                        tenantIdVariable: 'AZURE_TENANT_ID'
                    )
                ]) {
                    bat "az login --service-principal -u %AZURE_CLIENT_ID% -p %AZURE_CLIENT_SECRET% --tenant %AZURE_TENANT_ID%"
                    bat "az webapp deploy --resource-group %RESOURCE_GROUP% --name %APP_SERVICE_NAME% --src-path react_build.zip --type zip"
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
