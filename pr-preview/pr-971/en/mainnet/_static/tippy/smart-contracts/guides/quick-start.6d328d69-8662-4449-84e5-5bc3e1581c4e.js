selector_to_html = {"a[href=\"../../net/references/concordium-client.html#concordium-client-import-accounts-keys\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Import accounts and keys from the Wallet apps<a class=\"headerlink\" href=\"#import-accounts-and-keys-from-the-wallet-apps\" title=\"Link to this heading\">#</a></h4><p>Import the keys of one or more accounts from a JSON file exported from the\nConcordium Legacy Wallet.</p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">--name</span></code> option selects which account to import and imports it with this\nname. If it\u2019s omitted, all accounts in the file are imported under their\nexisting names.</p>", "a[href=\"../../net/guides/export-key.html#export-key\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Export a private key<a class=\"headerlink\" href=\"#export-a-private-key\" title=\"Link to this heading\">#</a></h1><p>In certain situations, such as testing interaction with smart contracts, you may need to export your private key for an account in your wallet. The file format of the key export is specifically for <a class=\"reference internal\" href=\"../../net/references/concordium-client.html#concordium-client-import-accounts-keys\"><span class=\"std std-ref\">import</span></a> to <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code>. If you just copy the key to the clipboard, it\u2019s just the key itself and can be used for other purposes.</p>", "a[href=\"../../net/guides/export-import.html#export-import\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Make a backup of identities, accounts, and addresses<a class=\"headerlink\" href=\"#make-a-backup-of-identities-accounts-and-addresses\" title=\"Link to this heading\">#</a></h1><p>To make sure that you have a backup of your accounts, identities, and addresses, Concordium strongly recommends that if you are using Concordium Legacy Wallet or Desktop Wallet, you export the data to a file you can store in a safe location. The backup will ensure that you can recover your accounts, identities, and addresses if your Wallet database becomes damaged or if, for some reason, you can\u2019t access the Wallet.</p>", "a[href=\"deploy-module.html#deploy-module\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Deploy a smart contract module<a class=\"headerlink\" href=\"#deploy-a-smart-contract-module\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to deploy a smart contract module <em>on-chain</em> and\nhow to name it.</p>", "a[href=\"initialize-contract.html#initialize-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Initialize a smart contract instance<a class=\"headerlink\" href=\"#initialize-a-smart-contract-instance\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to initialize a smart contract from a deployed\nsmart contract module with parameters in JSON or binary format.\nAdditionally, it will show how to name an instance.</p><p>You can also watch a video about initializing smart contract instances.</p>", "a[href=\"../best-practices/development.html#sc-development-best-practices\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Development best practices<a class=\"headerlink\" href=\"#development-best-practices\" title=\"Link to this heading\">#</a></h1><p>This document provides guidelines for developing smart contracts, including best practices for smart contract development, audit, information about common pitfalls and security vulnerabilities, and how to avoid them.</p><p>It starts with some general thoughts about smart contract development and then gives more details about writing smart contracts in Rust for Concordium.</p>", "a[href=\"../../net/installation/downloads.html#concordium-node-and-client-download\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Client 6.2.1-0<a class=\"headerlink\" href=\"#concordium-client-client-version\" title=\"Link to this heading\">#</a></h2>", "a[href=\"build-schema.html#build-schema\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Build a contract schema<a class=\"headerlink\" href=\"#build-a-contract-schema\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to build a smart contract schema, how to export it\nto a file, and/or embed the schema into the smart contract module, all using\n<code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code>.</p>", "a[href=\"../../net/browser-wallet/setup-browser-wallet.html#setup-browser-wallet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up the Concordium Wallet for Web<a class=\"headerlink\" href=\"#set-up-the-bw\" title=\"Link to this heading\">#</a></h1><p>The Concordium Wallet for Web is a digital wallet that enables you to create and manage your Concordium\n<a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> and to create transactions, such as sending CCD.</p><p>To learn more about identities and accounts, see <a class=\"reference internal\" href=\"../../net/concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/references/manage-accounts.html#managing-accounts\"><span class=\"std std-ref\">accounts</span></a>.</p>", "a[href=\"setup-tools.html#setup-tools\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install tools for development<a class=\"headerlink\" href=\"#install-tools-for-development\" title=\"Link to this heading\">#</a></h1><p>Before you can start developing smart contracts, you need to setup the\nenvironment.</p><p>You can also watch a video about installing the smart contract tools.</p>", "a[href=\"../../net/mobile-wallet-gen2/setup-mobile-wallet.html#setup-g2-mobile-wallet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up the Concordium Wallet for Mobile<a class=\"headerlink\" href=\"#set-up-the-mw-gen2\" title=\"Link to this heading\">#</a></h1><p>The Concordium Wallet for Mobile is a digital <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Wallet\"><span class=\"xref std std-term\">wallet</span></a> that enables you to create and manage your Concordium\n<a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> and to create transactions such as sending CCD, <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Shielding\"><span class=\"xref std std-term\">shielding</span></a> and <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Unshielding\"><span class=\"xref std std-term\">unshielding</span></a> CCD,\nand sending <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Shielded-transfer\"><span class=\"xref std std-term\">shielded transactions</span></a>.</p><p>To learn more about identities and accounts, see <a class=\"reference internal\" href=\"../../net/concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/references/manage-accounts.html#managing-accounts\"><span class=\"std std-ref\">accounts</span></a>.</p>", "a[href=\"interact-instance.html#interact-instance\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Interact with a smart contract instance<a class=\"headerlink\" href=\"#interact-with-a-smart-contract-instance\" title=\"Link to this heading\">#</a></h1><p>This guide will show you, how to interact with a smart contract instance, which\nmeans triggering a receive function that, possibly, updates the state of the\ninstance.</p><p>You can also watch a video about how to update a smart contact instance.</p>", "a[href=\"#concordium-smart-contracts-quick-start-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium smart contracts quick start guide<a class=\"headerlink\" href=\"#concordium-smart-contracts-quick-start-guide\" title=\"Link to this heading\">#</a></h1><p>This guide is intended to be used by experienced developers who want to get up and running quickly with a smart contract deployed on chain with which they can interact.</p><p>Before starting, it is a good idea to read the <a class=\"reference internal\" href=\"../best-practices/development.html#sc-development-best-practices\"><span class=\"std std-ref\">Smart contracts best practices</span></a>.</p>", "a[href=\"../general/develop-contracts.html#writing-smart-contracts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Develop smart contracts in Rust<a class=\"headerlink\" href=\"#develop-smart-contracts-in-rust\" title=\"Link to this heading\">#</a></h1><p>On the Concordium blockchain smart contracts are deployed as Wasm modules, but\nWasm is designed primarily as a compilation target and is not convenient to\nwrite by hand.\nInstead you can write your smart contracts in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language, which\nhas good support for compiling to Wasm.</p><p>Smart contracts do not have to be written in Rust.\nThis is simply the first SDK provided.\nManually written Wasm, or Wasm compiled from C, C++, <a class=\"reference external\" href=\"https://github.com/AssemblyScript\">AssemblyScript</a>, and\nothers, is equally valid on the chain, as long as it adheres to the <a class=\"reference internal\" href=\"../general/contract-module.html#wasm-limitations\"><span class=\"std std-ref\">Wasm\nlimitations Concordium imposes</span></a>.</p>", "a[href=\"../../net/mobile-wallet/setup-mobile-wallet.html#setup-mobile-wallet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up the Concordium Legacy Wallet<a class=\"headerlink\" href=\"#set-up-the-mw-gen1\" title=\"Link to this heading\">#</a></h1><p>The Concordium Legacy Wallet is a digital <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Wallet\"><span class=\"xref std std-term\">wallet</span></a> that enables you to create and manage your Concordium\n<a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> and to create transactions such as sending CCD, <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Shielding\"><span class=\"xref std std-term\">shielding</span></a> and <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Unshielding\"><span class=\"xref std std-term\">unshielding</span></a> CCD,\nand sending <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Shielded-transfer\"><span class=\"xref std std-term\">shielded transactions</span></a>.</p><p>To learn more about identities and accounts, see <a class=\"reference internal\" href=\"../../net/concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">identities</span></a> and <a class=\"reference internal\" href=\"../../net/references/manage-accounts.html#managing-accounts\"><span class=\"std std-ref\">accounts</span></a>.</p>", "a[href=\"../general/develop-contracts.html#working-with-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Work with parameters<a class=\"headerlink\" href=\"#work-with-parameters\" title=\"Link to this heading\">#</a></h3><p>Parameters to the init and receive functions are represented as byte arrays.\nWhile the byte arrays can be used directly, they can also be deserialized into\nstructured data.</p><p>The simplest way to deserialize a parameter is through the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/trait.Get.html#tymethod.get\">get()</a> function of\nthe <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/trait.Get.html\">Get</a> trait.</p>", "a[href=\"setup-contract.html#setup-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up a smart contract project<a class=\"headerlink\" href=\"#set-up-a-smart-contract-project\" title=\"Link to this heading\">#</a></h1><p>This guide documents two different options (<em>from a template</em> or <em>from scratch</em>) to create a new Concordium smart contract project.\nThe <em>from a template</em> option is available for <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code> version 2.2.0 or greater. It provides you with some\nsmart contract templates. Choose the template that best fits your project scope.\nThe <em>from scratch</em> option guides you through the process when you want to start a new project without any boilerplate code.</p>"}
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
