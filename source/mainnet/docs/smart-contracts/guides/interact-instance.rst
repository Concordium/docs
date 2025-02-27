.. _interact-instance:

========
Interact
========

This guide will show you, how to interact with a smart contract instance, which
means triggering a receive function that, possibly, updates the state of the
instance.

You can also watch a video about how to update a smart contact instance.

.. raw:: html

   <iframe src="https://www.youtube.com/embed/rbr1w3kJYcU?si=0YHfK1celfvaz-Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Preparation
===========

Make sure that you are :ref:`running a node<node-requirements>` using the latest :ref:`Concordium software<downloads>` and that you have a
smart-contract instance on-chain to inspect.

.. seealso::
   For how to deploy a smart contract module see :ref:`deploy-module` and for
   how to create an instance :ref:`initialize-contract`.

Since interactions with a smart contract are transactions, you should also make
sure to have ``concordium-client`` set up with an account with enough CCD to pay
for the transactions.

.. note::

   The cost of this transaction depends on the size of the parameters sent to
   the receive function and the complexity of the function itself.

Interaction
===========

To update an instance with address index ``0`` using the parameterless
receive function ``my_receive`` while allowing up to 10000 energy to be used,
run the following command:

.. code-block:: console

   $concordium-client contract update 0 --entrypoint my_receive --energy 10000 --sender MyAccount

If successful, the output should be similar to the following:

.. code-block:: console

   Successfully updated contract instance {"index":0,"subindex":0} using the entrypoint 'my_receive'.

As you can see, the subindex defaults to ``0``.

.. _interact-instance-json-parameters:

Passing parameters in JSON format
---------------------------------

A parameter in JSON format can be passed if a :ref:`smart contract schema
<contract-schema>` is supplied, either as a file or embedded in the module.
The schema is used to serialize the JSON into binary. You can read more about JSON parameters :ref:`here<json-params>`.

.. seealso::

   :ref:`Read more about why and how to use smart contract schemas
   <contract-schema>`.

To update an instance with address index ``0`` using the receive function
``my_parameter_receive`` with a parameter file ``my_parameter.json`` in JSON
format, run the following command:

.. code-block:: console

   $concordium-client contract update 0 --sender MyAccount --entrypoint my_parameter_receive \
            --energy 10000 \
            --parameter-json my_parameter.json

If successful, the output should be similar to the following:

.. code-block:: console

   Successfully updated contract instance {"index":0,"subindex":0} using the entrypoint 'my_parameter_receive'.

Otherwise, an error describing the problem is displayed.

.. seealso::

   For more information about contract instance addresses, see
   :ref:`references-on-chain`.

.. note::

   If the parameter provided in JSON format does not conform to the type
   specified in the schema, an error message will be displayed. For example:

    .. code-block:: console

       Error: Could not decode parameters from file 'my_parameter.json' as JSON:
       Expected value of type "UInt64", but got: "hello".
       In field 'first_field'.
       In {
           "first_field": "hello",
           "second_field": 42
       }.

.. note::

   If a given module does not contain an embedded schema, it can be supplied
   using the ``--schema /path/to/schema.bin`` parameter.

.. note::

   CCD can also be transferred to a contract during updates using the
   ``--amount AMOUNT`` parameter.

Passing parameters in binary format
-----------------------------------

When passing parameters in binary format, a
:ref:`contract schema <contract-schema>` is not needed.

To update an instance with address index ``0`` using the receive function
``my_parameter_receive`` with a parameter file ``my_parameter.bin`` in binary
format, run the following command:

.. code-block:: console

   $concordium-client contract update 0 --sender MyAccount --entrypoint my_parameter_receive \
            --energy 10000 \
            --parameter-binary my_parameter.bin

If successful, the output should be similar to the following:

.. code-block:: console

   Successfully updated contract instance {"index":0,"subindex":0} using the entrypoint 'my_parameter_receive'.

.. seealso::

   For information on how to work with parameters in smart contracts, see
   :ref:`working-with-parameters`.
