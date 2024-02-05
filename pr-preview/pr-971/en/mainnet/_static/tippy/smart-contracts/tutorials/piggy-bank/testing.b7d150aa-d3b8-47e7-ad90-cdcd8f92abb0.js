selector_to_html = {"a[href=\"../../guides/custom-errors.html#custom-errors\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Return custom errors<a class=\"headerlink\" href=\"#return-custom-errors\" title=\"Link to this heading\">#</a></h1><p>This guide shows how to return custom errors from your Rust smart contract.</p>", "a[href=\"../../guides/integration-test-contract.html#integration-test-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Integration test a contract in Rust<a class=\"headerlink\" href=\"#integration-test-a-contract-in-rust\" title=\"Link to this heading\">#</a></h1><p>This guide describes how to write <em>integration tests</em> in Rust for your smart contracts using the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\">Concordium smart contract testing library</a>.</p>", "a[href=\"#preparation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Preparation<a class=\"headerlink\" href=\"#preparation\" title=\"Link to this heading\">#</a></h2><p>Before you start, make sure to have the necessary tooling to build Rust\ncontracts. The guide <a class=\"reference internal\" href=\"../setup-env.html#setup-env\"><span class=\"std std-ref\">Setup the development environment</span></a> shows you how to do this.\nAlso, make sure to have a text editor setup to write Rust.</p><p>Since you are going to extend the smart contract code written in the <a class=\"reference internal\" href=\"writing.html#piggy-bank-writing\"><span class=\"std std-ref\">previous\npart</span></a>, either follow the previous part or copy the complete\nexample code for part 1 from <a class=\"reference external\" href=\"https://github.com/Concordium/concordium-rust-smart-contracts/blob/main/examples/piggy-bank/part1/src/lib.rs\">GitHub</a>.</p>", "a[href=\"index.html#piggy-bank\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">The piggy bank smart contract<a class=\"headerlink\" href=\"#the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you are going to build a simple smart contract modelling a\npiggy bank.\nIt should allow any account to insert CCD and only the owner to smash it,\ntaking all of the CCD inside.</p><p>In the <a class=\"reference internal\" href=\"writing.html#piggy-bank-writing\"><span class=\"std std-ref\">first part</span></a>, you will learn how to write the very basic piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language.</p>", "a[href=\"#testing-instantiation-of-a-piggy-bank\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Testing instantiation of a piggy bank<a class=\"headerlink\" href=\"#testing-instantiation-of-a-piggy-bank\" title=\"Link to this heading\">#</a></h2><p>The first test is to verify that the piggy bank contract can be initialized correctly.\nWriting it also teaches you the basics of using the testing library.</p><p>Start by creating three constants that you will use in most of the upcoming test cases.</p>", "a[href=\"#add-a-test-module\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Add a test module<a class=\"headerlink\" href=\"#add-a-test-module\" title=\"Link to this heading\">#</a></h2><p>Since a smart contract module is a regular Rust library, you can test it as\none would test any library and add integration tests in the <code class=\"docutils literal notranslate\"><span class=\"pre\">tests</span></code> folder.</p><p>Create the folder <code class=\"docutils literal notranslate\"><span class=\"pre\">tests</span></code> in the root of your project and add the file <code class=\"docutils literal notranslate\"><span class=\"pre\">tests.rs</span></code> inside it.</p>", "a[href=\"../setup-env.html#setup-env\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Setup the development environment<a class=\"headerlink\" href=\"#setup-the-development-environment\" title=\"Link to this heading\">#</a></h1><p>Before starting the smart contract tutorials, you must prepare your development environment by installing a number of tools.</p>", "a[href=\"#adding-the-testing-library\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding the testing library<a class=\"headerlink\" href=\"#adding-the-testing-library\" title=\"Link to this heading\">#</a></h2><p>Start by adding the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> library to the <code class=\"docutils literal notranslate\"><span class=\"pre\">Cargo.toml</span></code> located in the project root.\nYou should add it under the section <code class=\"docutils literal notranslate\"><span class=\"pre\">[dev-dependencies]</span></code>, which are dependencies only needed during development, as it is only needed during testing.\nThe library requires the Rust edition <code class=\"docutils literal notranslate\"><span class=\"pre\">2021</span></code> or greater, which you must also set:</p>", "a[href=\"#test-smashing-a-piggy-bank\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Test smashing a piggy bank<a class=\"headerlink\" href=\"#test-smashing-a-piggy-bank\" title=\"Link to this heading\">#</a></h2><p>Testing <code class=\"docutils literal notranslate\"><span class=\"pre\">smash</span></code> will follow the same pattern, but this time you will also use the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/struct.Chain.html#method.contract_invoke\"><code class=\"docutils literal notranslate\"><span class=\"pre\">contract_invoke</span></code></a> method to invoke the <code class=\"docutils literal notranslate\"><span class=\"pre\">view</span></code> receive function and check whether the state is smashed.</p><p>Start by creating a new test case, <code class=\"docutils literal notranslate\"><span class=\"pre\">test_smash_intact</span></code>, setup the chain and contract with the helper function, and update the contract by calling the <code class=\"docutils literal notranslate\"><span class=\"pre\">smash</span></code> entrypoint.</p>", "a[href=\"writing.html#piggy-bank-writing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Writing the piggy bank smart contract<a class=\"headerlink\" href=\"#writing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the first <a class=\"reference internal\" href=\"index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment. In this part you will focus on how to write a smart contract in the\n<a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language using the <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> library.</p>", "a[href=\"#testing-cause-of-rejection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Testing cause of rejection<a class=\"headerlink\" href=\"#testing-cause-of-rejection\" title=\"Link to this heading\">#</a></h2><p>You want to test that the piggy bank rejects in certain contexts, for example\nwhen someone besides the owner of the smart contract tries to smash it.</p><p>The test should:</p>", "a[href=\"#test-inserting-ccd-into-a-piggy-bank\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Test inserting CCD into a piggy bank<a class=\"headerlink\" href=\"#test-inserting-ccd-into-a-piggy-bank\" title=\"Link to this heading\">#</a></h2><p>Next, you should test the different functions for interacting with a piggy bank.\nYou will start by testing the <code class=\"docutils literal notranslate\"><span class=\"pre\">insert</span></code> entrypoint on an intact piggy bank contract.</p><p>Create a new test case named <code class=\"docutils literal notranslate\"><span class=\"pre\">test_insert_intact</span></code>, and use the helper method <code class=\"docutils literal notranslate\"><span class=\"pre\">create_chain_and_contract</span></code> from the previous section to get a chain with two accounts and an initialized piggy bank contract.</p>", "a[href=\"#testing-the-piggy-bank-smart-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Testing the piggy bank smart contract<a class=\"headerlink\" href=\"#testing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the second <a class=\"reference internal\" href=\"index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment.\nSo far you have written a piggy bank smart contract in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming\nlanguage.\nThis part will focus on how you can write integration-tests for your piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> library.\nThe library simulates part of a blockchain <em>locally</em> to allow you to create one or more contracts and interact with them in the tests.</p>"}
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
