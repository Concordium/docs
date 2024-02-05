selector_to_html = {"a[href=\"../../../smart-contracts/tutorials/piggy-bank/testing.html#piggy-bank-testing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Testing the piggy bank smart contract<a class=\"headerlink\" href=\"#testing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the second <a class=\"reference internal\" href=\"../../../smart-contracts/tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment.\nSo far you have written a piggy bank smart contract in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming\nlanguage.\nThis part will focus on how you can write integration-tests for your piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> library.\nThe library simulates part of a blockchain <em>locally</em> to allow you to create one or more contracts and interact with them in the tests.</p>", "a[href=\"#the-piggy-bank-smart-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The piggy bank smart contract<a class=\"headerlink\" href=\"#the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you are going to build a simple smart contract modelling a\npiggy bank.\nIt should allow any account to insert CCD and only the owner to smash it,\ntaking all of the CCD inside.</p><p>In the <a class=\"reference internal\" href=\"../../../smart-contracts/tutorials/piggy-bank/writing.html#piggy-bank-writing\"><span class=\"std std-ref\">first part</span></a>, you will learn how to write the very basic piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language.</p>", "a[href=\"../../../smart-contracts/tutorials/piggy-bank/writing.html#piggy-bank-writing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Writing the piggy bank smart contract<a class=\"headerlink\" href=\"#writing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the first <a class=\"reference internal\" href=\"../../../smart-contracts/tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment. In this part you will focus on how to write a smart contract in the\n<a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language using the <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> library.</p>"}
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
