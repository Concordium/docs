selector_to_html = {"a[href=\"#smashing-a-piggy-bank\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Smashing a piggy bank<a class=\"headerlink\" href=\"#smashing-a-piggy-bank\" title=\"Link to this heading\">#</a></h3><p>Now that you can insert CCD into a piggy bank, you are only left to define how to\nsmash one.\nRemember, you only want the owner of the piggy bank (smart contract\ninstance) to be able to call this and only if the piggy bank has not already\nbeen smashed.\nIt should set its state to be smashed and transfer all of its CCD to the owner.</p><p>Again you use the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.receive.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[receive]</span></code></a> macro to define the smash function:</p>", "a[href=\"../../general/contract-instances.html#action-descriptions-v0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Action descriptions<a class=\"headerlink\" href=\"#action-descriptions\" title=\"Link to this heading\">#</a></h2><p>A receive function returns a <em>description of actions</em> to be executed by\nthe host environment on the chain.</p><p>The possible actions that a contract can produce are:</p>", "a[href=\"#piggy-bank-contract\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Piggy bank contract<a class=\"headerlink\" href=\"#piggy-bank-contract\" title=\"Link to this heading\">#</a></h2><p>The contract you are going to build in this tutorial is going to act as a classic\npiggy bank. Everyone should be able to put money in the form of CCD into it, but only the owner\ncan smash it and retrieve the CCD inside. Once the piggy bank has been\nsmashed, it should not be possible to add CCD to it.</p><p>The piggy-bank smart contract is going to contain a function for setting up a\nnew piggy bank and two functions for updating a piggy bank; one is for everyone\nto use for inserting CCD, the other is for the owner to smash the piggy bank and\nprevent further interaction.</p>", "a[href=\"../../../net/guides/create-account.html#create-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Create an account<a class=\"headerlink\" href=\"#create-an-account\" title=\"Link to this heading\">#</a></h1><p>If you are using Concordium Legacy Wallet or Desktop Wallet, when you created your <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identity</span></a>, it came with an <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Initial-Account\"><span class=\"xref std std-term\">initial account</span></a>. The initial account is a special account that the <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a> submits\nto the chain. When you already have an identity, you can create more <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> with that identity yourself.</p><p>If you are using Concordium Wallet for Web or Concordium Wallet for Mobile, no initial account was created when you created your <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identity</span></a>. You create all <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> related to your identities.</p>", "a[href=\"../../../net/nodes/windows.html#windows-node\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Windows nodes<a class=\"headerlink\" href=\"#windows-nodes\" title=\"Link to this heading\">#</a></h1><p>This section contains topics that describe running a node with Windows.</p>", "a[href=\"index.html#piggy-bank-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The piggy bank smart contract<a class=\"headerlink\" href=\"#the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you are going to build a simple smart contract modelling a\npiggy bank.\nIt should allow any account to insert CCD and only the owner to smash it,\ntaking all of the CCD inside.</p><p>In the <a class=\"reference internal\" href=\"../../../smart-contracts/tutorials/piggy-bank/writing.html#piggy-bank-writing\"><span class=\"std std-ref\">first part</span></a>, you will learn how to write the very basic piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language.</p>", "a[href=\"../../../smart-contracts/guides/setup-contract.html#setup-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up a smart contract project<a class=\"headerlink\" href=\"#set-up-a-smart-contract-project\" title=\"Link to this heading\">#</a></h1><p>This guide documents two different options (<em>from a template</em> or <em>from scratch</em>) to create a new Concordium smart contract project.\nThe <em>from a template</em> option is available for <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code> version 2.2.0 or greater. It provides you with some\nsmart contract templates. Choose the template that best fits your project scope.\nThe <em>from scratch</em> option guides you through the process when you want to start a new project without any boilerplate code.</p>", "a[href=\"#the-receive-macro\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The <code class=\"docutils literal notranslate\"><span class=\"pre\">#[receive(...)]</span></code> macro<a class=\"headerlink\" href=\"#the-receive-macro\" title=\"Link to this heading\">#</a></h3><p>In Rust, receive functions can be specified using the procedural macro\n<a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.receive.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[receive]</span></code></a>, which, like <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.init.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[init]</span></code></a>, is used to annotate a function and sets up an\nexternal function and supplies you with an interface for accessing the context.\nBut, unlike the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.init.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[init]</span></code></a> macro, the function for <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.receive.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[receive]</span></code></a> is also supplied with\na mutable reference to the current state of the instance:</p>", "a[href=\"#specifying-the-state\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Specifying the state<a class=\"headerlink\" href=\"#specifying-the-state\" title=\"Link to this heading\">#</a></h2><p>To implement a piggy bank you need to keep track of the amount of CCD it holds,\nand you need to know whether it has been smashed. The blockchain will take care\nof the first task for you since the chain keeps track of the balance of each smart-contract\ninstance. Therefore, you only need to maintain whether the piggy bank has been smashed,\nwhich you do as part of the smart contract <em>state</em>.</p><p>In Rust you represent this state as an enum with a variant for the piggy bank\nbeing intact and one for it being smashed:</p>", "a[href=\"#preparation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Preparation<a class=\"headerlink\" href=\"#preparation\" title=\"Link to this heading\">#</a></h2><p>Before you start, make sure to have the necessary tooling to build Rust\ncontracts.\nThe guide <a class=\"reference internal\" href=\"../../../smart-contracts/guides/setup-tools.html#setup-tools\"><span class=\"std std-ref\">Install tools for development</span></a> shows you how to do this.\nAlso, make sure to have a text editor for writing Rust.</p><p>You also need to set up a new smart contract project.\nFollow the guide <a class=\"reference internal\" href=\"../../../smart-contracts/guides/setup-contract.html#setup-contract\"><span class=\"std std-ref\">Set up a smart contract project</span></a> and return to this point afterwards.</p>", "a[href=\"testing.html#piggy-bank-testing-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Testing the piggy bank smart contract<a class=\"headerlink\" href=\"#testing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the second <a class=\"reference internal\" href=\"../../../smart-contracts/tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment.\nSo far you have written a piggy bank smart contract in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming\nlanguage.\nThis part will focus on how you can write unit tests for your piggy bank smart\ncontract and how to setup and locally simulate an invocation of a smart\ncontract.</p>", "a[href=\"#the-init-macro\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The <code class=\"docutils literal notranslate\"><span class=\"pre\">#[init]</span></code> macro<a class=\"headerlink\" href=\"#the-init-macro\" title=\"Link to this heading\">#</a></h3><p>In <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> an init function can be specified as a regular function that is annotated\nwith a procedural macro from <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> called <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/attr.init.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">#[init]</span></code></a>.\nThis allows you to create a new piggy bank as follows:</p>", "a[href=\"../../../net/nodes/ubuntu.html#ubuntu-node\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Ubuntu nodes<a class=\"headerlink\" href=\"#ubuntu-nodes\" title=\"Link to this heading\">#</a></h1><p>This section contains topics that describe running a node with Ubuntu.</p>", "a[href=\"../../../net/nodes/macos.html#macos-node\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">MacOS nodes<a class=\"headerlink\" href=\"#macos-nodes\" title=\"Link to this heading\">#</a></h1><p>This section contains topics that describe running a node with MacOS.</p>", "a[href=\"#writing-the-piggy-bank-smart-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Writing the piggy bank smart contract<a class=\"headerlink\" href=\"#writing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the first <a class=\"reference internal\" href=\"index.html#piggy-bank-v0\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment. In this part you will focus on how to write a smart contract in the\n<a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language using the <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> library.</p>", "a[href=\"#bring-in-the-standard-library\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Bring in the standard library<a class=\"headerlink\" href=\"#bring-in-the-standard-library\" title=\"Link to this heading\">#</a></h2><p>The source code of your smart contract is going to be in the <code class=\"docutils literal notranslate\"><span class=\"pre\">src</span></code> directory,\nwhich already contains the file <code class=\"docutils literal notranslate\"><span class=\"pre\">lib.rs</span></code>, assuming you follow the above guide\nto set up your project.\nOpen <code class=\"docutils literal notranslate\"><span class=\"pre\">src/lib.rs</span></code> in your editor and you\u2019ll see some code for <a class=\"reference internal\" href=\"testing.html#piggy-bank-testing-v0\"><span class=\"std std-ref\">writing tests</span></a>,\nwhich you can delete for now. You will come back to tests later in this tutorial.</p><p>First, bring everything from the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/index.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code></a> library into scope\nby adding the line:</p>", "a[href=\"#set-up-a-piggy-bank\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Set up a piggy bank<a class=\"headerlink\" href=\"#set-up-a-piggy-bank\" title=\"Link to this heading\">#</a></h2><p>Now you will write the function to set up a new piggy bank, which in turn means\nspecifying the init function for a smart contract.\nA smart contract must specify an init function, which is called when new\ninstances of the contract are created, and is used to set up the initial state of\nthe contract instance.</p>", "a[href=\"#inserting-ccd\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Inserting CCD<a class=\"headerlink\" href=\"#inserting-ccd\" title=\"Link to this heading\">#</a></h3><p>The first interaction you will specify for your piggy bank is how to insert CCD into it.\nYou start by defining a receive function as:</p>", "a[href=\"../../../net/references/concordium-client.html#concordium-client-import-accounts-keys\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Import accounts and keys from the Wallet apps<a class=\"headerlink\" href=\"#import-accounts-and-keys-from-the-wallet-apps\" title=\"Link to this heading\">#</a></h4><p>Import the keys of one or more accounts from a JSON file exported from the\nConcordium Legacy Wallet.</p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">--name</span></code> option selects which account to import and imports it with this\nname. If it\u2019s omitted, all accounts in the file are imported under their\nexisting names.</p>", "a[href=\"#define-interaction-with-piggy-banks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Define interaction with piggy banks<a class=\"headerlink\" href=\"#define-interaction-with-piggy-banks\" title=\"Link to this heading\">#</a></h2><p>You have now defined how instances of your smart contract are created, and the\nsmart contract is in principle a valid contract.\nHowever, you would also like to define how to interact with instances of your\ncontract, specifically how to add CCD to it and how to smash a piggy bank.</p><p>A smart contract can expose zero or more functions for interacting with an\ninstance.\nThese functions are called receive functions. They can read and\nwrite to the state of the instance, read the state of the blockchain and\nreturn a description of actions to be executed on-chain.</p>", "a[href=\"../../../smart-contracts/guides/setup-tools.html#setup-tools\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install tools for development<a class=\"headerlink\" href=\"#install-tools-for-development\" title=\"Link to this heading\">#</a></h1><p>Before you can start developing smart contracts, you need to setup the\nenvironment.</p><p>You can also watch a video about installing the smart contract tools.</p>", "a[href=\"../../../net/nodes/docker.html#docker-node\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Docker nodes<a class=\"headerlink\" href=\"#docker-nodes\" title=\"Link to this heading\">#</a></h1><p>This section contains topics that describe running a node with Docker.</p>"}
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
