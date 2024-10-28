selector_to_html = {"a[href=\"../resources/glossary.html#term-dApp-connectivity\"]": "<dt id=\"term-dApp-connectivity\">dApp connectivity</dt><dd><p>The abiity of a wallet to interact with decentralized applications, dApps, on the blockchain. This allows users to access various services and platforms built on blockchain technology, such as DeFi, NFTs, and gaming.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"../resources/glossary.html#term-Seed-phrase\"]": "<dt id=\"term-Seed-phrase\">Seed phrase</dt><dd><p>A group of random words generated by the wallet that allows you to access the CCDs stored in it across devices or in case of non-functioning devices. Seed phrase is supported by Concordium Wallet for Mobile and CryptoX Concordium Wallet.</p></dd>", "a[href=\"../resources/glossary.html#term-Private-keys\"]": "<dt id=\"term-Private-keys\">Private keys</dt><dd><p>A random, secret string that is used in cryptography and cryptocurrency to prove ownership of an account and sign transactions to send, spend, delegate, and stake CCDs. A wallet consists of a set of public addresses and private keys. Anyone can deposit cryptocurrency in a public address, but funds cannot be removed from an address without the corresponding private key.</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
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
