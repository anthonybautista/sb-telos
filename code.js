const NFT = '[{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addMaxMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"addSmolAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"externalMintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"externalRevokeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"merkleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"revokeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
const NFT_ADDRESS = "0xd81E57bc9e739cff9e20231d6391906611f99704";
let provider, signer, currentNetwork, connectedContract, merkleProof;
let account;
let tokenIds = [];

const defaultNetwork = "0x28",
    { ethereum: ethereum } = window,
    networks = { "0x28": { chainId: "0x28", chainName: "Telos", nativeCurrency: { decimals: 18, symbol: "TELOS" }, rpcUrls: ["https://rpc1.us.telos.net/evm"], blockExplorerUrls: ["https://teloscan.io"] } };
const RPC = 'https://rpc1.eu.telos.net/evm';

async function checkWeb3() {
    if (void 0 !== window.ethereum) {
        console.log("Web3 provider is installed!"), (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
        try {
            account = await signer.getAddress();
            await checkNetwork(), await checkAccount(), $("button#connect").html("Connected").css("background", "red"), $("button#connect").prop("disabled", !0);
            await getTokens(account);
        } catch (t) {
            console.log(t);
        }
    } else console.log("Please install MetaMask or another web3 provider!"), alert("Please install MetaMask or another web3 provider!");
}
async function connect() {
    console.log("Connecting..."), $("p#mintError").text(""), $("button#connect").prop("disabled", !0);
    try {
        await ethereum.request({ method: "eth_requestAccounts" }), await checkNetwork(), await checkAccount(), console.log("Connected."), $("button#connect").html("Connected").css("background", "red");
        account = await signer.getAddress();
        await getTokens(account);
    } catch (t) {
        $("button#connect").prop("disabled", !1), 4001 === t.code ? console.log("Please connect to MetaMask.") : console.error(t);
    }
}
async function checkNetwork() {
    ethereum.on("chainChanged", handleChainChanged);
    let t = await ethereum.request({ method: "eth_chainId" });
    void 0 !== networks[t]
        ? (currentNetwork = networks[t])
        : ethereum.isMetaMask
            ? (await setupNetwork(defaultNetwork), t === (await ethereum.request({ method: "eth_chainId" })) && console.log("Please switch to one of the supported networks."))
            : console.log("Please switch to one of the supported networks.");
}
async function checkAccount() {
    await ethereum.request({ method: "eth_accounts" });
    ethereum.on("accountsChanged", handleAccountsChanged);
}
async function setupNetwork(t) {
    try {
        await ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: networks[t].chainId }] });
    } catch (e) {
        if (4902 === e.code)
            try {
                await ethereum.request({ method: "wallet_addEthereumChain", params: [networks[t]] });
            } catch (t) {
                4001 === t.code ? console.log("Please approve the Telos network.") : console.error(t);
            }
        else 4001 === e.code ? console.log("Telos configuration already present.") : console.error(e);
    }
    (provider = new ethers.providers.Web3Provider(window.ethereum)), (signer = provider.getSigner());
}
async function handleChainChanged(t) {
    console.log("Chain changed to " + t),
        $("p#mintError").text(""),
        (currentNetwork = networks[t]),
        (provider = new ethers.providers.Web3Provider(window.ethereum)),
        (signer = provider.getSigner()),
    void 0 !== currentNetwork || (console.log("Please switch to one of the supported networks."), $("p#mintError").text("Wrong Network"));
}
async function handleAccountsChanged(t) {
    console.log("Account changed to " + t), t.length;
    signer = provider.getSigner()
    account = await signer.getAddress();
    await getTokens(account);
}
const getMinted = async () => {
        const t = new ethers.providers.JsonRpcProvider(RPC);
        connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
        let supply = Number(await connectedContract.totalSupply());
        let minted = Number(await connectedContract.minted());
        let max = Number(await connectedContract.maxMintable());
        max = supply + (max - minted);
        $("span#eggsMinted").text(`${supply}`), $("span#eggsMax").text(`${max}`), minted === max && $("button#mintEgg").prop("disabled", !0);
}

const getTokens = async (address) => {
    await getMyBalances();
    const t = new ethers.providers.JsonRpcProvider(RPC);
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
    tokenIds = await connectedContract.walletOfOwner(account);

    await displayTokens();
}

const displayTokens = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, t);
    $("div#display").empty();
    if (tokenIds.length > 0) {
        for (i = 0; i < tokenIds.length; i++) {
            let tokenID = tokenIds[i];
            let img = `https://gateway.pinata.cloud/ipfs/QmWtSeBMNKEkmWuXmDTTuhck93gjkPFZT3679Cezo7Emqb`;
            $("div#display").append(`<img src="${img}" id="egg${tokenID}" class="nft"/>`);
        }
    } else {
            $("div#display").text("You don't have a Smolrun Soulbound Token!");
    }

}

const getMyBalances = async () => {
    $.ajax({
        url: `https://merkletree.anthonybautist2.repl.co/${account}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "GET", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {},
        success: function (result) {
            if (result.whitelist) {
                $("span#wl").text(`Eligible`).css('color', 'green');
            } else {
                $("span#wl").text(`Not Eligible`).css('color', 'darkred');
            }

            merkleProof = result.proof;
        },
        error: function () {
            console.log("error");
        }
    });
}

const mintBean = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
        try {
            if (ethereum) {
                $("p#mintError").text("");
                let n = await connectedContract.mint();
                $("p#mintError").text("Minting...");
                await n.wait();
                let a = `<a href='https://teloscan.io/tx/${n.hash}' target="_blank" rel="noreferrer">\n                                  View Transaction</a>`;
                $("p#mintError").html(`Successfully minted: ${a}`), getMinted();
                getTokens(account);
            } else console.log("Ethereum object doesn't exist!"), $("p#mintError").text("Connect wallet and refresh!");
        } catch (t) {
            console.log(t), $("p#mintError").text(`${t.data.message}`);
        }
};

// const mintBean = async () => {
//     signer = provider.getSigner()
//     connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);
//     try {
//         if (ethereum) {
//             $("p#mintError").text("");
//             let n = await connectedContract.merkleMint(merkleProof);
//             $("p#mintError").text("Minting...");
//             await n.wait();
//             let a = `<a href='https://teloscan.io/tx/${n.hash}' target="_blank" rel="noreferrer">\n                                  View Transaction</a>`;
//             $("p#mintError").html(`Successfully minted: ${a}`), getMinted();
//             await getTokens(account);
//         } else console.log("Ethereum object doesn't exist!"), $("p#mintError").text("Connect wallet and refresh!");
//     } catch (t) {
//         console.log(t), $("p#mintError").text(`${t.data.message}`);
//     }
// };

$(function () {
    getMinted(),
    $("button#connect")
        .off()
        .on("click", function (t) {
            t.preventDefault(), connect();
        }),
    $("button#mintButton")
        .off()
        .on("click", function (t) {
            t.preventDefault(), mintBean();
        }),
    // $("div#display").off().on('click', 'img', function () {
    //     $(this).siblings().css( "border", "" );
    //     $(this).css("border", "solid black 2px");
    //     $("input#sendInput").val($(this).attr('id').substring(3));
    // })
    checkWeb3();
});