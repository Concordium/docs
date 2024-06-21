selector_to_html = {"a[href=\"../resources/glossary.html#term-Private-keys\"]": "<dt id=\"term-Private-keys\">Private keys</dt><dd><p>A random, secret string that is used in cryptography and cryptocurrency to prove ownership of an account and sign transactions to send, spend, delegate, and stake CCDs. A wallet consists of a set of public addresses and private keys. Anyone can deposit cryptocurrency in a public address, but funds cannot be removed from an address without the corresponding private key.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity-Provider\"]": "<dt id=\"term-Identity-Provider\">Identity Provider</dt><dd><p>A person or organization that performs off-chain identification of users. Users are required to obtain an identity object from an identity provider in order to open an account on the Concordium Platform.</p></dd>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which a transaction is frozen. Examples of when cool-down periods apply include removing a validator and updating stake. The length of a cool-down period varies between transactions.</p></dd>", "a[href=\"../resources/glossary.html#term-Transfer-with-schedule\"]": "<dt id=\"term-Transfer-with-schedule\">Transfer with schedule</dt><dd><p>A special kind of transfer of CCD that makes the CCD amount available to the receiver only in a limited way until a specified point in time. The point in time is specified as part of a transfer. The CCD are immediately owned by the receiver account, and the transfer cannot be revoked, but the receiver cannot spend the CCD until the specified time.</p></dd>", "a[href=\"../resources/glossary.html#term-Secret-recovery-phrase\"]": "<dt id=\"term-Secret-recovery-phrase\">Secret recovery phrase</dt><dd><p>Also known as a seed phrase, recovery phrase, mnemonic phrase, mnemonic seed, or backup phrase. A group of random words generated by the wallet that allows you to access the CCDs stored in it across devices or in case of non-functioning devices. Secret recovery phrase is supported by Concordium Wallet for Mobile.</p></dd>", "a[href=\"../resources/glossary.html#term-Staking-pool\"]": "<dt id=\"term-Staking-pool\">Staking pool</dt><dd><p>A validator and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The validator runs a validator node on behalf of the staking pool to produce blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the validator produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the validator (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>"}
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
