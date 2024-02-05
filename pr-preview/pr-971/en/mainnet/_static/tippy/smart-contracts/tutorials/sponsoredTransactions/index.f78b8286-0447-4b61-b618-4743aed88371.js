selector_to_html = {"a[href=\"#what-are-the-use-cases-of-sponsored-transactions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What are the use cases of sponsored transactions?<a class=\"headerlink\" href=\"#what-are-the-use-cases-of-sponsored-transactions\" title=\"Link to this heading\">#</a></h2><p>Sponsored transactions are a useful tool for third-party service providers to onboard conventional clients/users that\ndon\u2019t want to acquire crypto (such as CCD) from an exchange.\nThe third-party can have a traditional fiat channel open (off-chain) with the conventional clients/users to charge for its service of\noffering to submit transactions on behalf of the user on-chain.The third-party\nservice provider has its own wallet funded with some CCD at the backend to submit the user\u2019s transaction on-chain.\nThe third-party pays the transaction fee to execute the transaction on-chain.</p>", "a[href=\"#what-is-the-difference-between-a-normal-transaction-vs-a-sponsored-transaction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What is the difference between a normal transaction vs. a sponsored transaction?<a class=\"headerlink\" href=\"#what-is-the-difference-between-a-normal-transaction-vs-a-sponsored-transaction\" title=\"Link to this heading\">#</a></h2><p>A normal transaction sent to a smart contract is signed by the user\u2019s wallet and authorizes the blockchain to subtract the transaction fee from the user\u2019s wallet as well as to execute a specific action. For example, the action could be to transfer some tokens from the user\u2019s address to another address.</p><p>The user creates a normal transaction by signing its <code class=\"docutils literal notranslate\"><span class=\"pre\">account</span></code> address, its <code class=\"docutils literal notranslate\"><span class=\"pre\">nonce</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">action</span></code>. The <code class=\"docutils literal notranslate\"><span class=\"pre\">nonce</span></code> increases sequentially every time the user sends a transaction to the blockchain to prevent replay attacks. The nonce is of type u64 (8 bytes) and by design &gt;= 1.</p>", "a[href=\"#a-sponsored-transactions-dapp\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">A Sponsored Transactions dApp<a class=\"headerlink\" href=\"#a-sponsored-transactions-dapp\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you are going to get familiar with how to implement a sponsored transaction mechanism in a smart contract, how to sign messages in a wallet and verify the signature in the smart contract,\nhow to send a transaction from a back-end server to the blockchain, and how to connect your Concordium Wallet for Mobile via walletConnect to the frontend.</p><p>The dApp consists of three components that you will explore as part of this tutorial:</p>", "a[href=\"#what-are-sponsored-transactions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What are sponsored transactions?<a class=\"headerlink\" href=\"#what-are-sponsored-transactions\" title=\"Link to this heading\">#</a></h2><p>Sponsored transactions are a mechanism for a sponsor address (third-party) to submit a transaction\nto a smart contract on behalf of a sponsoree account (user/client). The user/client\nshould sign its intended action in the Concordium Wallet for Web (or Concordium Wallet for Mobile that uses WalletConnect) to authorize the third-party to execute a specific action on its behalf.\nAfter the user/client signed its action, the signature is communicated to the third-party. The third-party account (invoker to the smart contract)\npays for the transaction fees and submits the transaction on-chain. The signature is verified in the smart\ncontract to ensure the action was authorized by the user/client.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
