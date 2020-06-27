import { Injectable } from '@angular/core';
import { FileSystemWallet, Gateway } from 'fabric-network';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class SmartCasamentoService {

  constructor() { }

  public async solicitarEntradaCasamento() {
    // try {

    //   // Create a new file system based wallet for managing identities.
    //   const walletPath = path.join(process.cwd(), 'Org1Wallet');
    //   const wallet = new FileSystemWallet(walletPath);
    //   console.log(`Wallet path: ${walletPath}`);

    //   // Create a new gateway for connecting to our peer node.
    //   const gateway = new Gateway();
    //   const connectionProfile = path.resolve(__dirname, '..', 'connection.json');
    //   const connectionOptions = { wallet, identity: 'org1Admin', discovery: { enabled: true, asLocalhost: true } };
    //   await gateway.connect(connectionProfile, connectionOptions);

    //   // Get the network (channel) our contract is deployed to.
    //   const network = await gateway.getNetwork('mychannel');

    //   // Get the contract from the network.
    //   const contract = network.getContract('casamento');

    //   // Submit the specified transaction.
    //   await contract.submitTransaction('solicitarEntradaCasamento', '002',
    //     // tslint:disable-next-line:max-line-length
    //     '{"nome":"lucas","sobrenome":"lucas","dataNascimento":"2020-06-24T15:30:15.130Z","cpf":"lucas","rg":"lucas","arquivoCertidaoNascimento":"lucas","arquivoRg":"lucas","arquivoCpf":"lucas","arquivoCertidaoDivorcio":"lucas","arquivoSentencaDivorcio":"lucas"}',
    //     // tslint:disable-next-line:max-line-length
    //     '{"nome":"maria","sobrenome":"maria","dataNascimento":"2020-06-24T15:30:15.130Z","cpf":"maria","rg":"maria","arquivoCertidaoNascimento":"maria","arquivoRg":"maria","arquivoCpf":"maria","arquivoCertidaoDivorcio":"maria","arquivoSentencaDivorcio":"maria"}',
    //     // tslint:disable-next-line:max-line-length
    //     '{"nome":"jose","sobrenome":"jose","dataNascimento":"2020-06-24T15:30:15.130Z","cpf":"jose","rg":"jose","arquivoCertidaoNascimento":"jose","arquivoRg":"jose","arquivoCpf":"jose","arquivoCertidaoDivorcio":"jose","arquivoSentencaDivorcio":"jose"}',
    //     // tslint:disable-next-line:max-line-length
    //     '{"nome":"joana","sobrenome":"joana","dataNascimento":"2020-06-24T15:30:15.130Z","cpf":"joana","rg":"joana","arquivoCertidaoNascimento":"joana","arquivoRg":"joana","arquivoCpf":"joana","arquivoCertidaoDivorcio":"joana","arquivoSentencaDivorcio":"joana"}');
    //   console.log(`Transaction has been submitted`);

    //   // Disconnect from the gateway.
    //   await gateway.disconnect();

    // } catch (error) {
    //   console.error(`Failed to submit transaction: ${error}`);
    //   process.exit(1);
    // }
  }
}
