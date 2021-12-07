require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

const txOptions = {
  contractAddress: CONTRACT_ADDRESS,
  contractName: 'arkadiko-stake-registry-v1-1',
  functionName: 'set-pool-data',
  functionArgs: [
    tx.contractPrincipalCV(CONTRACT_ADDRESS, 'arkadiko-stake-pool-diko-v1-2'),
    tx.stringAsciiCV('DIKO'),
    tx.uintCV(0),
    tx.uintCV(0),
    tx.uintCV(100000)
  ],
  senderKey: process.env.STACKS_PRIVATE_KEY,
  fee: new BN(250000, 10),
  postConditionMode: 1,
  network
};

async function transact() {
  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
