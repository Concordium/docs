selector_to_html = {"a[href=\"#string\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">String</span></code><a class=\"headerlink\" href=\"#string\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string.</p>", "a[href=\"#u128-i128\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">U128</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">I128</span></code><a class=\"headerlink\" href=\"#u128-i128\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string. The value must be within the bounds of the type.\nExample:</p>", "a[href=\"#unnamed\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Unnamed</span></code><a class=\"headerlink\" href=\"#unnamed\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array, with the fields as items corresponding to the types in\nthe field schema.</p><p>Example of unnamed fields in the Rust struct:</p>", "a[href=\"#schema-json-representation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Schema JSON representation<a class=\"headerlink\" href=\"#schema-json-representation\" title=\"Link to this heading\">#</a></h1><p>This is a reference of how bytes, such as the contract state and parameters can\nbe represented as JSON together with a <code class=\"docutils literal notranslate\"><span class=\"pre\">SchemaType</span></code>.</p>", "a[href=\"#empty\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Empty</span></code><a class=\"headerlink\" href=\"#empty\" title=\"Link to this heading\">#</a></h3><p>Supplied as an empty JSON array.</p><p>Example of empty fields in the Rust enum <code class=\"docutils literal notranslate\"><span class=\"pre\">Option</span></code>:</p>", "a[href=\"#timestamp\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Timestamp</span></code><a class=\"headerlink\" href=\"#timestamp\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string using the <a class=\"reference external\" href=\"https://tools.ietf.org/html/rfc3339\">RFC3339</a> format with the precision of\nmilliseconds. Example:</p>", "a[href=\"#struct\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Struct</span></code><a class=\"headerlink\" href=\"#struct\" title=\"Link to this heading\">#</a></h3><p>Supplied as the fields directly, see below.</p>", "a[href=\"#u8-u16-u32-u64-i8-i16-i32-i64\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">U8</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">U16</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">U32</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">U64</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">I8</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">I16</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">I32</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">I64</span></code><a class=\"headerlink\" href=\"#u8-u16-u32-u64-i8-i16-i32-i64\" title=\"Link to this heading\">#</a></h3><p>Give a JSON number within the size of the schema type.</p>", "a[href=\"#set\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Set</span></code><a class=\"headerlink\" href=\"#set\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array with <em>unique</em> items, depending on the\nnested type.\nExample of <code class=\"docutils literal notranslate\"><span class=\"pre\">List(U16)</span></code>:</p>", "a[href=\"#enum\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Enum</span></code><a class=\"headerlink\" href=\"#enum\" title=\"Link to this heading\">#</a></h3><p>An enum variant is supplied as an JSON object containing a single\nproperty, where the name of the variant as the property and the fields as the\nvalue. More about the fields below.</p><p>Example of JSON for an enum <code class=\"docutils literal notranslate\"><span class=\"pre\">Option</span></code>:</p>", "a[href=\"#contractname\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ContractName</span></code><a class=\"headerlink\" href=\"#contractname\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON object with a <code class=\"docutils literal notranslate\"><span class=\"pre\">contract</span></code> field of type JSON string.\nExample:</p>", "a[href=\"#named\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Named</span></code><a class=\"headerlink\" href=\"#named\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON object, with the field names as properties and corresponding\nvalues as property values.\nThe ordering of the fields in JSON is rearranged according to the order in the\nschema field type.</p><p>Example of named fields in the Rust struct:</p>", "a[href=\"#json-for-schema-type\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">JSON for schema type<a class=\"headerlink\" href=\"#json-for-schema-type\" title=\"Link to this heading\">#</a></h2><h3><code class=\"docutils literal notranslate\"><span class=\"pre\">Unit</span></code><a class=\"headerlink\" href=\"#unit\" title=\"Link to this heading\">#</a></h3><p>No bytes are produced no matter the value given here.</p>", "a[href=\"#map\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Map</span></code><a class=\"headerlink\" href=\"#map\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array with key-value pairs, depending on the type of\nthe key and the type of value. Example of <code class=\"docutils literal notranslate\"><span class=\"pre\">Map(AccountAddress,</span> <span class=\"pre\">U64)</span></code>:</p>", "a[href=\"#receivename\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ReceiveName</span></code><a class=\"headerlink\" href=\"#receivename\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON object with the fields <code class=\"docutils literal notranslate\"><span class=\"pre\">contract</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">func</span></code>, both of\ntype JSON string. Example:</p>", "a[href=\"#array\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Array</span></code><a class=\"headerlink\" href=\"#array\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array with the length specified in the\nschema and items depending on the nested type. Example of <code class=\"docutils literal notranslate\"><span class=\"pre\">Array(12,</span> <span class=\"pre\">U8)</span></code>:</p>", "a[href=\"#contractaddress\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ContractAddress</span></code><a class=\"headerlink\" href=\"#contractaddress\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON object with <code class=\"docutils literal notranslate\"><span class=\"pre\">index</span></code> field and\noptionally <code class=\"docutils literal notranslate\"><span class=\"pre\">subindex</span></code> field, both JSON numbers. Example:</p>", "a[href=\"#unit\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Unit</span></code><a class=\"headerlink\" href=\"#unit\" title=\"Link to this heading\">#</a></h3><p>No bytes are produced no matter the value given here.</p>", "a[href=\"#list\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">List</span></code><a class=\"headerlink\" href=\"#list\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array with items, depending on the\nnested type. Example of <code class=\"docutils literal notranslate\"><span class=\"pre\">List(U16)</span></code>:</p>", "a[href=\"#duration\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Duration</span></code><a class=\"headerlink\" href=\"#duration\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string as a list of time measures separated by whitespace.\nA measure is a number followed by the unit and no whitespace between is allowed.\nEvery measure is accumulated into the total duration. The string is allowed to\ncontain any number of measures with the same unit in no particular order.</p>", "a[href=\"../general/contract-schema.html#contract-schema-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Smart contract schemas<a class=\"headerlink\" href=\"#smart-contract-schemas\" title=\"Link to this heading\">#</a></h1><p>A smart contract schema is a description of how to represent bytes in a more\nstructured representation. It can be used by external tools when displaying the\nstate of a smart contract instance and for specifying parameters using a\nstructured representation, such as JSON.</p>", "a[href=\"#pair\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Pair</span></code><a class=\"headerlink\" href=\"#pair\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON array with two items, depending on the\nnested types. Example of <code class=\"docutils literal notranslate\"><span class=\"pre\">Pair(U8,</span> <span class=\"pre\">ContractAddress)</span></code>:</p>", "a[href=\"#amount\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Amount</span></code><a class=\"headerlink\" href=\"#amount\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string in micro CCD. Example of 42 CCD:</p>", "a[href=\"#json-for-schema-type-fields\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">JSON for schema type fields<a class=\"headerlink\" href=\"#json-for-schema-type-fields\" title=\"Link to this heading\">#</a></h2><p>Structs and the different variants in an enum can have fields, and such fields\ncan either be named or unnamed. Unnamed fields are referenced by position.</p>", "a[href=\"#accountaddress\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">AccountAddress</span></code><a class=\"headerlink\" href=\"#accountaddress\" title=\"Link to this heading\">#</a></h3><p>Supplied as a JSON string. Example:</p>"}
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
