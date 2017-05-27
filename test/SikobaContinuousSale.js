var tokenOutput={"contracts":{"SikobaContinuousSale.sol:ERC20Interface":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"totalSupply\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":""},"SikobaContinuousSale.sol:ERC20Token":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"totalSupply\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"606060405260006002555b60008054600160a060020a03191633600160a060020a03161790555b5b610611806100366000396000f300606060405236156100a15763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a357806318160ddd146100d657806323b872dd146100f857806370a082311461013157806379ba50971461015f5780638da5cb5b14610171578063a9059cbb1461019d578063d4ee1d90146101d0578063dd62ed3e146101fc578063f2fde38b14610230575bfe5b34156100ab57fe5b6100c2600160a060020a036004351660243561024e565b604080519115158252519081900360200190f35b34156100de57fe5b6100e66102b9565b60408051918252519081900360200190f35b341561010057fe5b6100c2600160a060020a03600435811690602435166044356102c0565b604080519115158252519081900360200190f35b341561013957fe5b6100e6600160a060020a03600435166103da565b60408051918252519081900360200190f35b341561016757fe5b61016f6103f9565b005b341561017957fe5b610181610480565b60408051600160a060020a039092168252519081900360200190f35b34156101a557fe5b6100c2600160a060020a036004351660243561048f565b604080519115158252519081900360200190f35b34156101d857fe5b610181610560565b60408051600160a060020a039092168252519081900360200190f35b341561020457fe5b6100e6600160a060020a036004358116906024351661056f565b60408051918252519081900360200190f35b341561023857fe5b61016f600160a060020a036004351661059c565b005b600160a060020a03338116600081815260046020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b600160a060020a0383166000908152600360205260408120548290108015906103105750600160a060020a0380851660009081526004602090815260408083203390941683529290522054829010155b801561031c5750600082115b80156103415750600160a060020a038316600090815260036020526040902054828101115b156103ce57600160a060020a03808516600081815260036020818152604080842080548990039055600482528084203387168552825280842080548990039055948816808452918152918490208054870190558351868152935190937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92908290030190a35060016103d2565b5060005b5b9392505050565b600160a060020a0381166000908152600360205260409020545b919050565b60015433600160a060020a039081169116141561047d5760015460008054604051600160a060020a0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b600160a060020a0333166000908152600360205260408120548290108015906104b85750600082115b80156104dd5750600160a060020a038316600090815260036020526040902054828101115b1561055157600160a060020a03338116600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060016102b3565b5060006102b3565b5b92915050565b600154600160a060020a031681565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b60005433600160a060020a039081169116146105b85760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a72305820224046e1b6044698aa7ecdfa292df37b72358217f4ae5a44464f1451f5d6118e0029"},"SikobaContinuousSale.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6101fd806100396000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba5097811461005b5780638da5cb5b1461006d578063d4ee1d9014610099578063f2fde38b146100c5575bfe5b341561006357fe5b61006b6100e3565b005b341561007557fe5b61007d61016a565b60408051600160a060020a039092168252519081900360200190f35b34156100a157fe5b61007d610179565b60408051600160a060020a039092168252519081900360200190f35b34156100cd57fe5b61006b600160a060020a0360043516610188565b005b60015433600160a060020a03908116911614156101675760015460008054604051600160a060020a0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a45760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a72305820b26125b4fdf1d0e486308195b87195c276dd5950740cc40118ee8c2aa25e2a3e0029"},"SikobaContinuousSale.sol:SikobaContinuousSale":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"totalSupply\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"restart\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalUsdFunding\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"at\",\"type\":\"uint256\"}],\"name\":\"unitsPerEthAt\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MIN_CONTRIBUTION\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"participant\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_SKO1_UNITS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MAX_USD_FUNDING\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"unitsPerEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintingCompleted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"softEndDate\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"END_SKO1_UNITS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"setUsdPerHundredETH\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"buyTokens\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxUsdFundingReached\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"fundingPaused\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"usdPerHundredETH\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"setMintingCompleted\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethersContributed\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"UsdRateSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethers\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newTotalSupply\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"unitsPerEth\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052600060028190556006805460ff19169055635929a40f600855600955600a805461ffff19169055341561003357fe5b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b5b610f92806100626000396000f300606060405236156101a95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146101ba578063095ea7b31461024a57806318160ddd1461027d5780631ef3755d1461029f57806323b872dd146102b157806326c435a9146102ea5780632ebba2cf1461030c578063313ce56714610331578063372c65331461035757806340650c911461037957806340c10f191461039b57806343deb8e5146103bc578063545599ff146103de57806370a082311461040057806379ba50971461042e5780638456cb59146104405780638da5cb5b14610452578063935ebb781461047e57806395d89b41146104a0578063a9059cbb14610530578063b01f157114610563578063bf538f6f14610585578063c04605b8146105a9578063cc897e40146105cb578063cd29137f146105ed578063d0febe4c14610602578063d3df2d011461060c578063d4ee1d9014610630578063dd62ed3e1461065c578063e4dd779414610690578063f04b3e75146106b4578063f2fde38b146106d6578063ff7c9329146106f4578063ffd571ca14610706575b6101b85b6101b5610728565b5b565b005b34156101c257fe5b6101ca610922565b604080516020808252835181830152835191928392908301918501908083838215610210575b80518252602083111561021057601f1990920191602091820191016101f0565b505050905090810190601f16801561023c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561025257fe5b610269600160a060020a0360043516602435610959565b604080519115158252519081900360200190f35b341561028557fe5b61028d6109c4565b60408051918252519081900360200190f35b34156102a757fe5b6101b86109cb565b005b34156102b957fe5b610269600160a060020a03600435811690602435166044356109f6565b604080519115158252519081900360200190f35b34156102f257fe5b61028d610afe565b60408051918252519081900360200190f35b341561031457fe5b61028d600435610b04565b60408051918252519081900360200190f35b341561033957fe5b610341610b30565b6040805160ff9092168252519081900360200190f35b341561035f57fe5b61028d610b35565b60408051918252519081900360200190f35b341561038157fe5b61028d610b3d565b60408051918252519081900360200190f35b34156103a357fe5b6101b8600160a060020a0360043516602435610b48565b005b34156103c457fe5b61028d610c03565b60408051918252519081900360200190f35b34156103e657fe5b61028d610c09565b60408051918252519081900360200190f35b341561040857fe5b61028d600160a060020a0360043516610c11565b60408051918252519081900360200190f35b341561043657fe5b6101b8610c30565b005b341561044857fe5b6101b8610cb7565b005b341561045a57fe5b610462610ce6565b60408051600160a060020a039092168252519081900360200190f35b341561048657fe5b61028d610cf5565b60408051918252519081900360200190f35b34156104a857fe5b6101ca610cfc565b604080516020808252835181830152835191928392908301918501908083838215610210575b80518252602083111561021057601f1990920191602091820191016101f0565b505050905090810190601f16801561023c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053857fe5b610269600160a060020a0360043516602435610d33565b604080519115158252519081900360200190f35b341561056b57fe5b61028d610df2565b60408051918252519081900360200190f35b341561058d57fe5b610269610e03565b604080519115158252519081900360200190f35b34156105b157fe5b61028d610e0c565b60408051918252519081900360200190f35b34156105d357fe5b61028d610e12565b60408051918252519081900360200190f35b34156105f557fe5b6101b8600435610e18565b005b6101b8610728565b005b341561061457fe5b610269610e71565b604080519115158252519081900360200190f35b341561063857fe5b610462610e7a565b60408051600160a060020a039092168252519081900360200190f35b341561066457fe5b61028d600160a060020a0360043581169060243516610e89565b60408051918252519081900360200190f35b341561069857fe5b610269610eb6565b604080519115158252519081900360200190f35b34156106bc57fe5b61028d610ec4565b60408051918252519081900360200190f35b34156106de57fe5b6101b8600160a060020a0360043516610eca565b005b34156106fc57fe5b6101b8610f13565b005b341561070e57fe5b61028d610f40565b60408051918252519081900360200190f35b600a546000908190610100900460ff16156107435760006000fd5b635929a31f4210156107555760006000fd5b635929a40f4211156107675760006000fd5b6008544211156107775760006000fd5b662386f26fc1000034101561078c5760006000fd5b610794610df2565b9150670de0b6b3a76400003483025b60028054929091049182019055600160a060020a0333811660009081526003602090815260408083208054860190558051858152905194955030909316939192600080516020610f47833981519152929081900390910190a333600160a060020a031630600160a060020a0316600080516020610f47833981519152836040518082815260200191505060405180910390a360075468056bc75e2d631000009034025b6005805492909104909101905560065460ff1615801561086a575062061a80600554115b15610886576201518042016008556006805460ff191660011790555b60098054349081019091556002546040805192835260208301849052828101919091526060820184905251600160a060020a033316917fca1d1d2c3f24bb3f0c4ad90bd9823d2465052996d73438c962e227ea67a206d8919081900360800190a260008054604051600160a060020a0391821692309092163180156108fc0292909190818181858888f19350505050151561091d57fe5b5b5050565b60408051808201909152601681527f53696b6f626120436f6e74696e756f75732053616c6500000000000000000000602082015281565b600160a060020a03338116600081815260046020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b60005433600160a060020a039081169116146109e75760006000fd5b600a805461ff00191690555b5b565b600160a060020a038316600090815260036020526040812054829010801590610a465750600160a060020a0380851660009081526004602090815260408083203390941683529290522054829010155b8015610a525750600082115b8015610a775750600160a060020a038316600090815260036020526040902054828101115b15610af257600160a060020a0380851660008181526003602081815260408084208054899003905560048252808420338716855282528084208054899003905594881680845291815291849020805487019055835186815293519093600080516020610f4783398151915292908290030190a3506001610af6565b5060005b5b9392505050565b60055481565b600060f06818650127cc3dc80000635929a31e198401025b046859725991ece28800000390505b919050565b601281565b635929a31f81565b662386f26fc1000081565b60005433600160a060020a03908116911614610b645760006000fd5b600a5460ff1615610b755760006000fd5b600160a060020a0380831660009081526003602090815260408083208054860190556002805486019055805185815290513090941693600080516020610f47833981519152929181900390910190a381600160a060020a031630600160a060020a0316600080516020610f47833981519152836040518082815260200191505060405180910390a35b5b5050565b61067281565b635929a40f81565b600160a060020a0381166000908152600360205260409020545b919050565b60015433600160a060020a03908116911614156101b55760015460008054604051600160a060020a0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b60005433600160a060020a03908116911614610cd35760006000fd5b600a805461ff0019166101001790555b5b565b600054600160a060020a031681565b62061a8081565b60408051808201909152600481527f534b4f3100000000000000000000000000000000000000000000000000000000602082015281565b600160a060020a033316600090815260036020526040812054829010801590610d5c5750600082115b8015610d815750600160a060020a038316600090815260036020526040902054828101115b15610de357600160a060020a0333811660008181526003602090815260408083208054889003905593871680835291849020805487019055835186815293519193600080516020610f47833981519152929081900390910190a35060016109be565b5060006109be565b5b92915050565b6000610dfd42610b04565b90505b90565b600a5460ff1681565b60085481565b6104b081565b60005433600160a060020a03908116911614610e345760006000fd5b60078190556040805182815290517fd913dea27ac45300d6f204e6d5c0b5f6db3e1038b5711fb616d55d78c53e86249181900360200190a15b5b50565b60065460ff1681565b600154600160a060020a031681565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b600a54610100900460ff1681565b60075481565b60005433600160a060020a03908116911614610ee65760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60005433600160a060020a03908116911614610f2f5760006000fd5b600a805460ff191660011790555b5b565b600954815600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820c8946eb20d99580eab0e10d8984fab1996145ec4e1106b01116677c282327ede0029"}},"version":"0.4.11+commit.68ef5810.Darwin.appleclang"};
