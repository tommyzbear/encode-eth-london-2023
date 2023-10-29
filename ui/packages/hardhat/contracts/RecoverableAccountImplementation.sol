// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./account/AccountImplementationV1.sol";


/**
 * @title Social threshold recoverable account implementation
 *
 * @author @morkeltry
 */
contract PersonalAccountImplementationV1 is AccountImplementationV1 {

// frens who may validate a request to change owner
struct recoveryAuthority {
  address authority, 
  uint8 weight
}

// a request in support of a change of owner to a given address. 
// To be validated both at time of submission (prevent griefing) and at time of change (prrevent expired or removed authorities)
struct recoveryRequest {
  address recoveryAuthority,
  uint8 weight,
  uint32 expiry,
  uint256 password
}

mapping (address => uint8) recoveryAuthorities;

// array to allow enumeration of all validated recovery authorites
recoveryAuthority[] allRecoveryAuthorities;

// validated recovery requests in support of a new owner are collected at the array indexed by the new owner address.
mapping (address => RecoveryRequests[]) newOwnerAuthorities;

uint16 threshold;

event OwnerChanged(
  address to,
  address[] authorites
);

event recoveryValidationAdded(
  address authority,
  address newOwner
);

event AuthorityAdded(
  address added,
  address[] by
);

event AuthorityRemoved(
  address removed,
  address[] by
);


constructor(address owner) public AccountImplementationV1() {
    threshold=1;
    originalOwner = new recoveryAuthority(owner, 255);
    recoveryAuthorities[owner] = 255;
    recoveryAuthority.push(originalOwner);
}

modifier onlyRecoveryAuthority () {
    require(
      recoveryAuthority[msg.sender].weight > 0,
      "sender is not a recovery authority or was removed."
    );

function addRecoveryRequest (weight, expiry, password) onlyRecoveryAuthority {
  // check validity
  recoveryRequests [msg.sender()] =  (weight, expiry, password);

}

function getRecoveryRequests ()

function getRecoveryThreshold()

}
