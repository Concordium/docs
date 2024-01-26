selector_to_html = {"a[href=\"https://en.wikipedia.org/wiki/Ephesus\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/320px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p><b>Ephesus</b> was a city in Ancient Greece on the coast of Ionia, 3 kilometres (1.9\u00a0mi) southwest of present-day Sel\u00e7uk in \u0130zmir Province, Turkey. It was built in the 10th century BC on the site of Apasa, the former Arzawan capital, by Attic and Ionian Greeks. During the Classical Greek era, it was one of twelve cities that were members of the Ionian League. The city came under the control of the Roman Republic in 129 BC.</p>", "a[href^=\"https://en.wikipedia.org/wiki/Ephesus#\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/320px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p><b>Ephesus</b> was a city in Ancient Greece on the coast of Ionia, 3 kilometres (1.9\u00a0mi) southwest of present-day Sel\u00e7uk in \u0130zmir Province, Turkey. It was built in the 10th century BC on the site of Apasa, the former Arzawan capital, by Attic and Ionian Greeks. During the Classical Greek era, it was one of twelve cities that were members of the Ionian League. The city came under the control of the Roman Republic in 129 BC.</p>", "a[href=\"build-smart-contract.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Smart contract modifications<a class=\"headerlink\" href=\"#smart-contract-modifications\" title=\"Permalink to this headline\">#</a></h1><p>You are using the example contract from Concordium\u2019s examples and it\u2019s ready to use. If you want to use it as is you can do it for your project. But in this tutorial you will add a couple of things and update some functions to give more flexibility.</p><p>First, you will add a new struct called <code class=\"docutils literal notranslate\"><span class=\"pre\">TokenMetadata</span></code>. It needs to implement the <code class=\"docutils literal notranslate\"><span class=\"pre\">Serialize</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">SchemaType</span></code> traits for the sake of deserialization of the contract you need it. For those who are familiar with the Ethereum ecosystem it\u2019s like the ABI.</p>", "a[href=\"setup.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Setup the development environment<a class=\"headerlink\" href=\"#setup-the-development-environment\" title=\"Permalink to this headline\">#</a></h1><p>If you have done the NFT minting tutorial, you will already have most of the necessary setup, including the Concordium Wallet for Web and necessary tools for authoring smart contracts. Otherwise, see <a class=\"reference internal\" href=\"../setup-env.html#setup-env\"><span class=\"std std-ref\">Set up the development environment</span></a>. You need the following tools:</p>", "a[href=\"mint-xfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Mint and transfer semi-fungible token<a class=\"headerlink\" href=\"#mint-and-transfer-semi-fungible-token\" title=\"Permalink to this headline\">#</a></h1><p>You have a contract instance which means you have an empty state and are ready to mint some tokens! You will be using <a class=\"reference external\" href=\"https://gateway.pinata.cloud/ipfs/QmZ3939dLLFzvYZjFnkdqACe2n9TQA8Rx4efbjaYTXteeu\">this metadata</a> and minting 100 of <a class=\"reference external\" href=\"https://ipfs.io/ipfs/QmNqv1QnZw6j6N3ueqCA6VotciHUopRAvZqY8JBnheoLk6\">this cool image</a>.</p><p>Create a folder called <code class=\"docutils literal notranslate\"><span class=\"pre\">nft-artifacts</span></code> and create a JSON file called <code class=\"docutils literal notranslate\"><span class=\"pre\">mint-params.json</span></code> in the folder to execute these steps properly. In the JSON file, you are going to give the minting parameters to the MintParams which you worked on a little in the beginning.</p>"}
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
