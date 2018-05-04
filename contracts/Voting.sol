pragma solidity ^0.4.14;

contract PanelVoting {

  //Associate an address with a grade
  mapping(address => uint) public panelistGrade;

  /*Associate a proposal number with a dynamically
    sized array which will contain panelist 
    grade mappings 
  */
  mapping(bytes32 => uint[]) public results;  

  function vote(bytes32 proposal, uint grade) public {
    /* The vote function, when called by an address,
       must take as input the proposal number and 
       the grade that the panelist gives the proposal.
       The function must then associate that information
       with the msg.sender address and store the grade 
       in the proper struct for that proposal number.
    */

    /* Populate the panelistGrade mapping with the
       score the panelist gave the proposal:
    */
    panelistGrade[msg.sender] = grade;

    /* Push that mapping into the results array */
    results[proposal].push(panelistGrade[msg.sender]);
  }

  function getResults(bytes32 proposal) public returns(uint[]) {
    uint[] votes;
    votes = results[proposal];
    return votes;
  }
}
