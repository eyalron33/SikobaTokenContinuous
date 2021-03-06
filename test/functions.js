// ----------------------------------------------------------------------------------------------
// Testing the smart contract
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2017. The MIT Licence.
// ----------------------------------------------------------------------------------------------

// May 29 2017
var ethPriceUSD = 163.635;

// -----------------------------------------------------------------------------
// Accounts
// -----------------------------------------------------------------------------
var accounts = [];
var accountNames = {};

addAccount(eth.accounts[0], "Account #0 - Miner");
addAccount(eth.accounts[1], "Account #1 - Token Owner");
addAccount(eth.accounts[2], "Account #2 - Purchased tokens");
addAccount(eth.accounts[3], "Account #3 - Purchased tokens");
addAccount(eth.accounts[4], "Account #4 - Minted tokens");
addAccount(eth.accounts[5], "Account #5");
addAccount(eth.accounts[6], "Account #6");

var minerAccount = eth.accounts[0];
var tokenOwnerAccount = eth.accounts[1];
var account2 = eth.accounts[2];
var account3 = eth.accounts[3];
var account4 = eth.accounts[4];
var account5 = eth.accounts[5];
var account6 = eth.accounts[6];

var baseBlock = eth.blockNumber;

function unlockAccounts(password) {
  for (var i = 0; i < 7; i++) {
    personal.unlockAccount(eth.accounts[i], password, 100000);
  }
}

function addAccount(account, accountName) {
  accounts.push(account);
  accountNames[account] = accountName;
}


// -----------------------------------------------------------------------------
// Token Contract
// -----------------------------------------------------------------------------
var tokenContractAddress = null;
var tokenContractAbi = null;

function addTokenContractAddressAndAbi(address, abi) {
  tokenContractAddress = address;
  tokenContractAbi = abi;
}


// -----------------------------------------------------------------------------
// Account ETH and token balances
// -----------------------------------------------------------------------------
function printBalances() {
  console.log("DEBUG: tokenContractAddress: " + tokenContractAddress);
  console.log("DEBUG: tokenContractAbi: " + tokenContractAbi);
  var token = tokenContractAddress == null || tokenContractAbi == null ? null : web3.eth.contract(tokenContractAbi).at(tokenContractAddress);
  var decimals = token == null ? 0 : token.decimals();
  var i = 0;
  console.log("RESULT:  # Account                                             EtherBalanceChange                          Token Name");
  accounts.forEach(function(e) {
    i++;
    var etherBalanceBaseBlock = eth.getBalance(e, baseBlock);
    var etherBalance = web3.fromWei(eth.getBalance(e).minus(etherBalanceBaseBlock), "ether");
    var tokenBalance = token == null ? new BigNumber(0) : token.balanceOf(e).shift(-decimals);
    console.log("RESULT: " + pad2(i) + " " + e  + " " + pad(etherBalance) + " " + padToken(tokenBalance, decimals) + " " + accountNames[e]);
  });
}

function pad2(s) {
  var o = s.toFixed(0);
  while (o.length < 2) {
    o = " " + o;
  }
  return o;
}

function pad(s) {
  var o = s.toFixed(18);
  while (o.length < 27) {
    o = " " + o;
  }
  return o;
}

function padToken(s, decimals) {
  var o = s.toFixed(decimals);
  var l = parseInt(decimals)+12;
  while (o.length < l) {
    o = " " + o;
  }
  return o;
}


// -----------------------------------------------------------------------------
// Transaction status
// -----------------------------------------------------------------------------
function printTxData(name, txId) {
  var tx = eth.getTransaction(txId);
  var txReceipt = eth.getTransactionReceipt(txId);
  var gasPrice = tx.gasPrice;
  var gasCostETH = tx.gasPrice.mul(txReceipt.gasUsed).div(1e18);
  var gasCostUSD = gasCostETH.mul(ethPriceUSD);
  console.log("RESULT: " + name + " gas=" + tx.gas + " gasUsed=" + txReceipt.gasUsed + " costETH=" + gasCostETH +
    " costUSD=" + gasCostUSD + " @ ETH/USD=" + ethPriceUSD + " gasPrice=" + gasPrice + " block=" + 
    txReceipt.blockNumber + " txId=" + txId);
}

function assertEtherBalance(account, expectedBalance) {
  var etherBalance = web3.fromWei(eth.getBalance(account), "ether");
  if (etherBalance == expectedBalance) {
    console.log("RESULT: OK " + account + " has expected balance " + expectedBalance);
  } else {
    console.log("RESULT: FAILURE " + account + " has balance " + etherBalance + " <> expected " + expectedBalance);
  }
}

function gasEqualsGasUsed(tx) {
  var gas = eth.getTransaction(tx).gas;
  var gasUsed = eth.getTransactionReceipt(tx).gasUsed;
  return (gas == gasUsed);
}

function failIfGasEqualsGasUsed(tx, msg) {
  var gas = eth.getTransaction(tx).gas;
  var gasUsed = eth.getTransactionReceipt(tx).gasUsed;
  if (gas == gasUsed) {
    console.log("RESULT: FAIL " + msg);
    return 0;
  } else {
    console.log("RESULT: PASS " + msg);
    return 1;
  }
}

function passIfGasEqualsGasUsed(tx, msg) {
  var gas = eth.getTransaction(tx).gas;
  var gasUsed = eth.getTransactionReceipt(tx).gasUsed;
  if (gas == gasUsed) {
    console.log("RESULT: PASS " + msg);
    return 1;
  } else {
    console.log("RESULT: FAIL " + msg);
    return 0;
  }
}

function failIfGasEqualsGasUsedOrContractAddressNull(contractAddress, tx, msg) {
  if (contractAddress == null) {
    console.log("RESULT: FAIL " + msg);
    return 0;
  } else {
    var gas = eth.getTransaction(tx).gas;
    var gasUsed = eth.getTransactionReceipt(tx).gasUsed;
    if (gas == gasUsed) {
      console.log("RESULT: FAIL " + msg);
      return 0;
    } else {
      console.log("RESULT: PASS " + msg);
      return 1;
    }
  }
}


// -----------------------------------------------------------------------------
// Token Contract details
// -----------------------------------------------------------------------------
function printTokenContractStaticDetails() {
  if (tokenContractAddress != null && tokenContractAbi != null) {
    var contract = eth.contract(tokenContractAbi).at(tokenContractAddress);
    console.log("RESULT: token.symbol=" + contract.symbol());
    console.log("RESULT: token.name=" + contract.name());
    console.log("RESULT: token.decimals=" + contract.decimals());
    var startDate = contract.START_DATE();
    console.log("RESULT: token.START_DATE=" + startDate + " " + new Date(startDate * 1000).toUTCString());
    var endDate = contract.END_DATE();
    console.log("RESULT: token.END_DATE=" + endDate + " " + new Date(endDate * 1000).toUTCString());
    console.log("RESULT: token.START_SKO1_UNITS=" + contract.START_SKO1_UNITS());
    console.log("RESULT: token.END_SKO1_UNITS=" + contract.END_SKO1_UNITS());
    console.log("RESULT: token.MULT_FACTOR=" + contract.MULT_FACTOR());
    console.log("RESULT: token.unitsPerEthAt(START_DATE)/token.MULT_FACTOR=" + contract.unitsPerEthAt(contract.START_DATE()).div(contract.MULT_FACTOR()));
    console.log("RESULT: token.unitsPerEthAt(END_DATE)/token.MULT_FACTOR=" + contract.unitsPerEthAt(contract.END_DATE()).div(contract.MULT_FACTOR()));
    console.log("RESULT: token.MAX_USD_FUNDING=" + contract.MAX_USD_FUNDING());
    console.log("RESULT: token.MIN_CONTRIBUTION=" + contract.MIN_CONTRIBUTION().shift(-18));
  }
}

var dynamicDetailsFromBlock = 0;
function printTokenContractDynamicDetails() {
  if (tokenContractAddress != null && tokenContractAbi != null) {
    var contract = eth.contract(tokenContractAbi).at(tokenContractAddress);
    var decimals = contract.decimals();
    console.log("RESULT: token.owner=" + contract.owner());
    console.log("RESULT: token.newOwner=" + contract.newOwner());
    console.log("RESULT: token.mintingCompleted=" + contract.mintingCompleted());
    console.log("RESULT: token.fundingPaused=" + contract.fundingPaused());
    console.log("RESULT: token.totalSupply=" + contract.totalSupply().shift(-decimals));
    console.log("RESULT: token.unitsPerEth/token.MULT_FACTOR=" + contract.unitsPerEth().div(contract.MULT_FACTOR()));
    console.log("RESULT: token.totalUsdFunding=" + contract.totalUsdFunding());
    console.log("RESULT: token.maxUsdFundingReached=" + contract.maxUsdFundingReached());
    console.log("RESULT: token.usdPerHundredEth=" + contract.usdPerHundredEth());
    var softEndDate = contract.softEndDate();
    console.log("RESULT: token.softEndDate=" + softEndDate + " " + new Date(softEndDate * 1000).toUTCString());
    console.log("RESULT: token.ethersContributed=" + contract.ethersContributed().shift(-18));

    var latestBlock = eth.blockNumber;
    var i;

    var ownershipTransferredEvent = contract.OwnershipTransferred({}, { fromBlock: dynamicDetailsFromBlock, toBlock: latestBlock });
    i = 0;
    ownershipTransferredEvent.watch(function (error, result) {
      console.log("RESULT: OwnershipTransferred Event " + i++ + ": from=" + result.args._from + " to=" + result.args._to + " " +
        result.blockNumber);
    });
    ownershipTransferredEvent.stopWatching();

    var approvalEvent = contract.Approval({}, { fromBlock: dynamicDetailsFromBlock, toBlock: latestBlock });
    i = 0;
    approvalEvent.watch(function (error, result) {
      console.log("RESULT: Approval Event " + i++ + ": owner=" + result.args._owner + " spender=" + result.args._spender + " value=" +
        result.args._value.shift(-decimals) + " block=" + result.blockNumber);
    });
    approvalEvent.stopWatching();

    var transferEvent = contract.Transfer({}, { fromBlock: dynamicDetailsFromBlock, toBlock: latestBlock });
    i = 0;
    transferEvent.watch(function (error, result) {
      console.log("RESULT: Transfer Event " + i++ + ": from=" + result.args._from + " to=" + result.args._to +
        " value=" + result.args._value.shift(-decimals) + " block=" + result.blockNumber);
    });
    transferEvent.stopWatching();

    var usdRateSetEvent = contract.UsdRateSet({}, { fromBlock: dynamicDetailsFromBlock, toBlock: latestBlock });
    i = 0;
    usdRateSetEvent.watch(function (error, result) {
      console.log("RESULT: UsdRateSet Event " + i++ + ": _usdPerHundredEth=" + result.args._usdPerHundredEth + " block=" + result.blockNumber);
    });
    usdRateSetEvent.stopWatching();

    var tokensBoughtEvent = contract.TokensBought({}, { fromBlock: dynamicDetailsFromBlock, toBlock: latestBlock });
    i = 0;
    tokensBoughtEvent.watch(function (error, result) {
      // Note that there is a bug in `geth` displaying the value for newTotalSupply, so JSON.stringify(...) is used instead
      console.log("RESULT: TokensBought Event " + i++ + ": args=" + JSON.stringify(result.args) + " block=" + result.blockNumber);
    });
    tokensBoughtEvent.stopWatching();

    dynamicDetailsFromBlock = latestBlock + 1;
  }
}
