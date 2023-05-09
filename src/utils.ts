import { Jsonifiable } from 'type-fest';
// Until rp#454 gets merged

export type Tree = Jsonifiable | { [key: string ]: Tree | React.ComponentType };
type TreeFilter = string | ((tree: Tree) => boolean);

/**
 * All credit goes to rauenzi for writing up this implementation.
 * You can find the original source here:
 * <https://github.com/rauenzi/BDPluginLibrary/blob/683d6abc70f149a39e2f0433ffb65e55ca47c4e3/release/0PluginLibrary.plugin.js#L2585C15-L2611>
 *
 * @remarks Used mainly in findInReactTree
 */
export function findInTree(
  tree: Tree,
  searchFilter: TreeFilter,
  args: { walkable?: string[]; ignore?: string[]; maxRecursion: number } = { maxRecursion: 100 },
): Tree | null | undefined {
  const { walkable, ignore, maxRecursion } = args;

  if (maxRecursion <= 0) return undefined;

  if (typeof searchFilter === "string") {
    // @ts-expect-error
    if (Object.prototype.hasOwnProperty.call(tree, searchFilter)) return tree[searchFilter];
  } else if (searchFilter(tree)) {
    return tree;
  }

  if (typeof tree !== "object" || tree == null) return undefined;

  let tempReturn;
  if (Array.isArray(tree)) {
    for (const value of tree) {
      tempReturn = findInTree(value, searchFilter, {
        walkable,
        ignore,
        maxRecursion: maxRecursion - 1,
      });
      if (typeof tempReturn != "undefined") return tempReturn;
    }
  } else {
    const toWalk = walkable == null ? Object.keys(tree) : walkable;
    for (const key of toWalk) {
      if (!Object.prototype.hasOwnProperty.call(tree, key) || ignore?.includes(key)) continue;
      // @ts-expect-error
      tempReturn = findInTree(tree[key], searchFilter, {
        walkable,
        ignore,
        maxRecursion: maxRecursion - 1,
      });
      if (typeof tempReturn != "undefined") return tempReturn;
    }
  }
  return tempReturn;
}

/**
 * Find the component you are looking for in a tree, recursively.
 *
 * @param tree The tree to search through
 * @param searchFilter The filter. Either a string or a function. Should be unique
 * @param maxRecursion The max depth. Avoids call stack exceeded error.
 * @returns The component you are looking for
 */
export function findInReactTree(
  tree: Tree,
  searchFilter: TreeFilter,
  maxRecursion = 100,
): Tree | null | undefined {
  return findInTree(tree, searchFilter, {
    walkable: ["props", "children", "child", "sibling"],
    maxRecursion,
  });
}
