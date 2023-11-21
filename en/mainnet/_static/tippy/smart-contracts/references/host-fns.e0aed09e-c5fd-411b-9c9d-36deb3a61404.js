selector_to_html = {"a[href=\"#concordium.verify_ecdsa_secp256k1_signature\"]": "<dt class=\"sig sig-object py\" id=\"concordium.verify_ecdsa_secp256k1_signature\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">verify_ecdsa_secp256k1_signature</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">public_key</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">signature</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">message</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Verify an ecdsa over secp256k1 signature with the bitcoin-core implementation.</p></dd>", "a[href=\"#concordium.state_iterator_next\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_iterator_next\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_iterator_next</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iterator</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Return the next entry along the iterator, and advance the iterator.</p></dd>", "a[href=\"#concordium.state_delete_prefix\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_delete_prefix\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_delete_prefix</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Delete a prefix in the tree, that is, delete all parts of the tree that have\nthe given key as a prefix.</p></dd>", "a[href=\"#concordium.hash_keccak_256\"]": "<dt class=\"sig sig-object py\" id=\"concordium.hash_keccak_256\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">hash_keccak_256</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_len</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">output</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Compute the Keccak-256 digest of the data.</p></dd>", "a[href=\"#concordium.get_receive_self_address\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_self_address\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_self_address</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Get the address of the contract instance, running the receive function.</p></dd>", "a[href=\"#concordium.get_receive_self_balance\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_self_balance\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_self_balance</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Get the current balance of the contract instance.</p></dd>", "a[href=\"#concordium.get_slot_time\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_slot_time\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_slot_time</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Get time in milliseconds at the beginning of this block.</p></dd>", "a[href=\"#concordium.state_lookup_entry\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_lookup_entry\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_lookup_entry</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Lookup an entry with the given key.</p></dd>", "a[href=\"#concordium.get_receive_invoker\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_invoker\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_invoker</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Get the address of the account that initiated the top-level transaction\nwhich lead to triggering the receive function.</p></dd>", "a[href=\"#concordium.state_iterator_key_size\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_iterator_key_size\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_iterator_key_size</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iterator</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Get the length of the key that the iterator is currently pointing at.</p></dd>", "a[href=\"#concordium.hash_sha2_256\"]": "<dt class=\"sig sig-object py\" id=\"concordium.hash_sha2_256\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">hash_sha2_256</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_len</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">output</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Compute the SHA2-256 digest of the data.</p></dd>", "a[href=\"#concordium.state_iterator_key_read\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_iterator_key_read\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_iterator_key_read</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iterator</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">offset</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Read a section of the key the iterator is currently pointing at.\nBefore the first call to the <a class=\"reference external\" href=\"#concordium.state_iterator_next\"><code class=\"docutils literal notranslate\"><span class=\"pre\">state_iterator_next</span></code></a> function this returns\n(sections of) the key that was used to create the iterator. After\nthe iterator is exhausted, this method returns (sections of) the key at the\nfirst node returned by the iterator.</p></dd>", "a[href=\"#concordium.get_init_origin\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_init_origin\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_init_origin</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Get the address of the account that triggered the init function.</p></dd>", "a[href=\"#concordium.verify_ed25519_signature\"]": "<dt class=\"sig sig-object py\" id=\"concordium.verify_ed25519_signature\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">verify_ed25519_signature</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">public_key</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">signature</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">message</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">message_len</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Verify an ed25519 signature.</p></dd>", "a[href=\"#concordium.invoke\"]": "<dt class=\"sig sig-object py\" id=\"concordium.invoke\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">invoke</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">tag</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Invoke a host instruction which is either a <em>transfer to an account</em> or a <em>call to a\ncontract</em>.</p></dd>", "a[href=\"#concordium.state_create_entry\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_create_entry\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_create_entry</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Create an empty entry with the given key.\nIf an entry at that key already exists it is set to the empty entry.</p></dd>", "a[href=\"#concordium.state_entry_size\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_entry_size\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_entry_size</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">entry</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Get the byte size of the entry.</p></dd>", "a[href=\"#concordium.get_policy_section\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_policy_section\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_policy_section</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">policy_bytes</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">offset</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Read a section of the policy to the given location.\nReturn the number of bytes read.\nAssumes the location has enough memory to write the requested length into.</p></dd>", "a[href=\"#concordium.state_entry_read\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_entry_read\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_entry_read</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">entry</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">location</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">offset</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Read a section of the entry to the given location. Return the number of\nbytes written. The location is assumed to contain enough memory to write the\nrequested length into. If not, the function will trap and abort execution of\nthe contract.</p></dd>", "a[href=\"#concordium.state_entry_write\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_entry_write\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_entry_write</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">entry</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">location</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">offset</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Write a section of the memory to the entry at a given offset.\nReturn the number of bytes written.\nThe offset must be less than or equal to the current entry size.</p></dd>", "a[href=\"#concordium.state_iterator_delete\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_iterator_delete\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_iterator_delete</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iterator</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Delete the iterator, unlocking the subtree.</p></dd>", "a[href=\"#concordium.get_parameter_size\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_parameter_size\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_parameter_size</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">i</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Get the byte size of the <code class=\"docutils literal notranslate\"><span class=\"pre\">i</span></code>-th parameter to the call. The 0-th parameter is\nalways the original parameter that the method was invoked with. Invoking\nother contracts with <code class=\"docutils literal notranslate\"><span class=\"pre\">invoke</span></code> adds additional parameters to the stack.</p></dd>", "a[href=\"#concordium.hash_sha3_256\"]": "<dt class=\"sig sig-object py\" id=\"concordium.hash_sha3_256\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">hash_sha3_256</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">data_len</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">output</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Compute the SHA3-256 digest of the data.</p></dd>", "a[href=\"#concordium.state_entry_resize\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_entry_resize\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_entry_resize</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">entry</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">new_size</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Resize entry to the new value (truncate if new size is smaller).\nIf the new size is bigger, the additional state is initialized with <code class=\"docutils literal notranslate\"><span class=\"pre\">0</span></code>.</p></dd>", "a[href=\"#concordium.get_receive_sender\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_sender\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_sender</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Get the address of the account or contract, triggering the receive function.</p></dd>", "a[href=\"#concordium.get_receive_entrypoint_size\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_entrypoint_size\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_entrypoint_size</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Get the size of the entrypoint that was named. See <code class=\"docutils literal notranslate\"><span class=\"pre\">get_receive_entrypoint</span></code>\nfor more information on the use of this host function.</p></dd>", "a[href=\"#concordium.state_delete_entry\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_delete_entry\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_delete_entry</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">key_length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Delete the entry.</p></dd>", "a[href=\"#concordium.state_iterate_prefix\"]": "<dt class=\"sig sig-object py\" id=\"concordium.state_iterate_prefix\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">state_iterate_prefix</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">prefix_start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">prefix_length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Construct an iterator over a part of the tree. This <strong>locks the part of\nthe tree that has the given prefix</strong>. Locking means that no\ndeletions or insertions of entries may occur in that subtree.</p></dd>", "a[href=\"#concordium.get_parameter_section\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_parameter_section\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_parameter_section</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">i</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">location</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">offset</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Read a section of the <code class=\"docutils literal notranslate\"><span class=\"pre\">i</span></code>-th parameter to the given location in Wasm linear memory.\nReturn the number of bytes read.\nThe location is assumed to contain enough memory to write the requested\nlength into. If not, the function will trap and abort execution of\nthe contract.</p></dd>", "a[href=\"#concordium.log_event\"]": "<dt class=\"sig sig-object py\" id=\"concordium.log_event\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">log_event</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">length</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i32</span></span></span></dt><dd><p>Adds a log item from an array of bytes.\nIf not enough data can be read then this function will trap and abort\nexecution of the smart contract.</p></dd>", "a[href=\"#concordium.get_receive_owner\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_owner\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_owner</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Get the address of the account, which created the contract instance.</p></dd>", "a[href=\"#concordium.upgrade\"]": "<dt class=\"sig sig-object py\" id=\"concordium.upgrade\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">upgrade</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">module</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">i64</span></span></span></dt><dd><p>Upgrade to a new module. This will change the smart contract module used for\nthis smart contract instance.</p></dd>", "a[href=\"#concordium.get_receive_entrypoint\"]": "<dt class=\"sig sig-object py\" id=\"concordium.get_receive_entrypoint\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">concordium.</span></span><span class=\"sig-name descname\"><span class=\"pre\">get_receive_entrypoint</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">start</span></span></em><span class=\"sig-paren\">)</span></dt><dd><p>Write the receive entrypoint name into the given location.\nIt is assumed that the location contains enough space to write the name.\nFor regular receive methods, the entrypoint name will always be the same as\nthe receive method\u2019s entrypoint name. But for fallback entrypoints, it might\ndiffer.</p></dd>"}
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
