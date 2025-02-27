.. include:: ../../variables.rst
.. _backup-import-recover:

===================
Backup and recovery
===================

It can be necessary to recover your wallet, for example if you get a new computer or mobile device. It is important to know how you can recover your wallet on a device if necessary. There are differences between what the wallets require for recovery.

.. list-table::
   :widths: 10 10 10
   :header-rows: 1

   *  - Desktop Wallet
      - |bw|
      - |cryptox|
   *  - Backup recommended; can recover without backup
      - Seed phrase required
      - Seed phrase required
   *  - Backup file includes account names and addresses, identities, and the address book. LEDGER device is needed for a full recovery.
      - Backup is not necessary but seed phrase is needed.
      - Backup is not necessary but seed phrase is needed.
   *  - Private keys are stored on the LEDGER device that is secured by a PIN code and backed up by recovery phrase.
      - Private keys are stored in the wallet and secured by the passcode used to encrypt the wallet and backed up with the seed phrase.
      - Private keys are stored in the wallet and backed up by a seed phrase.
   *  - Cannot recover in other wallet types
      - Can recover in |bw| and |cryptox|
      - Can recover in |bw| and |cryptox|

.. toctree::
   :hidden:
   :maxdepth: 1

   ../guides/export-import
   ../guides/recover-wallet
