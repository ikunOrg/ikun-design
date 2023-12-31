export default function contains(root: Node | null | undefined, n: Node | null) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  return false;
}
