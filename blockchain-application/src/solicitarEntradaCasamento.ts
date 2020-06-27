import { FileSystemWallet, Gateway } from 'fabric-network';
import * as path from 'path';

async function main() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'Org1Wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        const connectionProfile = path.resolve(__dirname, '..', 'connection.json');
        let connectionOptions = { wallet, identity: 'org1Admin', discovery: { enabled: true, asLocalhost: true } };
        await gateway.connect(connectionProfile, connectionOptions);

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('casamento');

        // Submit the specified transaction.
        await contract.submitTransaction('solicitarEntradaCasamento', '003',
            "{\"nome\":\"Lucas\",\"sobrenome\":\"Silva\",\"dataNascimento\":\"1980-06-24T15:30:15.130Z\",\"cpf\":\"12345678954\",\"rg\":\"5265478\",\"arquivoCertidaoNascimento\":\"arquivoCertidaoNascimento.jpg\",\"arquivoRg\":\"arquivoRg.pdf\",\"arquivoCpf\":\"arquivoCpf.pdf\",\"arquivoCertidaoDivorcio\":\"arquivoCertidaoDivorcio.pdf\",\"arquivoSentencaDivorcio\":\"arquivoSentencaDivorcio.pdf\"}",
            "{\"nome\":\"Maria\",\"sobrenome\":\"Joaquina\",\"dataNascimento\":\"1975-06-24T15:30:15.130Z\",\"cpf\":\"12345678954\",\"rg\":\"5265478\",\"arquivoCertidaoNascimento\":\"arquivoCertidaoNascimento.jpg\",\"arquivoRg\":\"arquivoRg.pdf\",\"arquivoCpf\":\"arquivoCpf.pdf\",\"arquivoCertidaoDivorcio\":\"arquivoCertidaoDivorcio.pdf\",\"arquivoSentencaDivorcio\":\"arquivoSentencaDivorcio.pdf\"}",
            "{\"nome\":\"José\",\"sobrenome\":\"Alencar\",\"dataNascimento\":\"1977-06-24T15:30:15.130Z\",\"cpf\":\"12345678954\",\"rg\":\"5265478\",\"arquivoCertidaoNascimento\":\"arquivoCertidaoNascimento.jpg\",\"arquivoRg\":\"arquivoRg.pdf\",\"arquivoCpf\":\"arquivoCpf.pdf\",\"arquivoCertidaoDivorcio\":\"arquivoCertidaoDivorcio.pdf\",\"arquivoSentencaDivorcio\":\"arquivoSentencaDivorcio.pdf\"}",
            "{\"nome\":\"Tamires\",\"sobrenome\":\"França\",\"dataNascimento\":\"1976-06-24T15:30:15.130Z\",\"cpf\":\"12345678954\",\"rg\":\"5265478\",\"arquivoCertidaoNascimento\":\"arquivoCertidaoNascimento.jpg\",\"arquivoRg\":\"arquivoRg.pdf\",\"arquivoCpf\":\"arquivoCpf.pdf\",\"arquivoCertidaoDivorcio\":\"arquivoCertidaoDivorcio.pdf\",\"arquivoSentencaDivorcio\":\"arquivoSentencaDivorcio.pdf\"}");
        console.log(`Transaction has been submitted`);

        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}
main();