# Desafio 1ª encontro 2020 - FIAP
### Desafio proposto
Criar uma solução 100% online para o casamento civil utilizando blockchain.

### Integrantes do grupo
Victor Savoi Silvestrini Rodrigues - RM 81991\
Pedro Henrique Rangel Francisco - RM 82165\
Lucas Oliveira Sanches Leal - RM 82021\
Caio Campos Aureliano- RM 83786\
Pedro Cardo Vasconcellos - RM 82387

### Tecnologias utilizadas
Frontend - Angular\
Backend - .Net Core 3.1 Web API\
IBM Blockchain Platform - Hyperledge

## Instruções para testes
### Pré-requisitos
Siga os passos abaixo e garanta que tudo estará instalado para a execução do projeto.

1. Siga os passos do link https://medium.com/@rischioto/primeiros-passos-com-o-ibm-blockchain-platform-86fc504c1571
2. Adicione as pastas "cartorio-contract" e "blockchain-application" ao workspace do VS Code.
4. Inicie o seu Fabric Environment.
5. Dentro do seu Fabric Environment, clique em "+ Instantiate", selecione a opção "cartorio-contract" e aguarde o término das configurações.

### Consumo do blockchain (pasta blockchain-application)
1. Abra a extensão do IBM Blockchain Platform, na aba "Fabric Gateway", clique em "Org1" e selecione a opção "org1Admin".
2. Vá "More options" do "Fabric Gateway", selecione a opção "Export Connection File", altere o nome do arquivo para "Org1Wallet" e informe o destino para a pasta "blockchain-application".
3. Abra o terminal na pasta "blockchain-application" e execute o comando "npm install".
4. No menu superior, acesse a aba "Terminal" > "Run Build Task", selecione a opção "tsc: watch - tsconfig.json - blockchain-application" e aguarde o final do build.
5. No menu superior, acesse a aba "Terminal" > "Run Task", selecione a opção "npm: solicitarEntradaCasamento - blockchain-application" e aguarde o fim da transação no Blockchain Hyperledge.
6. No menu superior, acesse a aba "Terminal" > "Run Task", selecione a opção "npm: casamentoExists - blockchain-application" e aguarde o fim da transação no Blockchain Hyperledge.
7. No menu superior, acesse a aba "Terminal" > "Run Task", selecione a opção "npm: defineDataCasamento - blockchain-application" e aguarde o fim da transação no Blockchain Hyperledge.

### MVP (pasta application)
1. No terminal acesse a pasta "application" e execute os comandos abaixo:
- npm install
- ng serve -o
