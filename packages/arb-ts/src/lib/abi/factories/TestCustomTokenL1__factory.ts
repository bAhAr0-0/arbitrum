/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { TestCustomTokenL1 } from '../TestCustomTokenL1'

export class TestCustomTokenL1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_bridge: string, overrides?: Overrides): Promise<TestCustomTokenL1> {
    return super.deploy(_bridge, overrides || {}) as Promise<TestCustomTokenL1>
  }
  getDeployTransaction(
    _bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bridge, overrides || {})
  }
  attach(address: string): TestCustomTokenL1 {
    return super.attach(address) as TestCustomTokenL1
  }
  connect(signer: Signer): TestCustomTokenL1__factory {
    return super.connect(signer) as TestCustomTokenL1__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCustomTokenL1 {
    return new Contract(address, _abi, signerOrProvider) as TestCustomTokenL1
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l2CustomTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
    ],
    name: 'registerTokenOnL2',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200244c3803806200244c833981810160405260208110156200003757600080fd5b505160cc80546001600160a01b0319166001600160a01b038316179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620000ad9290601290620000b4811b620006b117901c565b50620007a7565b600054610100900460ff1680620000d95750620000d96001600160e01b03620001a716565b80620000e8575060005460ff16155b620001255760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff1615801562000151576000805460ff1961ff0019909116610100171660011790555b62000165846001600160e01b03620001c616565b6200017a84846001600160e01b03620002cc16565b6200018e826001600160e01b03620003a916565b8015620001a1576000805461ff00191690555b50505050565b6000620001bf30620003bf60201b62000c601760201c565b1590505b90565b600054610100900460ff1680620001eb5750620001eb6001600160e01b03620001a716565b80620001fa575060005460ff16155b620002375760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff1615801562000263576000805460ff1961ff0019909116610100171660011790555b620002766001600160e01b03620003c516565b620002a182604051806040016040528060018152602001603160f81b8152506200047860201b60201c565b620002b5826001600160e01b036200054916565b8015620002c8576000805461ff00191690555b5050565b600054610100900460ff1680620002f15750620002f16001600160e01b03620001a716565b8062000300575060005460ff16155b6200033d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff1615801562000369576000805460ff1961ff0019909116610100171660011790555b6200037c6001600160e01b03620003c516565b6200039183836001600160e01b036200061816565b8015620003a4576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b3b151590565b600054610100900460ff1680620003ea5750620003ea6001600160e01b03620001a716565b80620003f9575060005460ff16155b620004365760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff1615801562000462576000805460ff1961ff0019909116610100171660011790555b801562000475576000805461ff00191690555b50565b600054610100900460ff16806200049d57506200049d6001600160e01b03620001a716565b80620004ac575060005460ff16155b620004e95760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff1615801562000515576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015620003a4576000805461ff0019169055505050565b600054610100900460ff16806200056e57506200056e6001600160e01b03620001a716565b806200057d575060005460ff16155b620005ba5760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff16158015620005e6576000805460ff1961ff0019909116610100171660011790555b604051806052620023cc8239604051908190036052019020609a55508015620002c8576000805461ff00191690555050565b600054610100900460ff16806200063d57506200063d6001600160e01b03620001a716565b806200064c575060005460ff16155b620006895760405162461bcd60e51b815260040180806020018281038252602e8152602001806200241e602e913960400191505060405180910390fd5b600054610100900460ff16158015620006b5576000805460ff1961ff0019909116610100171660011790555b8251620006ca90603690602086019062000705565b508151620006e090603790602085019062000705565b506038805460ff191660121790558015620003a4576000805461ff0019169055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200074857805160ff191683800117855562000778565b8280016001018555821562000778579182015b82811115620007785782518255916020019190600101906200075b565b50620007869291506200078a565b5090565b620001c391905b8082111562000786576000815560010162000791565b611c1580620007b76000396000f3fe608060405234801561001057600080fd5b50600436106101115760003560e01c80634000aea0116100ad578063a457c2d711610071578063a457c2d7146104f2578063a9059cbb1461051e578063d505accf1461054a578063dd62ed3e1461059b578063e78cea92146105c957610111565b80634000aea0146103ad5780634329c3461461046657806370a082311461049e5780637ecebe00146104c457806395d89b41146104ea57610111565b806306fdde0314610116578063095ea7b3146101935780631249c58b146101d35780631624f6c6146101dd57806318160ddd1461030b57806323b872dd14610325578063313ce5671461035b5780633644e515146103795780633950935114610381575b600080fd5b61011e6105ed565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610158578181015183820152602001610140565b50505050905090810190601f1680156101855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bf600480360360408110156101a957600080fd5b506001600160a01b038135169060200135610684565b604080519115158252519081900360200190f35b6101db6106a1565b005b6101db600480360360608110156101f357600080fd5b810190602081018135600160201b81111561020d57600080fd5b82018360208201111561021f57600080fd5b803590602001918460018302840111600160201b8311171561024057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561029257600080fd5b8201836020820111156102a457600080fd5b803590602001918460018302840111600160201b831117156102c557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506106b19050565b610313610772565b60408051918252519081900360200190f35b6101bf6004803603606081101561033b57600080fd5b506001600160a01b03813581169160208101359091169060400135610778565b61036361078d565b6040805160ff9092168252519081900360200190f35b610313610796565b6101bf6004803603604081101561039757600080fd5b506001600160a01b0381351690602001356107a5565b6101bf600480360360608110156103c357600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156103f257600080fd5b82018360208201111561040457600080fd5b803590602001918460018302840111600160201b8311171561042557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107fe945050505050565b6101db6004803603608081101561047c57600080fd5b506001600160a01b0381351690602081013590604081013590606001356108e3565b610313600480360360208110156104b457600080fd5b50356001600160a01b0316610979565b610313600480360360208110156104da57600080fd5b50356001600160a01b031661098a565b61011e6109ab565b6101bf6004803603604081101561050857600080fd5b506001600160a01b038135169060200135610a0c565b6101bf6004803603604081101561053457600080fd5b506001600160a01b038135169060200135610a7a565b6101db600480360360e081101561056057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610a8e565b610313600480360360408110156105b157600080fd5b506001600160a01b0381358116916020013516610c26565b6105d1610c51565b604080516001600160a01b039092168252519081900360200190f35b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106795780601f1061064e57610100808354040283529160200191610679565b820191906000526020600020905b81548152906001019060200180831161065c57829003601f168201915b505050505090505b90565b6000610698610691610c66565b8484610c6a565b50600192915050565b6106af336302faf080610d56565b565b600054610100900460ff16806106ca57506106ca610e54565b806106d8575060005460ff16155b6107135760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff1615801561073e576000805460ff1961ff0019909116610100171660011790555b61074784610e65565b6107518484610f3c565b61075a82610ff2565b801561076c576000805461ff00191690555b50505050565b60355490565b6000610785848484611008565b949350505050565b60385460ff1690565b60006107a0611086565b905090565b60006106986107b2610c66565b846107f985603460006107c3610c66565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6110b916565b610c6a565b600061080a8484610a7a565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561088557818101518382015260200161086d565b50505050905090810190601f1680156108b25780820380516001836020036101000a031916815260200191505b50935050505060405180910390a36108c984610c60565b156108d9576108d984848461111a565b5060019392505050565b60cc546040805163f26bdead60e01b81526001600160a01b0387811660048301526024820186905260448201859052606482018790529151919092169163f26bdead9160848083019260209291908290030181600087803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b505050506040513d602081101561097157600080fd5b505050505050565b6000610984826111f4565b92915050565b6001600160a01b03811660009081526099602052604081206109849061120f565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106795780601f1061064e57610100808354040283529160200191610679565b6000610698610a19610c66565b846107f985604051806060016040528060258152602001611bbb6025913960346000610a43610c66565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61121316565b6000610698610a87610c66565b84846112aa565b83421115610ae3576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610b18609960008e6001600160a01b03166001600160a01b0316815260200190815260200160002061120f565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610b7682611413565b90506000610b868287878761145f565b9050896001600160a01b0316816001600160a01b031614610bee576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610c0f906115ca565b610c1a8a8a8a610c6a565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60cc546001600160a01b031681565b3b151590565b3390565b6001600160a01b038316610caf5760405162461bcd60e51b8152600401808060200182810382526024815260200180611b976024913960400191505060405180910390fd5b6001600160a01b038216610cf45760405162461bcd60e51b81526004018080602001828103825260228152602001806119ec6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038216610db1576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610dbd60008383610fed565b603554610dd0908263ffffffff6110b916565b6035556001600160a01b038216600090815260336020526040902054610dfc908263ffffffff6110b916565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000610e5f30610c60565b15905090565b600054610100900460ff1680610e7e5750610e7e610e54565b80610e8c575060005460ff16155b610ec75760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff16158015610ef2576000805460ff1961ff0019909116610100171660011790555b610efa6115d3565b610f1d82604051806040016040528060018152602001603160f81b815250611675565b610f2682611735565b8015610f38576000805461ff00191690555b5050565b600054610100900460ff1680610f555750610f55610e54565b80610f63575060005460ff16155b610f9e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff16158015610fc9576000805460ff1961ff0019909116610100171660011790555b610fd16115d3565b610fdb83836117f2565b8015610fed576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b60006110158484846112aa565b6108d984611021610c66565b6107f985604051806060016040528060288152602001611b4a602891396001600160a01b038a1660009081526034602052604081209061105f610c66565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61121316565b60006107a06040518080611af860529139605201905060405180910390206110ac6118ca565b6110b46118d0565b6118d6565b600082820183811015611113576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015611188578181015183820152602001611170565b50505050905090810190601f1680156111b55780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156111d657600080fd5b505af11580156111ea573d6000803e3d6000fd5b5050505050505050565b6001600160a01b031660009081526033602052604090205490565b5490565b600081848411156112a25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561126757818101518382015260200161124f565b50505050905090810190601f1680156112945780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0383166112ef5760405162461bcd60e51b8152600401808060200182810382526025815260200180611b726025913960400191505060405180910390fd5b6001600160a01b0382166113345760405162461bcd60e51b81526004018080602001828103825260238152602001806119c96023913960400191505060405180910390fd5b61133f838383610fed565b61138281604051806060016040528060268152602001611a0e602691396001600160a01b038616600090815260336020526040902054919063ffffffff61121316565b6001600160a01b0380851660009081526033602052604080822093909355908416815220546113b7908263ffffffff6110b916565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061141d611086565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156114b65760405162461bcd60e51b8152600401808060200182810382526022815260200180611a346022913960400191505060405180910390fd5b8360ff16601b14806114cb57508360ff16601c145b6115065760405162461bcd60e51b8152600401808060200182810382526022815260200180611ad66022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa15801561155e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166115c1576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff16806115ec57506115ec610e54565b806115fa575060005460ff16155b6116355760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff16158015611660576000805460ff1961ff0019909116610100171660011790555b8015611672576000805461ff00191690555b50565b600054610100900460ff168061168e575061168e610e54565b8061169c575060005460ff16155b6116d75760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff16158015611702576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015610fed576000805461ff0019169055505050565b600054610100900460ff168061174e575061174e610e54565b8061175c575060005460ff16155b6117975760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff161580156117c2576000805460ff1961ff0019909116610100171660011790555b604051806052611a568239604051908190036052019020609a55508015610f38576000805461ff00191690555050565b600054610100900460ff168061180b575061180b610e54565b80611819575060005460ff16155b6118545760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa8602e913960400191505060405180910390fd5b600054610100900460ff1615801561187f576000805460ff1961ff0019909116610100171660011790555b8251611892906036906020860190611930565b5081516118a6906037906020850190611930565b506038805460ff191660121790558015610fed576000805461ff0019169055505050565b60655490565b60665490565b60008383836118e361192c565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061197157805160ff191683800117855561199e565b8280016001018555821561199e579182015b8281111561199e578251825591602001919060010190611983565b506119aa9291506119ae565b5090565b61068191905b808211156119aa57600081556001016119b456fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209027d984935d1050a9a34a51bf56c1156d69b9261e72d801da36f2160f89eef864736f6c634300060b00335065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564'
