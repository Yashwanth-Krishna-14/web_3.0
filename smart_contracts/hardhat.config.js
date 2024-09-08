/* const { solidity } = require('ethereum-waffle') */


require("@nomiclabs/hardhat-waffle");


module.exports = {
    solidity:'0.8.24',
    networks:{
        sepolia:{
            url:'https://eth-sepolia.g.alchemy.com/v2/2sXhrX2kZUjUIAxy61b6OF-kJ3t8rYbw',
            accounts:['00c8c79a9870283ecb724860efeb44a030d692c1716da9f103f9670a04bb9524']
        }
    }
}