const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #root = null;
  root() {
    if (this.#root === null) return null;
    return this.#root;
  }

  add(data) {
    if (this.#root === null) {
      this.#root = new Node(data);
      return;
    }
    let temp = this.#root;
    while (temp) {
      if (temp.data > data) {
        if(temp.left === null){
          temp.left = new Node(data);
          return;
        }
        temp = temp.left;
      }
      else{
        if(temp.right === null){
          temp.right = new Node(data);
          return;
        }
        temp = temp.right;
      } 
    }
  }

  has(data) {
    let temp = this.find(data);
    if(temp === null) return false;
    return true;
  }

  find(data) {
    let temp = this.#root;
    while(true){
      let [left, right] = [false, false];
      if (temp.left !== null) left = true;
      if (temp.right !== null) right = true;
      if (temp.data === data){
        return temp;
      }
      if (left && temp.data > data) {
        temp = temp.left;
        continue;
      }
      if (right && temp.data < data) {
        temp = temp.right;
        continue;
      }
      if(!left && !right){
        if(temp.data === data) return temp;
        else return null;
      }
      if((left && temp.data < data) || (right && temp.data > data)){
        return null;
      }
    }
  }

  remove(data) {
    this.#root = this.#removeNode(this.#root, data);
  }
  #removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value > node.data) {
      node.right = this.#removeNode(node.right, value);
      return node;
    } 
    else if (value < node.data) {
      node.left = this.#removeNode(node.left, value);
      return node;
    }
    else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minData = node.right;
      while (minData.left) {
        minData = minData.left;
      }
      node.data = minData.data;
      node.right = this.#removeNode(node.right, minData.data);
      return node;
    }
  }

  min() {
    let temp = this.#root;
    while (temp.left !== null) temp = temp.left;
    return temp.data;
  }

  max() {
    let temp = this.#root;
    while (temp.right !== null) temp = temp.right;
    return temp.data;
  }
};
