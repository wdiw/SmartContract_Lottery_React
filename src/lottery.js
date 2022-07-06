import Web3 from './web3'

const address = '0x62BAf63478e184490dF0f05a4bc8bb2806eB52a0'
const abi = [
    {
        constant: false,
        inputs: [],
        name: 'pickWinnder',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getPlayer',
        outputs: [{ name: '', type: 'address[]' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'manager',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'join',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'players',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
]

export default new Web3.eth.Contract(abi, address)
