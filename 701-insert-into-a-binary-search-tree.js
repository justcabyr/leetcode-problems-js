/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;

  let curr = root,
    prev = null;

  while (curr) {
    if (curr.val < val) {
      prev = curr;
      curr = curr.right;
    } else {
      prev = curr;

      curr = curr.left;
    }
  }
  if (val < prev.val) prev.left = newNode;
  else prev.right = newNode;

  return root;
};
